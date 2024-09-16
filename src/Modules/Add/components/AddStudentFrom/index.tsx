import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { SyntheticEvent, useContext, useMemo, useState } from "react";
import { AddFormData, Gender } from "./types";
import { states } from "./constant";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DATE_FORMAT, DATE_FORMAT_DISPLAY } from "../../../../constants";
import {
  AddFromLocalData,
  StudentContext,
  StudentContextType,
} from "../../../../context/StudentContext";
import { generateId } from "../../../../utils/generateId";
import { validateEmail, validateMobile, validateRequired } from "./validations";

function AddStudentFrom() {
  // Context
  const { setStudentData } =
    useContext<StudentContextType>(StudentContext) || {};
  // States

  // Form States
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [guardianName, setGuardianName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
  const [gender, setGender] = useState<Gender>("female");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [cityInputValue, setCityInputValue] = useState<string>("");

  const [inputErrors, setInputErrors] = useState<
    Record<keyof AddFormData, string>
  >({
    firstName: "",
    lastName: "",
    guardianName: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  // Memo
  const stateOptions = useMemo(() => {
    return Object.keys(states || {});
  }, []);
  const cityOptions = useMemo(() => {
    return state ? states?.[state] : [];
  }, [state]);

  const formError = useMemo(() => {
    return Boolean(Object.values(inputErrors || {})?.some((error) => error));
  }, [inputErrors]);

  const clearData = () => {
    setFirstName("");
    setLastName("");
    setGuardianName("");
    setDateOfBirth(null);
    setGender("female");
    setMobileNumber("");
    setEmail("");
    setAddress("");
    setCity("");
    setCityInputValue("");
    setState("");

    setInputErrors({
      firstName: "",
      lastName: "",
      guardianName: "",
      dateOfBirth: "",
      gender: "",
      mobileNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
    });
  };
  // Handler functions
  const handleClear = () => {
    clearData();
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let data: AddFromLocalData = {
      _id: generateId(),
      firstName,
      lastName,
      guardianName,
      dateOfBirth: dateOfBirth?.format(DATE_FORMAT) || "",
      gender,
      mobileNumber,
      email,
      address,
      city,
      state,
    };

    // Validate if all fields are filled
    let hasError = false;
    Object.entries(data)?.forEach(([key, value]: [string, string]) => {
      if (key !== "_id") {
        let error = validateRequired(value);
        if (error) {
          hasError = true;
        }
        setInputErrors((prev: any) => {
          return { ...prev, [key]: error };
        });
      }
    });

    if (!hasError && setStudentData) {
      setStudentData((prev) => {
        return [...prev, data];
      });
      clearData();
    }
  };

  const handleFirstNameChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setFirstName(value);

    setInputErrors((prev) => ({ ...prev, firstName: validateRequired(value) }));
  };
  const handleLastNameChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setLastName(value);

    setInputErrors((prev) => ({ ...prev, lastName: validateRequired(value) }));
  };
  const handleGuardianNameChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setGuardianName(value);

    setInputErrors((prev) => ({
      ...prev,
      guardianName: validateRequired(value),
    }));
  };
  const handleDateOfBirthChange = (value: Dayjs | null) => {
    setDateOfBirth(value);
  };
  const handleMobileNumberChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setMobileNumber(value);

    setInputErrors((prev) => ({
      ...prev,
      mobileNumber: validateMobile(value),
    }));
  };
  const handleGenderChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setGender(value);
  };
  const handleStateChange = (e: SelectChangeEvent<string>) => {
    e?.stopPropagation();
    let value = e?.target?.value;
    setState(value);

    setInputErrors((prev) => ({
      ...prev,
      state: validateRequired(value),
      city: "",
    }));
  };
  const handleEmailChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setEmail(value);

    setInputErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };
  const handleAddressChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setAddress(value);

    setInputErrors((prev) => ({ ...prev, address: validateRequired(value) }));
  };
  const handleCityChange = (e: SyntheticEvent, newValue: string | null) => {
    e?.stopPropagation();
    setCity(newValue || "");

    setInputErrors((prev) => ({
      ...prev,
      city: validateRequired(newValue || ""),
    }));
  };
  const handleCityInputValueChange = (
    e: SyntheticEvent,
    newValue: string | null
  ) => {
    e?.stopPropagation();
    setCityInputValue(newValue || "");
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <TextField
        id="firstName"
        label="First Name"
        value={firstName}
        type="text"
        onChange={handleFirstNameChange}
        error={Boolean(inputErrors?.firstName)}
        helperText={inputErrors?.firstName}
        required
      />
      <TextField
        id="lastName"
        label="Last Name"
        value={lastName}
        type="text"
        onChange={handleLastNameChange}
        error={Boolean(inputErrors?.lastName)}
        helperText={inputErrors?.lastName}
        required
      />
      <TextField
        id="guardianName"
        label="Guardian Name"
        value={guardianName}
        type="text"
        onChange={handleGuardianNameChange}
        error={Boolean(inputErrors?.guardianName)}
        helperText={inputErrors?.guardianName}
        required
      />

      <DatePicker
        label="Date of birth *"
        value={dateOfBirth ? dayjs(dateOfBirth, DATE_FORMAT) : null}
        onChange={handleDateOfBirthChange}
        onError={(newError) =>
          setInputErrors((prev) => ({
            ...prev,
            dateOfBirth: newError?.toString() || "",
          }))
        }
        slotProps={{
          textField: {
            error: Boolean(inputErrors?.dateOfBirth),
            helperText: inputErrors?.dateOfBirth,
          },
        }}
        disableFuture
        format={DATE_FORMAT_DISPLAY}
      />

      <FormControl error={Boolean(inputErrors?.gender)} required>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={gender} name="gender" onChange={handleGenderChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        {Boolean(inputErrors?.gender) && (
          <FormHelperText>{inputErrors?.gender}</FormHelperText>
        )}
      </FormControl>

      <TextField
        id="mobileNumber"
        label="Mobile Number"
        value={mobileNumber}
        type="tel"
        onChange={handleMobileNumberChange}
        error={Boolean(inputErrors?.mobileNumber)}
        helperText={inputErrors?.mobileNumber}
        required
      />

      <TextField
        id="email"
        label="Email"
        value={email}
        type="email"
        onChange={handleEmailChange}
        error={Boolean(inputErrors?.email)}
        helperText={inputErrors?.email}
        required
      />

      <TextField
        id="address"
        label="Address"
        value={address}
        type="text"
        multiline
        rows={4}
        onChange={handleAddressChange}
        error={Boolean(inputErrors?.address)}
        helperText={inputErrors?.address}
        required
      />
      <FormControl error={Boolean(inputErrors?.state)} required>
        <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
        <Select
          id="state"
          label="State"
          placeholder="Select Sate"
          value={state}
          onChange={handleStateChange}
          MenuProps={{
            sx: {
              maxHeight: "500px",
            },
          }}
        >
          {stateOptions?.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        {Boolean(inputErrors?.state) && (
          <FormHelperText>{inputErrors?.state}</FormHelperText>
        )}
      </FormControl>

      <Autocomplete
        id="city"
        options={cityOptions}
        value={city}
        onChange={handleCityChange}
        inputValue={cityInputValue}
        onInputChange={handleCityInputValueChange}
        disabled={!state}
        renderInput={(params) => (
          <TextField
            {...params}
            error={Boolean(inputErrors?.city)}
            helperText={inputErrors?.city}
            label="City"
            required
          />
        )}
      />

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          padding: "0px 20px",
        }}
      >
        <Button
          type="button"
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          disabled={formError}
        >
          {" "}
          Submit{" "}
        </Button>
        <Button type="button" color="error" onClick={handleClear} fullWidth>
          {" "}
          Clear{" "}
        </Button>
      </Box>
    </Box>
  );
}

export default AddStudentFrom;
