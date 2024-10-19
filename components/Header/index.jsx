import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import Logo from "../Logo";

import { useRouter } from "next/router";
import { isLoggedIn } from "../../helpers/basic";

const Header = ({ isHidden }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState("S");
  const open = Boolean(anchorEl);
  const router = useRouter();

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      setLoggedIn(true);
    }
  };

  const getUsername = () => {
    const userData = Cookies.get("userData");
    if (userData) {
      const parseData = JSON.parse(userData);
      const FirstName = parseData.email;
      const firstLetter = FirstName.charAt(0);
      setUsername(firstLetter);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getLoggedInUser();
    // getUsername();
  }, []);

  const handleLogout = () => {
    Cookies.remove("userData");
    router.push("/login");
  };


  return (
    <div className="headerContainer">
      <Logo onClick={() => router.push("/")} />
      {!isHidden && (
        <>
          <ul className="headerlistContainer">
            {!router.asPath.includes("/coming-soon") ? (
              <li onClick={() => router.push("/blogs")}>Blogs</li>
            ) : (
              <button
                className="basicRoundedButton pingUsBtn"
                onClick={() => router.push("/contact")}
              >
                Ping us
              </button>
            )}
            <li>Services</li>
            <li>Pricing</li>
            <li>How it works</li>
          </ul>
          <div className="headerButtonContainer">
            {!loggedIn && (
              <button
                className="basicRoundedButton"
                onClick={() => router.push("/login")}
              >
                Sign In
              </button>
            )}

            {router.asPath.includes("/coming-soon") && (
              <button
                className="basicRoundedButton pingUsBtn"
                onClick={() => router.push("/contact")}
              >
                Ping us
              </button>
            )}
            <button className="basicRoundedButton-2">Book a service</button>
            {loggedIn && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 42, height: 42 }}>{username}</Avatar>
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem style={{ fontSize: "12px" }}>Profile</MenuItem>
                  <MenuItem
                    onClick={() => handleLogout()}
                    style={{ fontSize: "12px" }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
