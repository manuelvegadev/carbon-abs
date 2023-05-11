/*
 * The Carbon components do not have typescript definitions yet.
 * You can see the progress of the migration here:
 * (https://github.com/carbon-design-system/carbon/issues/12513)
 * TODO: Delete this comment when types are available
 * */
import React, { useRef, useState } from "react";

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
} from "@carbon/react";
import { useModal } from "@/contexts";
import { SubmissionHandler } from "@/utils";
import clsx from "clsx";
import { IModalFormProps } from "./modal-form.types";

export const ModalForm = ({
  children,
  submitButtonText = "Enviar",
  onSubmit,
  deleteButtonAction,
  onSuccess,
  steps = [],
}: IModalFormProps) => {
  const { closeModal } = useModal();
  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = steps.length > 0 ? currentStep === steps.length - 1 : true;

  const formRef = useRef(null);

  return (
    <SubmissionHandler>
      {({ handleSubmit, isSubmitting, success, error, components, data }) => (
        <form
          ref={formRef}
          onSubmit={(formEvent) =>
            handleSubmit({ formEvent, onSubmit, onSuccess })
          }
          className={"cds--modal-container-body"}
        >
          <ModalBody
            hasForm
            className={clsx({
              "cds--modal-content__showing-notification": success || error,
              "cds--modal-content__with-steps": steps,
            })}
          >
            <Loading
              active={isSubmitting}
              withOverlay
              className={"form-loading"}
            />
            {steps?.length > 0 ? (
              <ProgressIndicator
                spaceEqually
                currentIndex={currentStep}
                // TODO: Remove hard types when types are available
                onChange={(step: number) => setCurrentStep(step)}
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "5",
                  backgroundColor: "var(--cds-layer)",
                  height: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                {steps.map(({ label, secondaryLabel, disabled }, stepIndex) => (
                  <ProgressStep
                    label={label}
                    secondaryLabel={secondaryLabel}
                    key={stepIndex}
                    disabled={disabled}
                  />
                ))}
              </ProgressIndicator>
            ) : null}
            {children({
              isSubmitting,
              success,
              error,
              components,
              currentStep,
            })}
          </ModalBody>
          {success || error ? (
            <ToastNotification
              title={success ? "Guardado con éxito!" : "Ha ocurrido un error"}
              subtitle={
                success
                  ? "Ya puedes cerrar este modal"
                  : "Por favor intente de nuevo. " +
                    "Si el problema persiste por favor contacto con soporte técnico"
              }
              kind={success ? "success" : "error"}
              className={"form-notification"}
              lowContrast
              hideCloseButton
            />
          ) : null}
          <ModalFooter>
            {steps.length > 0 ? (
              <>
                <Button
                  type={"button"}
                  kind={"ghost"}
                  onClick={closeModal}
                  style={{ flex: "0 1 50%" }}
                >
                  Cancelar
                </Button>
                <Button
                  kind={"secondary"}
                  style={{ flex: "0 1 25%" }}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  disabled={isSubmitting || isFirstStep}
                >
                  Atrás
                </Button>
                <Button
                  type={isLastStep ? "submit" : "button"}
                  style={{ flex: "0 1 25%" }}
                  disabled={
                    isSubmitting ||
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
                  {isLastStep ? submitButtonText : "Siguiente"}
                </Button>
              </>
            ) : (
              <>
                <Button
                  type={"button"}
                  kind={"secondary"}
                  onClick={closeModal}
                  style={deleteButtonAction ? { flex: "0 1 25%" } : {}}
                >
                  Cancelar
                </Button>
                {deleteButtonAction ? (
                  <Button
                    type={"button"}
                    kind={"secondary"}
                    onClick={() => deleteButtonAction(data)}
                    style={{ flex: "0 1 25%" }}
                    disabled={isSubmitting}
                  >
                    Eliminar
                  </Button>
                ) : null}
                <Button
                  type={"submit"}
                  style={deleteButtonAction ? { flex: "0 1 25%" } : {}}
                  disabled={isSubmitting}
                >
                  {submitButtonText}
                </Button>
              </>
            )}
          </ModalFooter>
        </form>
      )}
    </SubmissionHandler>
  );
};

export default ModalForm;
