"use client";
import * as React from "react";
import { Card, Typography, Button, CardMedia, Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import "./CardServicios.css";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function CardServicios(props) {
  console.log(props.name.bgImg);
  return (
    <Card className="cardServicios">
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={props.name.icon}
            sx={{ fontSize: 100 }}
            inheritViewBox
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={inter.className}
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "left",
              color: "white",
              marginBlock: "15px",
            }}
          >
            {props.name.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CardMedia
            sx={{
              height: 180,
              borderRadius: "10px",
              backgroundImage: `url(${props.name.bgImg.src});`,
            }}
          >
            <SvgIcon
              component={props.name.icon}
              sx={{
                fontSize: 200,
                float: "right",
                marginRight: "-80px",
                marginTop: "-10px",
              }}
              inheritViewBox
            />
          </CardMedia>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={inter.className}
            variant="subtitle1"
            color="white"
            align="justify"
            sx={{
              marginBlock: "15px",
            }}
          >
            {props.name.txt}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            height: "100%",
          }}
        >
          <Button
            className={inter.className}
            variant="outlined"
            sx={{
              border: "1px solid orange",
              color: orange[700],
              fontSize: 20,
            }}
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
