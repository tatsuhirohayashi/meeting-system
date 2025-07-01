import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { createMeeting } from "../../../apis/meeting";
import { NAVIGATION_PATH } from "../../../constants/navigation";

const schema = z.object({
    applicationDate: z.string().min(1, "申込日は必須です。").max(50, "50文字以内で入力してください。"),
    applicant: z.string().min(1, "申込者は必須です。").max(50, "50文字以内で入力してください。"),
    consultationOverview: z.string().min(1, "相談概要は必須です。").max(50, "50文字以内で入力してください。"),
    consultationContent: z.string().min(1, "相談内容は必須です。").max(400, "400文字以内で入力してください。"),
});

export const useMeetingCreateTemplate = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            applicationDate: "",
            applicant: "",
            consultationOverview: "",
            consultationContent: "",
        },
    });

    const handleAddSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                await createMeeting({
                    applicationDate: values.applicationDate,
                    applicant: values.applicant,
                    consultationOverview: values.consultationOverview,
                    consultationContent: values.consultationContent,
                });
                navigate(NAVIGATION_PATH.TOP);
            },
            [navigate]
        )
    );

    return {
        control,
        errors,
        handleAddSubmit,
    }
};