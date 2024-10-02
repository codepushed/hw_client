import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import JobCard from "../Card/JobCard";

import { staticJobCard } from "../../Static";

const ToggleWidget = () => {
  const [value, setValue] = React.useState("1");

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
          <h2>Shristi</h2>
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
          Item Two
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default ToggleWidget;
