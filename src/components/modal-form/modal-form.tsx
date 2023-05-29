/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React, { useState } from 'react';

import {
  // @ts-ignore
  Button,
  // @ts-ignore
  Loading,
  // @ts-ignore
  ModalBody,
  // @ts-ignore
  ModalFooter,
  // @ts-ignore
  ProgressIndicator,
  // @ts-ignore
  ProgressStep,
  // @ts-ignore
  ToastNotification,
} from '@carbon/react';
import clsx from 'clsx';
import { useModal } from '~/contexts';
import { SubmissionHandler } from '~/utils';
import { IModalFormProps } from '~/components';

export const ModalForm: React.FC<IModalFormProps> = ({
  children,
  submitButtonText = 'Enviar',
  onSubmit,
  deleteButtonAction,
  onSuccess,
  steps = [],
}) => {
  const { closeModal } = useModal();
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = steps.length > 0 ? currentStep === steps.length - 1 : true;

  return (
    <SubmissionHandler>
      {({ handleSubmit, components, formStates, data }) => {
        const { success, error, isSubmitting } = formStates;
        return (
          <form
            onSubmit={(formEvent) =>
              handleSubmit({ formEvent, onSubmit, onSuccess })
            }
            className={'cds--modal-container-body'}
          >
            <ModalBody
              hasForm
              className={clsx({
                'cds--modal-content__showing-notification':
                  success.value || error.value,
                'cds--modal-content__with-steps': steps,
              })}
            >
              <Loading
                active={isSubmitting.value}
                withOverlay
                className={'form-loading'}
              />
              {steps?.length > 0 ? (
                <ProgressIndicator
                  spaceEqually
                  currentIndex={currentStep}
                  // TODO: Remove hard types when types are available
                  onChange={(step: number) => setCurrentStep(step)}
                  style={{
                    position: 'sticky',
                    top: '0',
                    zIndex: '5',
                    backgroundColor: 'var(--cds-layer)',
                    height: '3.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  {steps.map(
                    ({ label, secondaryLabel, disabled }, stepIndex) => (
                      <ProgressStep
                        label={label}
                        secondaryLabel={secondaryLabel}
                        key={stepIndex}
                        disabled={disabled}
                      />
                    ),
                  )}
                </ProgressIndicator>
              ) : null}
              {children({
                isSubmitting: isSubmitting.value,
                success: success.value,
                error: error.value,
                components,
                currentStep,
              })}
            </ModalBody>
            {success.value || error.value ? (
              <ToastNotification
                title={
                  success.value ? 'Guardado con éxito!' : 'Ha ocurrido un error'
                }
                subtitle={
                  success.value
                    ? 'Ya puedes cerrar este modal'
                    : 'Por favor intente de nuevo. ' +
                      'Si el problema persiste contacte con soporte técnico'
                }
                kind={success.value ? 'success' : 'error'}
                className={'form-notification'}
                lowContrast
                hideCloseButton
              />
            ) : null}
            <ModalFooter>
              {steps.length > 0 ? (
                <>
                  {deleteButtonAction ? (
                    <Button
                      type={'button'}
                      kind={'danger--ghost'}
                      onClick={() => deleteButtonAction(data, formStates)}
                      style={{ flex: '0 1 50%' }}
                      disabled={isSubmitting.value}
                    >
                      Eliminar
                    </Button>
                  ) : null}
                  <Button
                    kind={'secondary'}
                    style={{ flex: '0 1 25%' }}
                    onClick={() => setCurrentStep(currentStep - 1)}
                    disabled={isSubmitting.value || isFirstStep}
                  >
                    Atrás
                  </Button>
                  <Button
                    type={isLastStep ? 'submit' : 'button'}
                    style={{ flex: '0 1 25%' }}
                    disabled={
                      isSubmitting.value ||
                      (isLastStep ? false : steps[currentStep + 1].disabled)
                    }
                    // TODO: Remove hard types when types are available
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      if (!isLastStep) {
                        e.nativeEvent.preventDefault();
                        setCurrentStep(currentStep + 1);
                      }
                    }}
                  >
                    {isLastStep ? submitButtonText : 'Siguiente'}
                  </Button>
                </>
              ) : (
                <>
                  {deleteButtonAction ? (
                    <Button
                      type={'button'}
                      kind={'danger--ghost'}
                      onClick={() => deleteButtonAction(data, formStates)}
                      style={{ flex: '0 1 50%' }}
                      disabled={isSubmitting.value}
                    >
                      Eliminar
                    </Button>
                  ) : null}
                  <Button
                    type={'button'}
                    kind={'secondary'}
                    onClick={closeModal}
                    style={deleteButtonAction ? { flex: '0 1 25%' } : {}}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type={'submit'}
                    style={deleteButtonAction ? { flex: '0 1 25%' } : {}}
                    disabled={isSubmitting.value}
                  >
                    {submitButtonText}
                  </Button>
                </>
              )}
            </ModalFooter>
          </form>
        );
      }}
    </SubmissionHandler>
  );
};

export default ModalForm;
