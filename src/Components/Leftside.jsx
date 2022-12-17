import {
  Bookmark,
  Call,
  FollowTheSignsOutlined,
  Group,
  HelpOutline,
  KeyboardArrowDown,
  Person,
  PersonAddAlt1,
  Settings,
} from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import React from "react";

const Leftside = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "20px",
          backgroundColor: "#0088cc",
          color: "white",
          paddingLeft: "5px",
          width: "100%",
        }}
      >
        <Avatar sx={{}}>v</Avatar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Box sx={{}}>
            <Box>Vijay</Box>
            <Box sx={{ fontSize: "12px", opacity: "0.6" }}>+91 6382023017</Box>
          </Box>
          <Box>
            <KeyboardArrowDown></KeyboardArrowDown>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          paddingTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",
            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <Group sx={{ opacity: "0.6" }}></Group>
          <Box>
            <h5>New Group</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <Person sx={{ opacity: "0.6" }}></Person>
          <Box>
            <h5>Contacts</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <Call sx={{ opacity: "0.6" }}></Call>
          <Box>
            <h5>Calls</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <FollowTheSignsOutlined
            sx={{ opacity: "0.6" }}
          ></FollowTheSignsOutlined>
          <Box>
            <h5>People Nearby</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <Bookmark sx={{ opacity: "0.6" }}></Bookmark>
          <Box>
            <h5>Saved Message</h5>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
          }}
        >
          <Settings sx={{ opacity: "0.6" }}></Settings>
          <Box>
            <h5>Settings</h5>
          </Box>
        </Box>
        <hr></hr>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "5px",

            "&:hover": { backgroundColor: "#eaebe6" },
            marginBottom: "5px",
          }}
        >
          <PersonAddAlt1 sx={{ opacity: "0.6" }}></PersonAddAlt1>{" "}
          <Box>
            <h5>Invite Friends</h5>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "5px",

          "&:hover": { backgroundColor: "#eaebe6" },
        }}
      >
        <HelpOutline sx={{ opacity: "0.6" }}></HelpOutline>
        <Box>
          <h5>Telegram Features</h5>
        </Box>
      </Box>
    </Box>
  );
};

export default Leftside;
