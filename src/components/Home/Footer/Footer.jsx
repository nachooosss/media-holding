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
import ImgFooter from "@/assets/background/bgheader.jpg";
import { Bebas_Neue } from "next/font/google";
import Consultas from "../Content/Consultas/Consultas";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
export default function Footer() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "orange",
        color: "black",
      }}
    >
      <Toolbar>
        <Grid
          container
          sx={{
            padding: 5,
            cursor: "default",
            fontSize: 20,
          }}
        >
          <Grid item xs={7}>
            <Consultas></Consultas>
          </Grid>
          <Grid item xs={5}>
            <img
              src={ImgFooter.src}
              style={{
                marginLeft: "30px",
                borderRadius: "40px",
                backgroundSize: "100%, 100%",
                width: "580px",
                height: "300px",
              }}
            />
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "justify" }}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Media Holding
            </div>
            <br />
            Lorem ipsum dolor sit amet
            <br />
            consectetur adipisicing elit.
            <br />
            Impedit, ex? Impedit, ex?
          </Grid>
          <Grid item xs={3}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Servicios
            </div>
            <br /> Servicios Impresión Digital <br /> Servicios Eventos/Ferias
            <br />
            Exhibidores Personalizados <br /> Servicios de Letreros <br />
            Servicios Asesoría <br />
            Servicios BTL
          </Grid>
          <Grid item xs={3}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Contacto
            </div>
            <br /> Teléfono 390-2893 <br /> Correo contacto@mh.com.pa
            <div style={{ fontWeight: "bold", marginTop: "10px" }}>
              Dirección
            </div>{" "}
            Villa Las Acacias, Calle 139
            <br />
            Este, Lote 23 Panamá, Juan Diaz,
            <br />
            07101, PA.{" "}
          </Grid>
          <Grid item xs={3}>
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Horario
            </div>{" "}
            <br /> Lunes – Viernes Abierto <br /> Sábado – Domingo Cerrado
          </Grid>
        </Grid>
      </Toolbar>
      {/* <Divider sx={{ height: "1px", backgroundColor: "white" }} /> */}
      <Toolbar sx={{ backgroundColor: "black" }}>
        <Typography
          // className={inter.className}
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            cursor: "default",
            textAlign: "center",
            color: "white",
          }}
        >
          Copyright © 2000-20003 Media Holding
        </Typography>
        {/* <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, mx: 5, fontSize: "50" }}
        >
          <FacebookOutlined sx={{ fontSize: "30px", mx: 2 }}></FacebookOutlined>
          <Twitter sx={{ fontSize: "30px", mx: 2 }}></Twitter>
          <Instagram sx={{ fontSize: "30px", mx: 2 }}></Instagram>
          <LinkedIn sx={{ fontSize: "30px", mx: 2 }}></LinkedIn>
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
