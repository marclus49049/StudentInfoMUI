/** <-- REGEX --> **/
export function isValidEmail(input: string) {
  return String(input)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function isValidMobileNumber(input: string) {
  return String(input)
    .toLowerCase()
    .match(/^(?:\+91|91)?[789]\d{9}$/);
}

/** <-- Validators --> **/

export const validateRequired = (value: string) => {
  return !value ? "This field is required" : "";
};

export const validateEmail = (email: string) => {
  return validateRequired(email)
    ? "Email is required"
    : !isValidEmail(email?.trim())
    ? "Please enter a valid email"
    : "";
};

export const validateMobile = (mobile: string) => {
  return validateRequired(mobile)
    ? "Mobile number is required"
    : !isValidMobileNumber(mobile?.trim())
    ? "Please enter a valid mobile number"
    : "";
};
