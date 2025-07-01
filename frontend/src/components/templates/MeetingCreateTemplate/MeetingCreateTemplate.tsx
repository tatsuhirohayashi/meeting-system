import { BaseLayout } from "../../organisms";
import { useMeetingCreateTemplate } from "./useMeetingCreateTemplate";
import styles from "./style.module.css";
import { Controller } from "react-hook-form";
import { InputFormSection, TextAreaSection } from "../../molecules";
import { CommonButton } from "../../atoms";
// import { EmotionButton, StyledComponentsButton } from "../../atoms";
// import { MUIButton } from "../../atoms";

export const MeetingCreateTemplate = () => {
    const { control, errors, handleAddSubmit } = useMeetingCreateTemplate();

    return (
        <BaseLayout title={"Create Meeting"}>
            <form className={styles.container} onSubmit={handleAddSubmit}>
                <div className={styles.area}>
                    <Controller
                        name="applicationDate"
                        render={({ field }) => (
                            <InputFormSection
                                placeholder={"申込日"}
                                label="申込日"
                                errorMessage={errors.applicationDate?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="applicant"
                        render={({ field }) => (
                            <InputFormSection
                                placeholder={"申込者"}
                                label="申込者"
                                errorMessage={errors.applicant?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="consultationOverview"
                        render={({ field }) => (
                            <InputFormSection
                                placeholder={"相談概要"}
                                label="相談概要"
                                errorMessage={errors.consultationOverview?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <Controller
                        name="consultationContent"
                        render={({ field }) => (
                            <TextAreaSection
                                placeholder={"相談内容"}
                                label="相談内容"
                                errorMessage={errors.consultationContent?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <CommonButton type="submit">{"Create Meeting"}</CommonButton>
                    {/* <EmotionButton type="submit">{"Emotion Create Meeting"}</EmotionButton>
                    <StyledComponentsButton type="submit">{"Styled-components Create Meeting"}</StyledComponentsButton> */}
                    {/* <MUIButton>{"Mui Create Meeting"}</MUIButton> */}
                </div>
            </form>
        </BaseLayout>
    );
};