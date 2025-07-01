import type { FC } from "react";
import { useSignUpTemplate } from "./useSignUpTemplate";
import styles from "./style.module.css";
import { Controller } from "react-hook-form";
import { InputFormSection } from "../../molecules";
import { CommonButton } from "../../atoms";
import { NavLink } from "react-router";
import { NAVIGATION_LIST } from "../../../constants/navigation";

export const SignUpTemplate: FC = () => {
    const { control, errors, handleRegisterSubmit } = useSignUpTemplate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SignUp</h1>
            <form className={styles.form} onSubmit={handleRegisterSubmit}>
                <div className={styles.area}>
                    <Controller
                        name="name"
                        render={({ field }) => (
                            <InputFormSection
                                type="text"
                                placeholder="user name"
                                label="ユーザー名"
                                errorMessage={errors.email?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="email"
                        render={({ field }) => (
                            <InputFormSection
                                type="email"
                                placeholder="email"
                                label="Eメール"
                                errorMessage={errors.email?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="password"
                        render={({ field }) => (
                            <InputFormSection
                                type="password"
                                placeholder="password"
                                label="パスワード"
                                errorMessage={errors.password?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="password_confirmation"
                        render={({ field }) => (
                            <InputFormSection
                                type="password"
                                placeholder="confirm password"
                                label="パスワード（確認用）"
                                errorMessage={errors.password_confirmation?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <CommonButton type="submit">{"Register"}</CommonButton>
                </div>
                <div className={styles.link}>
                    <NavLink to={NAVIGATION_LIST.LOGIN}>&lt;&lt; to login page</NavLink>
                </div>
            </form>
        </div>
    );
};

