import { Grid, Typography } from "@mui/material";
import "./Banner.css";

const Banner = () => {
  return (
    <Grid container>
      <Grid className="cover" item xs={12}>
        <Typography className={" titleTxt"} variant="h4">
          ¡Tu marca puede ser algo inolvidable!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
