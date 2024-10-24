import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Logo from "../Logo";

import { useRouter } from "next/router";
import { isLoggedIn } from "../../helpers/basic";
import { useSelector } from "react-redux";

const Header = ({ isHidden }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [username, setUsername] = useState("S");
  const [name, setName] = useState("");
  const open = Boolean(anchorEl);
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);

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
    router.push("/login");
  };

  return (
    <div className="headerContainer">
      <Logo onClick={() => router.push("/")} />
      {!isHidden && (
        <>
          {!loggedIn && (
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
          )}
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

            {!loggedIn && (
              <button className="basicRoundedButton-2">Book a service</button>
            )}
            {loggedIn && (
              <>
                <>
                  <IconButton aria-label="cart" onClick={() => router.push('/cart')}>
                    <Badge
                      badgeContent={cart && cart.length}
                      sx={{
                        "& .MuiBadge-badge": {
                          color: "#fff",
                          backgroundColor: "#FF8C8C",
                        },
                      }}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
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
                        width: "100px",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      style={{ fontSize: "13px", fontWeight: 700 }}
                      onClick={() => router.push(`/user/${name}`)}
                    >
                      Profile
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

export default Header;
