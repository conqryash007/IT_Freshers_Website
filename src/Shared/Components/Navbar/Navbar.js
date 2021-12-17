import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import logo1 from "./../../../Assets/gifs/logo.gif";
import Drawer from "./Drawer";
import Links from "./Links";
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    backgroundColor: "black",
  },

  title: {
    color: "#ffffff",
  },
}));

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  const handler = () => {
    setOpen(!open);
  };
  const openHandler = (p) => {
    setOpen(p);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.appbar}>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Toolbar>
          {isMobile ? (
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handler}
            >
              <ListIcon />
            </IconButton>
          ) : null}
          <img src={logo1} alt="logo" width="80" />
          <Typography
            variant="h6"
            color="default"
            component="div"
            sx={{ flexGrow: 1 }}
            className={classes.title}
          >
            UNITY
          </Typography>
          {isMobile ? (
            <Drawer op={open} setOpenDrawer={openHandler} />
          ) : (
            <Links />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
