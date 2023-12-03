import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
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

const FilterDrawer = ({ filter, setFilter, totalDomain }) => {
  const [state, setState] = React.useState(false);

  const [gender, setGender] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [available, setAvailable] = React.useState("");


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
        <InputLabel id="demo-simple-select-label-gender">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label-gender"
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
        <InputLabel id="demo-simple-select-label-domain">Domain</InputLabel>
        <Select
          labelId="demo-simple-select-label-domain"
          id="demo-simple-select-domain"
          value={domain}
          label="Domain"
          onChange={(e) => setDomain(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          {

            totalDomain?.map((data, index) => {
                return <MenuItem value={data} key={index}>{data}</MenuItem>
            })
          }
        </Select>
      </CustomFormControl>

      <CustomFormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Available</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={available}
          label="Available"
          onChange={(e) => setAvailable(e.target.value)}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={true}>Available</MenuItem>
          <MenuItem value={false}>Not available</MenuItem>
        </Select>
      </CustomFormControl>

      <Box>
      <Button
        onClick={() => {
          setFilter((prevState) => ({
            ...prevState,
            gender: '',
            domain: '',
            available: '',
          }));
          setGender("");
          setDomain("");
          setAvailable("");
        }}
      >
        Reset
      </Button>
      <Button
        onClick={() => {
          setFilter((prevState) => ({
            ...prevState,
            gender,
            domain,
            available,
          }));
        }}
      >
        Apply
      </Button>
      </Box>
    </CustomBox>
  );
  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>{gender || domain || available?<FilterAltOffIcon />: <FilterAltIcon />}Filter</Button>
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

export default FilterDrawer;
