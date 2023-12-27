"use client";
import { Grid, AppBar, Button, Box, SvgIcon } from "@mui/material";
import "./Nav.css";
import MenuIcon from "@/assets/SVG/menuIcon.svg";
import LogoMH from "@/assets/Logo/MH-VERTICAL.png";

function Nav() {
  const pages = ["inicio", "nosotros", "servicios", "experiencias", "contacto"];
  return (
    <AppBar className="navbar">
      <Grid container>
        <Grid className="grid-navbar" item lg={5} xs={4}>
          <img className="logo" src={LogoMH.src} srcSet={LogoMH.src} />
        </Grid>
        <Box
          component={Grid}
          className="grid-btn"
          item
          lg={7}
          display={{
            xs: "none !important",
            lg: "flex !important",
          }}
        >
          {pages.map((page) => (
            <Button key={page} className={" btnNav"} variant="text">
              {page}
            </Button>
          ))}
        </Box>
        <Box
          component={Grid}
          className="grid-btn"
          item
          xs={8}
          display={{
            xs: "flex-end !important",
            lg: "none !important",
          }}
        >
          <SvgIcon
            component={MenuIcon}
            sx={{ fontSize: 35, marginInline: "40px", color: "white" }}
            inheritViewBox
          />
        </Box>
      </Grid>
    </AppBar>
  );
}
export default Nav;
