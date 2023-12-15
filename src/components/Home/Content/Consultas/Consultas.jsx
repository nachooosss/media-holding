import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  TextField,
} from "@mui/material";
import ExpandQuestions from "./ExpandQuestions";
import { orange } from "@mui/material/colors";

import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function Consultas() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        mt: 15,
      }}
    >
      <Grid item xs={4} sx={{ mx: 4 }}>
        <Card sx={{ mt: -5, boxShadow: 10 }}>
          <CardActionArea>
            <CardContent sx={{ backgroundColor: orange[400], color: "white" }}>
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
                Agenda una cita
              </Typography>
              <Typography
                className={inter.className}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
                variant="body2"
              >
                Lizards are a widespread group of squamate
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 8,
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  className={inter.className}
                  id="outlined-basic"
                  label="Introduce tu nombre"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Introduce tu correo electrónico"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Asunto"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Mensaje"
                  placeholder="Mensaje"
                  multiline
                  fullWidth
                  rows={6}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  className={inter.className}
                  variant="contained"
                  sx={{
                    backgroundColor: orange[400],
                    color: "white",
                    paddingInline: 5,
                  }}
                  size="medium"
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ mx: 4 }}>
        <Typography
          className={inter.className}
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Consultas
        </Typography>
        <Typography
          className={inter.className}
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Preguntas más frecuentes
        </Typography>
        <ExpandQuestions></ExpandQuestions>
      </Grid>
    </Grid>
  );
}
