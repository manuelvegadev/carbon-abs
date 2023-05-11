/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
// @ts-ignore
import { Stack } from "@carbon/react";
import { SubmissionHandler } from "@/utils";
import { FormButtons } from "./sub-components";
import { IFormProps } from "./form.types";

export function Form({
  children,
  onSubmit,
  onSuccess,
  successMessage,
  submitButtonText,
  submitButtonDisabled,
  cancelButtonText,
  cancelButtonAction,
  secondaryButtons,
  inlineNotification,
}: IFormProps) {
  return (
    <SubmissionHandler>
      {({ handleSubmit, isSubmitting, success, error }) => {
        return (
          <form onSubmit={(formEvent) => handleSubmit({ formEvent, onSubmit })}>
            <Stack gap={7}>
              {children({
                isSubmitting,
                success: success,
                error: error,
              })}
              <FormButtons
                isSubmitting={isSubmitting}
                success={success}
                successMessage={successMessage}
                onSuccess={onSuccess}
                submitButtonText={submitButtonText}
                submitButtonDisabled={submitButtonDisabled}
                cancelButtonText={cancelButtonText}
                cancelButtonAction={cancelButtonAction}
                secondaryButtons={secondaryButtons}
                inlineNotification={inlineNotification}
              />
            </Stack>
          </form>
        );
      }}
    </SubmissionHandler>
  );
}

export default Form;
