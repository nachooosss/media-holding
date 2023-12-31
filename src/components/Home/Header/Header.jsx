import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import "./Header.css";
import { Grid } from "@mui/material";
const Header = () => {
  return (
    <div className="containerMy">
      <Grid container>
        <Grid item xs={12}>
          <Banner></Banner>
        </Grid>
        <Grid item xs={12}>
          <Nav></Nav>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
