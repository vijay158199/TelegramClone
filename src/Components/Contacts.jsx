import { Avatar, Box } from "@mui/material";
import React from "react";
import Users from "../User.js";
import { setuser } from "../userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

export const Contacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      {Users.map((User, index) => (
        <Link
          to={`/${User.name}`}
          style={{ textDecoration: "inherit", color: "inherit" }}
          key={index}
        >
          <Box
            onClick={function () {
              dispatch(setuser(User));
            }}
            key={index}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              cursor: "pointer",
              padding: "5px",
              "&:hover": { backgroundColor: "#eaebe6" },
            }}
          >
            <Box>
              <Avatar
                src={User.avatar}
                sx={{ width: 50, height: 50, marginRight: "10px" }}
              >
                {User.avatar ? "" : User.name.charAt(0)}
              </Avatar>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                borderBottomStyle: "solid",
                borderColor: "lightgray",
                borderWidth: "1px",
              }}
            >
              <Box key={User.id}>
                {" "}
                <h4>{User.name}</h4>
              </Box>
              <Box>
                {" "}
                <p>{date}</p>{" "}
              </Box>
              <Box sx={{ flexBasis: "100%", height: "0" }}>
                <p>{User.message}</p>
              </Box>
            </Box>
          </Box>
        </Link>
      ))}
    </>
  );
};
