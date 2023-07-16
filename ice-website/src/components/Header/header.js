import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import iconlogo from "./../../images/logomain.png";
import { COLORS } from "../../colors";
import { useNavigate } from "react-router";

const pages = ["services", "contact"];

function Header() {
  const navigate = useNavigate();

  const path = window.location.pathname;
  const pathname = path.normalize('NFD').replace(/[/]/g, "");;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pathname) => {
    setAnchorElNav(null);

    navigate(`/${pathname}`);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#e9e9e9", boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <div style={{paddingTop: "5px"}}>
          <a onClick={() => navigate('/')} style={{ cursor: "pointer"}}>
            <img src={iconlogo} alt="Logo" width="60px"/>
          </a>
          </div>
          {/* menu mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none"} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ justifyContent: "flex-end"}}
            >
              <MenuIcon style={{ color: "#c1272d" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* menu desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }}} style={{ alignSelf: "stretch", marginLeft: '40px', justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ color: "white", display: "block", borderRadius: 0, fontFamily: 'Bebas Neue', fontSize: '18px', minWidth: '80px', paddingBottom: "8px", paddingTop: "8px", marginRight: "5px"}}
                style={pathname === page ? { backgroundColor: COLORS.red, height: "100%"} : { color: COLORS.red, backgroundColor: "#f0f0f0"}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
