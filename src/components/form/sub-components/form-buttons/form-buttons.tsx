/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import {
  // @ts-ignore
  Button,
  // @ts-ignore
  InlineLoading,
  // @ts-ignore
  InlineNotification,
  // @ts-ignore
  Stack,
} from '@carbon/react';
import { IFormButtonsProps } from './form-buttons.types';

export function FormButtons({
  isSubmitting,
  success,
  successMessage = 'Success!',
  submitButtonText = 'Submit',
  submitButtonDisabled = false,
  cancelButtonAction,
  cancelButtonText = 'Cancel',
  secondaryButtons,
  inlineNotification,
  onSuccess,
}: IFormButtonsProps) {
  return (
    <Stack gap={5} orientation={'vertical'}>
      {inlineNotification ? (
        <InlineNotification
          lowContrast
          kind={inlineNotification.kind}
          hideCloseButton={inlineNotification.hideCloseButton}
          title={inlineNotification.title}
          subtitle={inlineNotification.subtitle}
        />
      ) : null}
      <Stack gap={5} orientation={'horizontal'}>
        {isSubmitting || success ? (
          <InlineLoading
            style={{ marginLeft: '1rem', height: '3rem' }}
            description={isSubmitting ? 'Enviando...' : successMessage}
            status={success ? 'finished' : 'active'}
            onSuccess={() => {
              if (onSuccess) onSuccess();
            }}
          />
        ) : (
          <Button type="submit" disabled={submitButtonDisabled}>
            {submitButtonText}
          </Button>
        )}
        {secondaryButtons
          ? secondaryButtons.map(
              (
                { action, disabled = false, kind = 'secondary', text },
                index,
              ) => (
                <Button
                  kind={kind}
                  disabled={disabled}
                  onClick={action}
                  key={index}
                >
                  {text}
                </Button>
              ),
            )
          : null}
        {!(isSubmitting || success) &&
        cancelButtonAction &&
        !secondaryButtons ? (
          <Button
            kind="secondary"
            disabled={isSubmitting || success}
            onClick={cancelButtonAction}
          >
            {cancelButtonText}
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
}
