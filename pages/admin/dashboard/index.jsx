import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import {
  adminGetAllProfessionals,
  adminProfessionalAdhaarVerification,
} from "../../../helpers";
import Tables from "../../../components/Table";
import HeaderAdmin from "../../../components/Header/HeaderAdmin";
import { isLoggedIn } from "../../../helpers/basic";

const AdminDashboard = () => {
  const [data, setData] = useState();
  const [adhaar, setAdhaar] = useState();
  const [open, setOpen] = useState(true);
  const [isLogged, setLoggedIn] = useState();
  const router = useRouter();

  const getAllProfessionals = async () => {
    const response = await adminGetAllProfessionals();
    if (response) {
      setData(response?.professionals);
    }
  };

  const handleVerification = async (item) => {
    const professionalId = item?._id;
    if (professionalId) {
      const data = {
        id: professionalId,
        isAdhaarVerified: true,
      };

      const response = await adminProfessionalAdhaarVerification(data);
      if (response) {
        setAdhaar(response);
        alert(`${item?.name} adhaar verified successfully`);
      }
    }
  };

  useEffect(() => {
    getAllProfessionals();
  }, [adhaar]);

  const getLoggedInUser = async () => {
    const isUserLoggedIn = await isLoggedIn();
    if (isUserLoggedIn) {
      setLoggedIn(true);
    }else{
      router.push("/admin")
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div>
      <HeaderAdmin />
      {isLogged ? (
      <><Collapse in={open} style={{ marginTop: "40px" }}>
          <Alert
            severity="info"
            action={<IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              } }
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>}
            sx={{ mb: 2 }}
          >
            Grab the adhaar number from here, and verify using UIDAI official
            website, hit not verified, if the phone number and adhaar number
            matches
          </Alert>
        </Collapse><div className="adminDashboardTableContainer">
            <div className="adminHeadersLinks">
              <h1 className="adminDashboard">Dashboard</h1>
              <p onClick={() => router.push("/admin/dashboard/bookings")}>bookings</p>
            </div>
            <Tables />
          </div></>
        ) : (
          <Loader />
        )}
    </div>
  );
};

export default AdminDashboard;
