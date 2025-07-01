import { MEETING_LIST } from "../../../constants/data";
import { InputFormSection, TextAreaSection } from "../../molecules";
import { BaseLayout } from "../../organisms";
import styles from "./style.module.css";
import { useMeetingDetailTemplate } from "./useMeetingDetailTemplate";

export const MeetingDetailTemplate = () => {
    const { meeting } = useMeetingDetailTemplate();

    return (
        <BaseLayout title={"Meeting Detail"}>
            {!!meeting && (
                <div className={styles.container}>
                    <div className={styles.area}>
                        <InputFormSection disabled label={`申込日`} value={meeting.applicationDate} placeholder={"申込日"} />
                    </div>
                    <div className={styles.area}>
                        <InputFormSection disabled label={`申込者`} value={MEETING_LIST.APPLICANT} placeholder={"申込者"} />
                    </div>
                    <div className={styles.area}>
                        <InputFormSection disabled label={`相談概要`} value={MEETING_LIST.CONSULTATIONOVERVIEW} placeholder={"相談概要"} />
                    </div>
                    <div className={styles.area}>
                        <TextAreaSection label={`相談内容`} value={MEETING_LIST.CONSULTATIONCONTENT} placeholder={"相談内容"} />
                    </div>
                </div>
            )}
        </BaseLayout>
    );
};