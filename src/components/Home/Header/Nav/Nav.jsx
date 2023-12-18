"use client";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, AppBar, Typography, Button, Box, SvgIcon } from "@mui/material";
import "./Nav.css";
import { Bebas_Neue } from "next/font/google";
import MenuIcon from "@/assets/SVG/menuIcon.svg";

const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

function Nav() {
  const pages = [
    "Inicio",
    "Servicios",
    "Publicaciones",
    "Nosotros",
    "Contacto",
  ];
  const styles = (theme) => ({
    root: {
      backgroundColor: "blue",
      [theme.breakpoints.between("xs", "md")]: {
        backgroundColor: "red",
      },
    },
  });

  return (
    <AppBar className="navbar">
      <Grid container>
        <Grid className="grid-navbar" item lg={5} xs={4}>
          <AdbIcon className="logo" />
          <Typography className={inter.className + " txt-Logo"} variant="h3">
            Media Holding
          </Typography>
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
            <Button
              key={page}
              className={inter.className + " btnNav"}
              variant="text"
            >
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
