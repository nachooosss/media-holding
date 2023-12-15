import { Grid, Typography } from "@mui/material";
import "./Banner.css";
import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

const Banner = () => {
  return (
    <Grid container>
      <Grid className="cover" item xs={12}>
        <Typography className={inter.className + " titleTxt"} variant="h3">
          Media Holding
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
