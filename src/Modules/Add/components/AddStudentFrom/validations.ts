export const validateRequired = (value: string) => {
  if (!value) {
    return "This field is required";
  }
  return "";
};
