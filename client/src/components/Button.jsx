import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

const CustomBox = styled(Box)(({ theme }) => ({
  padding: "1rem 1rem",
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    padding: "0.5rem 0rem",
    paddingBottom: "1rem",
  }));

const ButtonDrower = () => {
  const [state, setState] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  const list = () => (
    <CustomBox
      sx={{ width: "auto" }}
      role="presentation"
    >
      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </CustomFormControl>

      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </CustomFormControl>

      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </CustomFormControl>
    </CustomBox>
  );
  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>Filter</Button>
        <Drawer
          anchor={"top"}
          open={state}
          onClose={toggleDrawer(false)}
          className=""
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default ButtonDrower;
