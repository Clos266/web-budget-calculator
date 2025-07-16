export function findInputError(
  errors: any,
  inputId: string
): { error: any } | null {
  if (errors && errors[inputId]) {
    return { error: errors[inputId] };
  }
  return null;
}
export function isFormInvalid(inputError: { error: any } | null): boolean {
  return inputError !== null;
}
