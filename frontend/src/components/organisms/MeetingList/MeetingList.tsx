import { useCallback, type FC } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faPenToSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import type { MeetingType } from "../../../types/Meeting";

type MeetingListProps = {
    meetingList: Array<MeetingType>;
    onDeleteMeeting: (id: string, consultationOverview: string) => void;
};

export const MeetingList: FC<MeetingListProps> = ({ meetingList, onDeleteMeeting }) => {
    const navigate = useNavigate();

    // 詳細ページに遷移する処理
    const handleMoveDetailPage = useCallback(
        (id: string) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
        [navigate]
    );

    //編集ページに遷移する処理
    const handleMoveEditPage = useCallback(
        (id: string) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
        [navigate]
    );

    return (
        <ul className={styles.list}>
            {meetingList.map((meeting) => (
                <li className={styles.meeting}>
                    <div className={styles.item}>
                        <span className={styles.cell}>{meeting.applicationDate}</span>
                        <span className={styles.cell}>{meeting.applicant}</span>
                        <span className={styles.cell}>{meeting.consultationOverview}</span>
                    </div>
                    <div className={styles.area}>
                        <div className={styles.far}>
                            <FontAwesomeIcon
                                icon={faFile}
                                size="lg"
                                onClick={() => handleMoveDetailPage(meeting.id)}
                            />
                        </div>
                        <div className={styles.far}>
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                size="lg"
                                onClick={() => handleMoveEditPage(meeting.id)}
                            />
                        </div>
                        <div className={styles.far}>
                            <FontAwesomeIcon
                                icon={faTrashAlt}
                                size="lg"
                                onClick={() => onDeleteMeeting(meeting.id, meeting.consultationOverview)}
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};