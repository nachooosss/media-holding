"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Bebas_Neue } from "next/font/google";
const inter = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function ExpandQuestions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            className={inter.className}
            sx={{ width: "33%", flexShrink: 0 }}
          >
            1. Pregunta número 1
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={inter.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga
            voluptas distinctio est laborum rerum? Quod magnam similique vero
            laboriosam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            className={inter.className}
            sx={{ width: "33%", flexShrink: 0 }}
          >
            2. Pregunta número 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={inter.className}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            className={inter.className}
            sx={{ width: "33%", flexShrink: 0 }}
          >
            3. Pregunta número 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={inter.className}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            className={inter.className}
            sx={{ width: "33%", flexShrink: 0 }}
          >
            #. Pregunta número #
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={inter.className}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
