import { vi, describe, it, expect } from "vitest";
import type { Mock } from "vitest";
import { createMeeting } from "../../../apis/meeting";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NAVIGATION_LIST } from "../../../constants/navigation";
import { MeetingCreatePage } from "../../../pages";
import { AuthProvider } from "../../../contexts/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router";

//認証モック
vi.mock("../../../hooks/useAuth", () => ({
    useAuth: () => ({
        user: { id: "1", name: "Test User", email: "test@example.com" },
        isAuth: true,
        signIn: vi.fn(),
        signOut: vi.fn(),
    }),
}));

//createMeetingのモック
vi.mock("../../../apis/meeting", () => ({
    createMeeting: vi.fn(),
}));

//navigateのモック
const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
    const actual = await vi.importActual<typeof import("react-router")>("react-router");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("handleAddSubmit", () => {
    it("フォーム送信でcreateMeetingが呼ばれ、navigateされる（会議の作成&トップページに遷移）", async () => {
        const mockCreateMeeting = createMeeting as Mock;

        mockCreateMeeting.mockResolvedValueOnce({
            code: 201,
            // data: {

            // }
            message: "申込作成成功",
        });
        render(
            <MemoryRouter initialEntries={[NAVIGATION_LIST.CREATE]}>
                <AuthProvider>
                    <Routes>
                        <Route path={NAVIGATION_LIST.CREATE} element={<MeetingCreatePage />} />
                    </Routes>
                </AuthProvider>
            </MemoryRouter>
        );

        //各入力値に値を入れる
        fireEvent.change(screen.getByPlaceholderText("申込日"), {
            target: { value: "6月11日" },
        });
        fireEvent.change(screen.getByPlaceholderText("申込者"), {
            target: { value: "田中太郎" },
        });
        fireEvent.change(screen.getByPlaceholderText("相談概要"), {
            target: { value: "面談について" },
        });
        fireEvent.change(screen.getByPlaceholderText("相談内容"), {
            target: { value: "詳細内容です" },
        });
        fireEvent.click(screen.getByRole("button", { name: /Create Meeting/i }));

        await waitFor(() => {
            expect(mockCreateMeeting).toHaveBeenCalledWith({
                applicationDate: "6月11日",
                applicant: "田中太郎",
                consultationOverview: "面談について",
                consultationContent: "詳細内容です",
            });
            expect(mockNavigate).toHaveBeenCalledWith("/meeting");
        });
    });
});