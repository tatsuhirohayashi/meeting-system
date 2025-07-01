import { Controller } from "react-hook-form";
import { BaseLayout } from "../../organisms";
import styles from "./style.module.css";
import { InputFormSection, TextAreaSection } from "../../molecules";
import { CommonButton } from "../../atoms";
import { useMeetingEditTemplate } from "./useMeetingEditTemplate";

export const MeetingEditTemplate = () => {
    const { control, errors, handleEditSubmit } = useMeetingEditTemplate();

    return (
        <BaseLayout title={"Meeting Edit"}>
            <form className={styles.container} onSubmit={handleEditSubmit}>
                <div className={styles.area}>
                    <Controller
                        name="applicationDate"
                        render={({ field }) => (
                            <InputFormSection
                                label={`申込日`}
                                placeholder={"申込日"}
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
                                label={`申込者`}
                                placeholder={"申込者"}
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
                                label={`相談概要`}
                                placeholder={"相談概要"}
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
                                label={`相談内容`}
                                placeholder={"相談内容"}
                                errorMessage={errors.consultationContent?.message}
                                {...field}
                            />
                        )}
                        control={control}
                    />
                </div>
                <div className={styles.area}>
                    <CommonButton type="submit">{"Edit Meeting"}</CommonButton>
                </div>
            </form>
        </BaseLayout>
    );
};