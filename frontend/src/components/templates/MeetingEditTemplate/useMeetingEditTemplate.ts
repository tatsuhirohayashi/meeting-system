import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";
import { getMeeting, updateMeeting } from "../../../apis/meeting";
import { NAVIGATION_PATH } from "../../../constants/navigation";

const schema = z.object({
    applicationDate: z.string().min(1, "申込日は必須です。").max(50, "50文字以内で入力してください。"),
    applicant: z.string().min(1, "申込者は必須です。").max(50, "50文字以内で入力してください。"),
    consultationOverview: z.string().min(1, "相談概要は必須です。").max(50, "50文字以内で入力してください。"),
    consultationContent: z.string().min(1, "相談内容は必須です。").max(400, "400文字以内で入力してください。"),
});

export const useMeetingEditTemplate = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            applicationDate: "",
            applicant: "",
            consultationOverview: "",
            consultationContent: "",
        },
    });

    const fetchMeeting = useCallback(async () => {
        if (!id) return;
        const response = await getMeeting({ id });
        if (!response.data) return;
        setValue("applicationDate", response.data.applicationDate);
        setValue("applicant", response.data.applicant);
        setValue("consultationOverview", response.data.consultationOverview);
        setValue("consultationContent", response.data.consultationContent);
    }, [id, setValue]);

    const handleEditSubmit = handleSubmit(
        useCallback(
            async (values: z.infer<typeof schema>) => {
                if (!id) return;
                await updateMeeting({
                    id,
                    applicationDate: values.applicationDate,
                    applicant: values.applicant,
                    consultationOverview: values.consultationOverview,
                    consultationContent: values.consultationContent,
                });
                navigate(NAVIGATION_PATH.TOP);
            },
            [navigate, id]
        )
    );

    useEffect(() => {
        fetchMeeting();
    }, [fetchMeeting]);

    return {
        control,
        errors,
        handleEditSubmit,
    };
};