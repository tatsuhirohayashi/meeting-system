import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MeetingType } from "../../../types/Meeting";
import { getMeeting } from "../../../apis/meeting";

export const useMeetingDetailTemplate = () => {
    const { id } = useParams();
    const [meeting, setMeeting] = useState<MeetingType | null>(null);

    const fetchMeeting = useCallback(async () => {
        if (!id) return;
        const response = await getMeeting({ id });
        if (!response.data) return;
        setMeeting(response.data);
    }, [id]);

    useEffect(() => {
        fetchMeeting();
    }, [fetchMeeting]);

    return { meeting };
};