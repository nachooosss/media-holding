"use client";
import { Grid, Typography } from "@mui/material";
import CardServicios from "./CardServicios";
import BTLIcon from "@/assets/IconsServicios/MH-08.svg";
import EventIcon from "@/assets/IconsServicios/MH-01.svg";
import PrinterIcon from "@/assets/IconsServicios/MH-03.svg";
import PromotionIcon from "@/assets/IconsServicios/MH-02.svg";
import DisplaysIcon from "@/assets/IconsServicios/MH-12.svg";
import SignsIcon from "@/assets/IconsServicios/MH-11.svg";
import BTLImg from "@/assets/cardServicios/btl.jpg";
import EventImg from "@/assets/cardServicios/event.jpg";
import SignsImg from "@/assets/cardServicios/signs.jpg";
import DisplaysImg from "@/assets/cardServicios/displays.jpg";
import PromotionImg from "@/assets/cardServicios/promotion.jpg";
import PrinterImg from "@/assets/cardServicios/printer.jpg";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const Servicios = () => {
  const servicios = [
    {
      name: "EVENTOS CORPORATIVOS",
      icon: EventIcon,
      txt: "Creamos experiencias inolvidables para tu cliente.",
      bgImg: EventImg,
    },
    {
      name: "ARTÍCULOS PROMOCIONALES",
      icon: PromotionIcon,
      txt: "Trabajamos con productos locales y extranjeros.",
      bgImg: PromotionImg,
    },
    {
      name: "IMPRESIÓN DIGITAL",
      icon: PrinterIcon,
      txt: "Todo tipo de impresiones desde stickers hasta rotulados.",
      bgImg: PrinterImg,
    },
    {
      name: "EXHIBIDORES",
      icon: DisplaysIcon,
      txt: "Diseñamos y confeccionamos variedad de exhibidores.",
      bgImg: DisplaysImg,
    },
    {
      name: "LETREROS",
      icon: SignsIcon,
      txt: "Nos adaptamos a los requerimientos y particularidades del evento.",
      bgImg: SignsImg,
    },
    {
      name: "BTL",
      icon: BTLIcon,
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
        <Typography
          // className={inter.className}
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
        </Typography>
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
