import { Menu, Search } from "@mui/icons-material";
import { Toolbar, Box, Drawer } from "@mui/material";
import React from "react";
import { Contacts } from "./Contacts";
import { useState } from "react";
import Leftside from "./Leftside";
import { Mode } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import Users from "../User.js";
function Header() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function add() {
    if (id !== 0 && name !== "" && message !== "") {
      Users.push({
        id: id,
        name: name,
        message: message,
        avatar: avatar,
      });
    } else {
      alert("Enter all values");
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
      }}
    >
      <Toolbar
        sx={{
          backgroundColor: "#0088cc",
          position: "sticky",
          top: "0",
          height: "60px",
          zIndex: "1",
          color: "white",

          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <Menu
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          ></Menu>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box width="250px" role="presentation">
              <Leftside></Leftside>
            </Box>
          </Drawer>
          <Box sx={{ paddingLeft: "20px" }}>
            <h4>Telegram</h4>
          </Box>
        </Box>
        <Box>
          <Search></Search>
        </Box>
      </Toolbar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Contacts></Contacts>
      </Box>
      <Box
        sx={{
          position: { xs: "fixed", sm: "absolute", lg: "absolute" },
          bottom: "100px",
          right: { xs: "30px", sm: "40px", lg: "60px" },
          backgroundColor: "#0088cc",
          borderRadius: "50px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Mode
          sx={{ color: "white", fontSize: "40px", padding: "3px" }}
          onClick={() => setOpen(true)}
        ></Mode>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-describedby="dialog-title"
        >
          <DialogTitle id="dialog-title" sx={{}}>
            <h3>Add New One</h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Hello My Name Is Vijay
            </DialogContentText>
            <Box>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  type="text"
                  placeholder="id"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="name"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                {" "}
                <input
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  placeholder="message"
                ></input>
              </Box>

              <br></br>
              <Box sx={{ marginBottom: "2px" }}>
                <input
                  onChange={(e) => {
                    setAvatar(e.target.value);
                  }}
                  type="text"
                  placeholder="avatarlink"
                ></input>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              autoFocus
              onClick={() => {
                add();
                setOpen(false);
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Header;
