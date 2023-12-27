import React from "react";
import Testimonios from "./Testimonios/Testimonios";
import Consultas from "./Consultas/Consultas";
import bgimg from "@/assets/background/bgtestimonios.jpg";

const Content = () => {
  return (
    <div>
      {/* <div
        style={{
          paddingTop: 15,
          position: "relative",
          width: "100dvw",
          height: "100dvh",
          background: "linear-gradient(to right, #ff741e,  #fcff55 100%)",
        }}
      >
        <Testimonios></Testimonios>
      </div> */}
      <div
        style={{
          position: "relative",
          width: "100dvw",
          height: "100dvh",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 139, 37, 0.8))",
        }}
      >
        <Consultas></Consultas>
      </div>
    </div>
  );
};

export default Content;
