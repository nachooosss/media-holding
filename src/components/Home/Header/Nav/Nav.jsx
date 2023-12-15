"use client";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, AppBar, Typography, Button } from "@mui/material";
import "./Nav.css";
import { Bebas_Neue } from "next/font/google";

const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

function Nav() {
  const pages = [
    "Inicio",
    "Servicios",
    "Publicaciones",
    "Nosotros",
    "Contacto",
  ];
  return (
    <AppBar className="navbar">
      <Grid container>
        <Grid className="grid-navbar" item xs={5}>
          <AdbIcon className="logo" />
          <Typography className={inter.className + " txt-Logo"} variant="h3">
            Media Holding
          </Typography>
        </Grid>

        <Grid className="grid-btn" item xs={7}>
          {pages.map((page) => (
            <Button
              key={page}
              className={inter.className + " btnNav"}
              variant="text"
            >
              {page}
            </Button>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Nav;
