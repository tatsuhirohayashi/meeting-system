import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../../../apis/auth";
import { useAuthContext } from "../../../hooks/useAuthContext";

const schema = z.object({
    email: z.string().email("メールアドレスの形式で入力してください").max(254, "254文字以内で入力してください"),
    password: z.string().min(8, "8文字以上で入力してください").max(32, "32文字以内で入力してください"),
    password_confirmation: z.string().min(8, "8文字以上で入力してください").max(32, "32文字以内で入力してください"),
});

export const useLoginTemplate = () => {
    const { signIn } = useAuthContext();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            password_confirmation: "",
        },
    });

    const handleLoginSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                if (values.password !== values.password_confirmation) {
                    setError("password", {
                        type: "manual",
                        message: "確認用パスワードと一致しません",
                    });
                    return;
                }
                const { email, password } = values;
                const res = await login(email, password);
                if (res.code !== 200 || !res.data) {
                    setError("email", {
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
        handleLoginSubmit,
    };
};