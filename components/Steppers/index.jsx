import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import { steps } from "../../Static";

const Steppers = () => {
  return (
    <Box sx={{marginTop: "30px" }} className="stepperContainer">
      <Stepper orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={index} expanded>
            <StepLabel className="stepperLabels">
              <Typography className="stepperLabels">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography className="stepperDescription">
                <p>{step.description}</p>
                <div className="stepperImgContainer">
                <img
                  src="/assets/a_worker_cleaning_chimney_in_k.jpeg"
                  alt="step"
                  className="stepperImg"
                />
                </div>
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Steppers;
