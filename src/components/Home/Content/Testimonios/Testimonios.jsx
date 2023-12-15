"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import { Grid } from "@mui/material";

import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function Testimonios() {
  const clients = [
    { avatar: "AH", job: "Engineering Manager", name: "Alice Howard" },
    { avatar: "NM", job: "Interior Designer", name: "Nathan Marshall" },
    { avatar: "ER", job: "Architect", name: "Ema Romero" },
    { avatar: "AS", job: "Manager", name: "Ann Smith" },
  ];
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography
          className={inter.className}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
          gutterBottom
          variant="6"
          component="div"
        >
          Que opinan nuestros clientes
        </Typography>
        <Typography
          className={inter.className}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
          }}
          gutterBottom
          variant="h3"
          component="div"
        >
          Testimonios
        </Typography>
      </Grid>
      {clients.map((person, index) => (
        <Grid
          key={index}
          item
          xs={5}
          sx={{
            my: 2,
            mx: 2,
          }}
        >
          <Card sx={{ p: 5, borderBottom: "orange 10px solid" }}>
            <CardHeader
              avatar={
                <Avatar
                  className={inter.className}
                  sx={{ bgcolor: orange[500] }}
                  aria-label="recipe"
                >
                  {person.avatar}
                </Avatar>
              }
              title={person.name}
            />
            <CardContent>
              <Typography
                className={inter.className}
                variant="subtitle1"
                color="text.secondary"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
