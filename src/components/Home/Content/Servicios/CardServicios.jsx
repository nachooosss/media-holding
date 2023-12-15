"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { orange } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import "./CardServicios.css";
import { Bebas_Neue } from "next/font/google";

const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function CardServicios(props) {
  return (
    <Card className="cardServicios">
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SvgIcon
          component={props.name.icon}
          sx={{ fontSize: 100 }}
          inheritViewBox
        />

        <Typography
          className={inter.className}
          variant="subtitle1"
          color="white"
          align="left"
        >
          <Typography
            className={inter.className}
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "left",
              color: props.name.color,
            }}
          >
            {props.name.name}
          </Typography>
          {props.name.txt}
        </Typography>
      </CardContent>
      <Button
        className={inter.className}
        variant="outlined"
        sx={{
          float: "right",
          border: "1px solid orange",
          color: orange[700],
          fontSize: 20,
        }}
      >
        Ver más
      </Button>
    </Card>
  );
}
