export type Gender = "male" | "female";

export type AddFormData = {
  firstName: string;
  lastName: string;
  guardianName: string;
  age: number;
  gender: Gender;
  mobileNumber: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};
