import { Route, Routes } from "react-router";
import { NAVIGATION_LIST } from "../constants/navigation";
import { MeetingCreatePage, MeetingDetailPage, MeetingEditPage, MeetingListPage } from "../pages";

export const MeetingRouter = () => {
    return (
        <Routes>
            <Route path={NAVIGATION_LIST.TOP} element={<MeetingListPage />} />
            <Route path={NAVIGATION_LIST.DETAIL} element={<MeetingDetailPage />} />
            <Route path={NAVIGATION_LIST.CREATE} element={<MeetingCreatePage />} />
            <Route path={NAVIGATION_LIST.EDIT} element={<MeetingEditPage />} />
        </Routes>
    );
};