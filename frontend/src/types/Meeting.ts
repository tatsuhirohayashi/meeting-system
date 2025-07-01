export type MeetingType = {
    id: string;
    applicationDate: string;
    applicant: string;
    consultationOverview: string;
    consultationContent: string;
    createdAt: string;
    updatedAt: string;
};

export type MeetingListType = {
    meetings: Array<MeetingType>;
    total: number;
};

export type GetMeetingRequest = {
    id: string;
};

export type CreateMeetingRequest = {
    applicationDate: string;
    applicant: string;
    consultationOverview: string;
    consultationContent: string;
};

export type UpdateMeetingRequest = {
    id: string;
    applicationDate: string;
    applicant: string;
    consultationOverview: string;
    consultationContent: string;
};

export type DeleteMeetingRequest = {
    id: string;
};