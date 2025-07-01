import globalAxios from "./globalAxios";
import type { IErrorResponse, ResponseType } from "../types/ApiResponse";
import type { CreateMeetingRequest, DeleteMeetingRequest, GetMeetingRequest, MeetingListType, MeetingType, UpdateMeetingRequest } from "../types/Meeting";
import { isAxiosError } from "axios";

export const getMeetings = async () => {
    try {
        const response = await globalAxios.get<MeetingListType>("/meetings");
        const res: ResponseType<MeetingListType> = {
            code: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        const res: ResponseType = {
            code: 500,
            message: error as string,
        };
        if (isAxiosError(error)) {
            const axiosError = error as IErrorResponse;
            res.code = axiosError.response.status;
            res.message = axiosError.response.data.message;
        }
        return res;
    }
};

export const getMeeting = async (request: GetMeetingRequest) => {
    try {
        const response = await globalAxios.get<MeetingType>(`/meetings/${request.id}`);
        const res: ResponseType<MeetingType> = {
            code: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        const res: ResponseType = {
            code: 500,
            message: error as string,
        };
        if (isAxiosError(error)) {
            const axiosError = error as IErrorResponse;
            res.code = axiosError.response.status;
            res.message = axiosError.response.data.message;
        }
        return res;
    }
};

export const createMeeting = async (request: CreateMeetingRequest) => {
    try {
        const response = await globalAxios.post<MeetingType>("/meetings", request);
        const res: ResponseType<MeetingType> = {
            code: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        const res: ResponseType = {
            code: 500,
            message: error as string,
        };
        if (isAxiosError(error)) {
            const axiosError = error as IErrorResponse;
            res.code = axiosError.response.status;
            res.message = axiosError.response.data.message;
        }
        return res;
    }
};

export const updateMeeting = async (request: UpdateMeetingRequest) => {
    try {
        const response = await globalAxios.put<MeetingType>(`/meetings/${request.id}`, {
            applicationDate: request.applicationDate,
            applicant: request.applicant,
            consultationOverview: request.consultationOverview,
            consultationContent: request.consultationContent,
        });
        const res: ResponseType<MeetingType> = {
            code: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        const res: ResponseType = {
            code: 500,
            message: error as string,
        };
        if (isAxiosError(error)) {
            const axiosError = error as IErrorResponse;
            res.code = axiosError.response.status;
            res.message = axiosError.response.data.message;
        }
        return res;
    }
};

export const deleteMeeting = async (request: DeleteMeetingRequest) => {
    try {
        await globalAxios.delete(`/meetings/${request.id}`);
    } catch (error) {
        const res: ResponseType = {
            code: 500,
            message: error as string,
        };
        if (isAxiosError(error)) {
            const axiosError = error as IErrorResponse;
            res.code = axiosError.response.status;
            res.message = axiosError.response.data.message;
        }
        return res;
    }
};