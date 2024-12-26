import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./Logo.png"; // Assuming you have this image in the correct folder
import { Avatar } from "@mui/material";
import { useUser } from "./UserContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import logo2 from "./Images/logo.png"

export default function Navb() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  // Open and close the mobile menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUserData(parsedData); // Set the entire userData object
      console.log("Loaded user data:", parsedData);
    }
  }, []);

  // Update user data from the Registration component
  const updateUserData = (data) => {
    setUserData(data);
  };

  // Handle navigation to the dashboard
  function handleDash() {
    if (userData) {
      navigate('/dashboard', {
        state: {
          name: userData.name,
          email: userData.email,
          dob: userData.dob,
          degree: userData.degree,
          course: userData.course,
          year: userData.year,
          phone: userData.phone,
          gender: userData.gender,
          college: userData.college,
          id: userData.id,
          profilePicture: userData.profilePicture // Pass profile picture to dashboard
        },
      });
    } else {
      console.error("User data is not available");
    }
  }

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('userData'); // Clear user data from localStorage
    setUserData({}); // Reset userData state
    navigate('/login'); // Redirect to login page
    window.location.reload(true);
  };
  return (
    <AppBar id="navbar" position="fixed" sx={{ width: "100%" }}>
      <Toolbar>
        {/* Mobile menu button */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo or title */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Link to="/">
          <Box component="img" src={logo2} p={0} sx={{width:{lg:"120px", md:"110px", sm:"100px", xs:"90px"}}}></Box>
          </Link>
        </Box>

        {/* Mobile Menu */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Link to="/">
              <Typography color="black" textAlign="center">Home</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/events">
              <Typography color="black" textAlign="center">Events</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/concert">
              <Typography color="black" textAlign="center">Concert</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">
              <Typography color="black" textAlign="center">Contact Us</Typography>
            </Link>
          </MenuItem>
        </Menu>

        {/* Full-size menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1px" }} mr={1}>
          <Link to="/">
            <Button style={{ color: "white", fontSize:18 }} variant="text">
              Home
            </Button>
          </Link>
          <Link to="/events">
            <Button style={{ color: "white", fontSize:18 }} variant="text">
              Events
            </Button>
          </Link>
          <Link to="/concert">
            <Button style={{ color: "white", fontSize:18 }} variant="text">
              Concert
            </Button>
          </Link>
          <Link to="/contact">
            <Button style={{ color: "white", fontSize:18 }} variant="text">
              Contact Us
            </Button>
          </Link>
        </Box>

        {/* Right-side actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {userData && userData.profilePicture ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>


              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                  >
                    <Avatar src={userData.profilePicture} alt={userData.name} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu style={{ background: "white" }} aria-label="Static Actions">
                  <DropdownItem key="dashboard">
                    <Button onClick={handleDash} style={{ minWidth: "auto", fontWeight:500 }}>
                      Dashboard
                    </Button>
                  </DropdownItem>
                  <DropdownItem key="signout">
                    <Button onClick={handleSignOut} style={{ color: "red", fontWeight:500  }}>
                      Sign Out
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Box>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button
                className="btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "12px",
                  ":hover": { backgroundColor: "#333" },
                }}
              >
                Register
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
