"use client";
import { Grid, Typography } from "@mui/material";
import CardServicios from "./CardServicios";
import RAP from "@/assets/IconsServicios/BTLB.svg";

import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });
const Servicios = () => {
  const servicios = [
    {
      name: "ARTÍCULOS PROMOCIONALES",
      icon: RAP,
      color: "orange",
      txt: "Contamos con la mayor variedad de artículos promocionales que se ajustan a presupuestos y a tiempos de ejecución. Trabajamos con productos locales y extranjeros.",
    },
    {
      name: "EXHIBIDORES",
      icon: RAP,
      color: "cyan",
      txt: "Diseñamos y confeccionamos variedad de exhibidores para puntos de ventas, para impulsar tus productos y cautivar a tus clientes.",
    },
    {
      name: "EVENTOS",
      icon: RAP,
      color: "grey",
      txt: "Ofrecemos una amplia gama de servicios, con el objetivo de crear experiencias inolvidables para tus clientes y colaboradores. Nos adaptamos a los requerimientos y particularidades del evento.",
    },
    {
      name: "IMPRESIÓN DIGITAL",
      icon: RAP,
      color: "white",
      txt: "Nos aseguramos de que no se pase por alto ningún detalle, realizamos todo tipo de impresiones desde stickers hasta rotulados para tu negocio.",
    },
    {
      name: "LETREROS",
      icon: RAP,
      color: "lightgreen",
      txt: "Fabricamos de tipo de letreros y señalizaciones para interior y exterior. En diferentes materiales, con tu imagen corporativa o mensajes publicitarios.",
    },
    {
      name: "BTL",
      icon: RAP,
      color: "yellow",
      txt: "Creamos experiencias de marca. Nos enfocamos en aumentar el conocimiento de la marca y promover historias que impacten.",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: 5,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
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
