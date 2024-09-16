import { createContext, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { AddFormData } from "../Modules/Add/components/AddStudentFrom/types";

export type AddFromLocalData = AddFormData & { _id: string };
export type StudentContextType = {
  studentData: Array<AddFromLocalData>;
  setStudentData: (
    value:
      | AddFromLocalData[]
      | ((_val: AddFromLocalData[]) => AddFromLocalData[])
  ) => void;
} | null;

export const StudentContext = createContext<StudentContextType>(null);

export const StudentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [studentData, setStudentData] = useLocalStorage<
    Array<AddFromLocalData>
  >("student-data", []);

  const value: StudentContextType = {
    studentData,
    setStudentData,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
