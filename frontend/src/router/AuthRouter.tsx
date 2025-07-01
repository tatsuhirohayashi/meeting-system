import { Route, Routes } from "react-router";
import { NAVIGATION_LIST } from "../constants/navigation";
import { LoginPage, SignUpPage } from "../pages";

export const AuthRouter = () => {
    return (
        <Routes>
            <Route index path={NAVIGATION_LIST.LOGIN} element={<LoginPage />} />
            <Route path={NAVIGATION_LIST.SIGNUP} element={<SignUpPage />} />
        </Routes>
    );
};