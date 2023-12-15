import React from "react";
import Testimonios from "./Testimonios/Testimonios";
import Consultas from "./Consultas/Consultas";

const Content = () => {
  return (
    <div>
      <div
        style={{
          borderTop: "2px solid orange",
          paddingTop: 15,
          position: "relative",
          width: "100dvw",
          height: "100dvh",
        }}
      >
        <Testimonios></Testimonios>
      </div>
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
