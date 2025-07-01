import { BrowserRouter } from "react-router";
import { AuthRouter } from "./AuthRouter";
import { MeetingRouter } from "./MeetingRouter";
import { AuthProvider } from "../contexts/AuthContext";

export const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AuthRouter />
                <MeetingRouter />
            </AuthProvider>
        </BrowserRouter>
    );
};