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
      name: "EVENTOS",
      icon: Event,
      txt: "Ofrecemos una amplia gama de servicios, con el objetivo de crear experiencias inolvidables para tus clientes y colaboradores. Nos adaptamos a los requerimientos y particularidades del evento.",
      bgImg: BTLImg,
    },
    {
      name: "ARTÍCULOS PROMOCIONALES",
      icon: Promotion,
      txt: "Contamos con la mayor variedad de artículos promocionales que se ajustan a presupuestos y a tiempos de ejecución. Trabajamos con productos locales y extranjeros.",
      bgImg: BTLImg,
    },
    {
      name: "EXHIBIDORES",
      icon: Displays,
      txt: "Diseñamos y confeccionamos variedad de exhibidores para puntos de ventas, para impulsar tus productos y cautivar a tus clientes.",
      bgImg: BTLImg,
    },
    {
      name: "IMPRESIÓN DIGITAL",
      icon: Printer,
      txt: "Nos aseguramos de que no se pase por alto ningún detalle, realizamos todo tipo de impresiones desde stickers hasta rotulados para tu negocio.",
      bgImg: PrinterImg,
    },
    {
      name: "LETREROS",
      icon: Signs,
      txt: "Fabricamos de tipo de letreros y señalizaciones para interior y exterior. En diferentes materiales, con tu imagen corporativa o mensajes publicitarios.",
      bgImg: BTLImg,
    },
    {
      name: "BTL",
      icon: BTL,
      txt: "Creamos experiencias de marca. Nos enfocamos en aumentar el conocimiento de la marca y promover historias que impacten.",
      bgImg: BTLImg,
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
