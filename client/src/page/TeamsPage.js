import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamAction } from "../redux/action/team";
import { Link } from 'react-router-dom'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const TeamsPage = () => {
  const { data: allTeamList, TotalPages } = useSelector(
    (state) => state.teams.data
  );
  
  const dispatch = useDispatch();
  const [pages, setPages] = useState(1);

  useEffect(() => {
    dispatch(getTeamAction(pages));
  }, [dispatch, pages]);
  return (
    <>
      <div className="container">
        <div className="card-contant">
          {allTeamList?.map((data, index) => (
            <div className="card" key={index}>
              <div className="card-info">
                <h3>{data.teamname}</h3>
                <p>{data.Description}</p>
                <p>Total Members: {data.members.length}</p>
                <Link to={`/team/${data._id}`}>
                  <button
                      className="button-37"
                    >
                      View Team
                    </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <Stack spacing={2}>
            <Pagination
              count={TotalPages}
              onChange={(e, cPage) => {
                setPages(cPage);
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
