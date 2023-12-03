import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsersSaga } from "../redux/action/user";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import GroupsIcon from "@mui/icons-material/Groups";
import { useSnackbar } from 'notistack'

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Fab,
  InputBase,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import FilterDrawer from "../components/FilterDrawer";
import { CreateTeamAction } from "../redux/action/team";
import { CBadge } from "@coreui/react";

const Search = styled("div")(({ theme }) => ({
  float: "right",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "1px solid #f2f2f2",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const UserListPage = () => {
  const { users, TotalPages, totalDomain } = useSelector((state) => state.user);
  const [memberData, setMemberData] = useState([]);
  const [teamEnable, setTeamEnable] = useState(false);
  const [team, setTeam] = useState({
    teamname: "",
    Description: "",
    members: [],
  });
  const [filter, setFilter] = useState({
    page: 1,
    limit: 20,
    name: "",
    gender: "",
    domain: "",
    available: "",
  });

  let dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    dispatch(getUsersSaga(filter));
  }, [dispatch, filter]);

  const handleAddTeam = (e, data) => {
    e.preventDefault();
    let memberFilter = memberData.filter((d) => d.domain === data.domain);
    if(memberFilter.length){enqueueSnackbar("User Already present with similar domain")}
    let memberArr = [];
    if (memberData.length === 0 || memberFilter.length === 0) {
      if(data.available){
        setMemberData([...memberData, data]);
        memberData?.map((d) => memberArr.push(d?._id));
        setTeam({ ...team, members: [...memberArr, data?._id] });
        enqueueSnackbar("User add in team list successfully");
      }else{
        enqueueSnackbar("Not available user are not allowed")
      }
    }
  };
  const handleRemoveTeam = (e, data) => {
    e.preventDefault();
    setMemberData(memberData.filter((d) => d._id !== data._id));
    enqueueSnackbar("User remove from team list successfully");
  };
  const heandleTeamModel = () => {
    setTeamEnable(!teamEnable);
  };

  const heandleCreatTeamModel = () => {
    if (
      team.Description !== "" &&
      team.members.length !== 0 &&
      team.teamname !== ""
    ) {
      dispatch(CreateTeamAction(team));
      enqueueSnackbar("Successfully Create team");
      setTeam({
        teamname: "",
        Description: "",
        members: [],
      });
      setTeamEnable(!teamEnable);
    }
  };

  return (
    <>
      <div className="container">
        <div className="search-bar">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search By first name or last name"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setFilter({ ...filter, page: 1, name: e.target.value });
              }}
            />
          </Search>
          <FilterDrawer
            filter={filter}
            setFilter={setFilter}
            totalDomain={totalDomain}
          />
        {teamEnable ? (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-basic"
              value={team.teamname}
              onChange={(e) => setTeam({ ...team, teamname: e.target.value })}
              label="Team Name"
              variant="filled"
              required
            />
            <TextField
              id="filled-basic"
              value={team.Description}
              onChange={(e) =>
                setTeam({ ...team, Description: e.target.value })
              }
              label="Team Description"
              variant="filled"
              required
            />
            <Fab variant="extended">
              <GroupsIcon sx={{ mr: 1 }} />
              {memberData.length}
            </Fab>
            <Button
              variant="contained"
              color="success"
              onClick={heandleCreatTeamModel}
            >
              Create
            </Button>
            <Button variant="outlined" onClick={heandleTeamModel}>
              Close
            </Button>
          </Box>
        ) : (
          <Box>
            <Button variant="outlined" onClick={heandleTeamModel}>
              Create New Team
            </Button>
          </Box>
        )}
        </div>

        <div className="card-contant">
          {users?.map((data, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={data.avatar} alt="avatar" />
              </div>
              <div className="card-info">
                <h3>
                  {data.first_name} {data.last_name}
                </h3>
                <p>{data.email}</p>
                <p>{data.domain}</p>
                <p>{data.gender}</p>
                <p>{data.available? <CBadge color="success" style={{color: 'green'}}>Available</CBadge> : <CBadge color="danger" style={{color: 'red'}}>Not available</CBadge>}</p>

                {!teamEnable ? (
                  ""
                ) : memberData.some((d) => d._id === data._id) ? (
                  <button
                    className="button-24"
                    onClick={(e) => handleRemoveTeam(e, data)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="button-37"
                    onClick={(e) => handleAddTeam(e, data)}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              count={TotalPages}
              onChange={(e, cPage) => {
                setFilter({ ...filter, page: cPage });
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
