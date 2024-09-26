import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const Loader = (props) => {
  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
    <CircularProgress
      variant="indeterminate"
      disableShrink
      sx={(theme) => ({
        color: "#FF8C8C",
        animationDuration: "550ms",
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate('-50%', '-50%')",
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: "round",
        },
        ...theme.applyStyles("dark", {
          color: "#FF8C8C",
        }),
      })}
      size={30}
      thickness={4}
      {...props}
    />
    </Box>
  );
};

export default Loader;
