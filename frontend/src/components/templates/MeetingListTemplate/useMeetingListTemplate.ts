import { useCallback, useEffect, useMemo, useState } from "react";
import { z } from "zod";
import type { MeetingType } from "../../../types/Meeting";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteMeeting, getMeetings } from "../../../apis/meeting";

const schema = z.object({
    keyword: z.string(),
});

export const useMeetingListTemplate = () => {
    const [meetingList, setMeetingList] = useState<Array<MeetingType>>([]);

    const { control, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { keyword: "" },
    });
    const searchKeyword = watch("keyword");

    // 表示用MeetingList
    const showMeetingList = useMemo(() => {
        const regexp = new RegExp("^" + searchKeyword, "i");
        console.log(meetingList);
        return meetingList.filter((meeting) => {
            //検索キーワードに部分一致したMeetingだけを一覧表示する
            return meeting.consultationOverview.match(regexp);
        });
    }, [meetingList, searchKeyword]);

    const fetchMeetingList = useCallback(async () => {
        const response = await getMeetings();
        if (!response?.data) return;
        setMeetingList(response.data.meetings);
        console.log(response);
    }, []);

    const handleDeleteMeeting = useCallback((id: string, consultationOverview: string) => {
        if (window.confirm(`「${consultationOverview}」の会議を削除しますか？`)) {
            deleteMeeting({ id });
            setMeetingList((prev) => prev.filter((meeting) => meeting.id !== id));
        }
    }, []);

    useEffect(() => {
        fetchMeetingList();
    }, [fetchMeetingList]);

    return {
        control,
        showMeetingList,
        handleDeleteMeeting,
    };
};