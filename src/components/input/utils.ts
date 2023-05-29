export const getErrorMessage = {
  required: () => 'Campo requerido',
  min: (value: number) => `El valor mínimo permitido es ${value}`,
  max: (value: number) => `El valor máximo permitido es ${value}`,
};
