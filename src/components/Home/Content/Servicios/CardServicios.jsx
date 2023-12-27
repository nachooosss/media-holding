"use client";
import * as React from "react";
import { Card, Typography, Button, CardMedia, Grid } from "@mui/material";
import { orange } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import "./CardServicios.css";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function CardServicios(props) {
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
            sx={{ fontSize: 120 }}
            inheritViewBox
          />
        </Grid>

        <Grid item xs={12}>
          <CardMedia
            sx={{
              height: 220,
              borderRadius: "25px",
              backgroundImage: `url(${props.name.bgImg.src});`,
              overflow: "hidden",
            }}
          >
            <SvgIcon
              component={props.name.icon}
              sx={{
                fontSize: 260,
                float: "left",
                marginLeft: "-100px",
                marginTop: 8,
                opacity: "0.6",
                position: "relative",
              }}
              inheritViewBox
            />
          </CardMedia>
        </Grid>
        <Grid item xs={12}>
          <Typography
            // className={inter.className}
            gutterBottom
            variant="h6"
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
        <Grid item xs={8}>
          <Typography
            // className={inter.className}
            variant="subtitle1"
            color="white"
            align="left"
            sx={{
              marginBlock: "15px",
            }}
          >
            {props.name.txt}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button
            // className={inter.className}
            variant="outlined"
            sx={{
              borderRadius: 8,
              border: "1px solid orange",
              color: orange[700],
              textTransform: "none",
            }}
          >
            ver más
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
