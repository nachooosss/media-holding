"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  FacebookOutlined,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";

import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export default function Footer() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(255, 139, 37, 0.8)",
        color: "white",
      }}
    >
      <Toolbar>
        <Grid container sx={{ padding: 10, cursor: "default", fontSize: 20 }}>
          <Grid item xs={3}>
            Media Holding
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            ex?
          </Grid>
          <Grid item xs={3}>
            Servicios <br /> <br /> Servicios Impresión Digital <br /> Servicios
            Eventos/Ferias <br />
            Exhibidores Personalizados <br /> Servicios de Letreros <br />{" "}
            Servicios Asesoría <br />
            Servicios BTL
          </Grid>
          <Grid item xs={3}>
            Contacto <br /> <br /> Teléfono 390-2893 <br /> Correo
            contacto@mh.com.pa
          </Grid>
          <Grid item xs={3}>
            Dirección <br /> <br /> Villa Las Acacias, Calle 139 Este, Lote 23
            Panamá, Juan Diaz, 07101, PA. <br /> <br /> Lunes – Viernes Abierto{" "}
            <br /> Sábado – Domingo Cerrado
          </Grid>
        </Grid>
      </Toolbar>
      <Divider sx={{ height: "1px", backgroundColor: "white" }} />
      <Toolbar>
        <Typography
          className={inter.className}
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "default" }}
        >
          Copyright © 2024
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, mx: 5, fontSize: "50" }}
        >
          <FacebookOutlined sx={{ fontSize: "30px", mx: 2 }}></FacebookOutlined>
          <Twitter sx={{ fontSize: "30px", mx: 2 }}></Twitter>
          <Instagram sx={{ fontSize: "30px", mx: 2 }}></Instagram>
          <LinkedIn sx={{ fontSize: "30px", mx: 2 }}></LinkedIn>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
