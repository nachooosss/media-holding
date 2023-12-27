"use client";
import { Grid, Typography } from "@mui/material";
import CardServicios from "./CardServicios";
import BTL from "@/assets/IconsServicios/BTLB.svg";
import Event from "@/assets/IconsServicios/Evento2B.svg";
import Printer from "@/assets/IconsServicios/ImpresionB.svg";
import Promotion from "@/assets/IconsServicios/Promocionales2B.svg";
import Displays from "@/assets/IconsServicios/ExhibidoresB.svg";
import Signs from "@/assets/IconsServicios/LetrerosB.svg";
import BTLImg from "@/assets/cardServicios/btlImg.jpg";
import PrinterImg from "@/assets/cardServicios/impresionImg.jpg";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const Servicios = () => {
  const servicios = [
    {
      name: "EVENTOS CORPORATIVOS",
      icon: Event,
      txt: "Creamos experiencias inolvidables para tu cliente.",
      bgImg: BTLImg,
    },
    {
      name: "ARTÍCULOS PROMOCIONALES",
      icon: Promotion,
      txt: "Trabajamos con productos locales y extranjeros.",
      bgImg: BTLImg,
    },
    {
      name: "IMPRESIÓN DIGITAL",
      icon: Printer,
      txt: "Todo tipo de impresiones desde stickers hasta rotulados.",
      bgImg: PrinterImg,
    },
    {
      name: "EXHIBIDORES",
      icon: Displays,
      txt: "Diseñamos y confeccionamos variedad de exhibidores.",
      bgImg: BTLImg,
    },
    {
      name: "LETREROS",
      icon: Signs,
      txt: "Nos adaptamos a los requerimientos y particularidades del evento.",
      bgImg: BTLImg,
    },
    {
      name: "BTL",
      icon: BTL,
      txt: "Creamos experiencias de marca.",
      bgImg: BTLImg,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: 5,
        mt: 15,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Typography
          className={inter.className}
          variant="h3"
          sx={{
            my: 5,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            cursor: "default",
          }}
        >
          Nuestros Servicios
        </Typography> */}
      </Grid>
      {servicios.map((item, index) => {
        return (
          <Grid
            key={index}
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardServicios name={item}></CardServicios>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Servicios;
