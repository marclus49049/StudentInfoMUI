import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { SyntheticEvent, useMemo, useState } from "react";
import { AddFormData, Gender } from "./types";
import { states } from "./constant";
import { stat } from "fs";

function AddStudentFrom() {
  // States
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [guardianName, setGuardianName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<Gender>("female");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  // Memo
  const stateOptions = useMemo(() => {
    return Object.keys(states || {});
  }, []);

  // Handler functions
  const handleSubmit = (e: SyntheticEvent) => {
    e?.stopPropagation();
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setGuardianName("");
    setAge("");
    setGender("female");
    setMobileNumber("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setPincode("");
  };

  const handleFirstNameChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setFirstName(value);
  };
  const handleLastNameChange = (e: SyntheticEvent) => {
    e?.stopPropagation();
    let value = (e?.target as any)?.value;
    setLastName(value);
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
      />
      <TextField
        id="lastName"
        label="Last Name"
        value={lastName}
        type="text"
        onChange={handleLastNameChange}
      />
      <TextField
        id="guardianName"
        label="Guardian Name"
        value={guardianName}
        type="text"
      />
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={gender} name="gender">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      <TextField id="email" label="Email" value={email} type="email" />
      <TextField
        id="address"
        label="Address"
        value={address}
        type="text"
        multiline
        rows={2}
        maxRows={6}
      />
      <Select id="state" label="State" placeholder="Select Sate" value={state}>
        {stateOptions?.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>
      <TextField id="city" label="City" value={city} />
      <TextField id="pincode" label="Pincode" value={pincode} />

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
