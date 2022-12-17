import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
export const Sidebar = () => {
  const my = useSelector((state) => state.counter.value);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + "" + ampm;
    return strTime;
  }
  const myChat = my.map((msg, index) => (
    <Box key={index}>
      <Box
        sx={{
          display: "flex",
          justifyContent: msg.jc,
          marginBottom: "5px",
        }}
      >
        <Box style={msg.ustyle}>
          <Box>{msg.umessage}</Box>
          <Box
            sx={{
              fontSize: "10px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                paddingTop: "10px",

                opacity: "0.5",
              }}
            >
              {formatAMPM(new Date())}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ));
  return <div>{myChat}</div>;
};
