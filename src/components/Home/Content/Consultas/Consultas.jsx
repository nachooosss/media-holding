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
    <Card sx={{ mb: 5, boxShadow: 0, borderRadius: "40px" }}>
      <CardActions>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
          }}
        >
          <Grid item xs={4}>
            <Typography
              // className={inter.className}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                fontWeight: "bold",
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              AGENDA UNA CITA:
            </Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <TextField
              label="Introduce tu nombre"
              variant="outlined"
              sx={{
                width: "95%",
              }}
              InputProps={{
                style: {
                  borderRadius: "40px",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              my: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Introduce tu correo"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "40px",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              my: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Introduce un mensaje"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "40px",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              my: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 8,
                border: "1px solid orange",
                background: orange[700],
                color: "white",
                textTransform: "none",
                padding: 2,
                marginLeft: 2,
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
