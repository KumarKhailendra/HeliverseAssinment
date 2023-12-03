import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTeamMemberAction } from "../../redux/action/team";
import { Typography } from "@mui/material";

const Team = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data: cTeamDetails } = useSelector((state) => state.teams);


  useEffect(() => {
    dispatch(getTeamMemberAction(id));
  }, [dispatch, id]);

  return (
    <div className="container">
    <Typography variant="h3" component="h3">
      {cTeamDetails[0]?.teamname}
    </Typography>
    <Typography variant="h5" component="p">
      {cTeamDetails[0]?.Description}
    </Typography>
      <div className="card-contant">
        {cTeamDetails[0]?.membersData?.map((data, index) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
