import React from "react";
import { Drawer, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@mui/material/Box";
import Links from "./Links";
import Divider from "@mui/material/Divider";
import logo from "./../../../Assets/gifs/logo.gif";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));
const sty = {
  height: "100%",
  backgroundColor: "#222",
  display: "flex",
  flexDirection: "column",
  padding: "30px",
};

function DrawerComponent(props) {
  const classes = useStyles();
  const { op, setOpenDrawer } = props;
  return (
    <>
      <Drawer
        className={classes.bar}
        open={op}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={sty}>
          <img
            src={logo}
            alt="logo"
            style={{
              maxHeight: "100px",
              maxWidth: "150px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          />
          <Divider />
          {<Links></Links>}
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!op)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
