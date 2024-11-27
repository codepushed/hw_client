import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import dynamic from "next/dynamic";

const GaugeChart = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

import JobCard from "../Card/JobCard";

import { staticJobCard } from "../../Static";

const ToggleWidget = ({ name }) => {
  const [value, setValue] = useState("1");
  const [options, setOptions] = useState({
    type: "radial-gauge",
    value: 80,
    scale: {
      min: 0,
      max: 100,
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        typography: "body1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="toggleWidgetTablist"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              minHeight: "40px",
              padding: "5px",
            }}
          >
            <Tab
              label="Active Jobs"
              value="1"
              className={
                value === "1" ? "toggleWidgetTabActive" : "toggleWidgetTab"
              }
              sx={{
                minHeight: "40px",
                textTransform: "capitalize",
              }}
              disableRipple
            />
            <Tab
              label="Statistics"
              value="2"
              className={
                value === "2" ? "toggleWidgetTabActive" : "toggleWidgetTab"
              }
              sx={{
                minHeight: "40px",
                textTransform: "capitalize",
              }}
              disableRipple
            />
          </TabList>
        </Box>
        <span className="toggleWidgetProDetails">
          <p>Hey</p>
          <h2>{name || "Professional"}</h2>
        </span>
        <TabPanel value="1" className="toggleWidgetTabPanel">
          <div className="toggleWidgetPanelOne">
            <div className="toggleWidgetMap">
              <img src="/assets/maps.png" alt="maps" />
            </div>
            <div className="toggleWidgetPanelJobs">
              <JobCard staticJobCard={staticJobCard} />
              <JobCard staticJobCard={staticJobCard} />
              <JobCard staticJobCard={staticJobCard} />
              <JobCard staticJobCard={staticJobCard} />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2" className="toggleWidgetTabPanel">
          <div className="JobsChartContainer">
        <GaugeChart style={{ width: "50%" }} />
        <h1>Overall Jobs done</h1>
        </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default ToggleWidget;
