import { useMeetingListTemplate } from "./useMeetingListTemplate";
import styles from "./style.module.css";
import { BaseLayout, MeetingList } from "../../organisms";
import { Controller } from "react-hook-form";
import { HeaderRowSection, InputFormSection } from "../../molecules";

export const MeetingListTemplate = () => {
    const { control, showMeetingList, handleDeleteMeeting } = useMeetingListTemplate();

    return (
        <BaseLayout title={"Meeting List"}>
            <div className={styles.container}>
                {/* Meeting検索フォーム */}
                <div className={styles.area}>
                    <Controller
                        name="keyword"
                        render={({ field }) => (
                            <InputFormSection placeholder={"Search Keyword"} {...field} />
                        )}
                        control={control}
                    />
                </div>
                {/* Meeting表題部分 */}
                <div className={styles.area}>
                    <HeaderRowSection />
                </div>
                {/* Meetingリスト一覧表示 */}
                <div className={styles.area}>
                    {showMeetingList.length > 0 && (
                        <MeetingList meetingList={showMeetingList} onDeleteMeeting={handleDeleteMeeting} />
                    )}
                </div>
            </div>
        </BaseLayout>
    );
};