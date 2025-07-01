import { z } from "zod";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { register } from "../../../apis/auth";


const schema = z.object({
    name: z.string().min(1, "1文字以上で入力してください").max(60, "60文字以内で入力してください"),
    email: z.string().email("メールアドレスの形式で入力してください").max(254, "254文字以内で入力してください"),
    password: z.string().min(8, "8文字以上で入力してください").max(32, "32文字以内で入力してください"),
    password_confirmation: z.string().min(8, "8文字以上で入力してください").max(32, "32文字以内で入力してください"),
});

export const useSignUpTemplate = () => {
    const { signIn } = useAuthContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const handleRegisterSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                if (values.password !== values.password_confirmation) {
                    setError("password", {
                        type: "manual",
                        message: "確認用パスワードと一致しません",
                    });
                    return;
                }
                const { name, email, password } = values;
                const res = await register(name, email, password);
                if (res.code !== 201 || !res.data) {
                    setError("name", {
                        type: "manual",
                        message: res.message,
                    });
                    return;
                }

                signIn(res.data?.user, res.data?.token);
            },
            [signIn, setError]
        )
    );

    return {
        control,
        errors,
        handleRegisterSubmit,
    };
};