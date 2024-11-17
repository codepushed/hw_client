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

const HeaderAdmin = ({ isHidden, isMobileHeader }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
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
      const FirstName = parseData?.user?.name;
      setName(FirstName);
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
    getUsername();
  }, []);

  const handleLogout = () => {
    Cookies.remove("userData");
    router.push("/admin");
  };

  return (
    <div className="headerContainer">
      <Logo />
      {!isHidden && !isMobileHeader && (
        <>
          <div className="headerButtonContainer">
            {loggedIn && (
              <>
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
                        border: "1px solid #d1d1d1",
                        width: "140px",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 42,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem style={{ fontSize: "13px", fontWeight: 700 }}>
                      {name}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleLogout()}
                      style={{ fontSize: "13px", fontWeight: 700 }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderAdmin;
