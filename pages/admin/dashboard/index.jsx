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

const AdminDashboard = () => {
  const [data, setData] = useState();
  const [adhaar, setAdhaar] = useState();
  const [open, setOpen] = useState(true);
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

  return (
    <div>
      <HeaderAdmin />

      {/* add loader  */}
      <Collapse in={open} style={{ marginTop: "40px" }}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Grab the adhaar number from here, and verify using UIDAI official
          website, hit not verified, if the phone number and adhaar number matches
        </Alert>
      </Collapse>

      <div className="adminDashboardTableContainer">
        <h1 className="adminDashboard">Dashboard</h1>
        <Tables />
        {/* <button>Adhaar verify</button>
        <button onClick={() => router.push("/admin/dashboard/bookings")}>
          Manual professional asigning
        </button> */}
      </div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginTop: "40px" }}>Professional's Adhaar verification</p>
        <button>Logout</button>
      </div> */}

      {/* <ul style={{ marginTop: "50px" }}>
        {data &&
          data?.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>{item?.name}</div>

              <div>{item?.phoneNumber}</div>
              <div>{item?.adhaarNumber}</div>

              <div>{item?.isAdhaarVerified}</div>
              <div>
                {!item?.isAdhaarVerified ? (
                  <button
                    onClick={() => handleVerification(item)}
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "5px 10px",
                      color: "#fff",
                      background: "red",
                      cursor: "pointer",
                    }}
                  >
                    not verified
                  </button>
                ) : (
                  <button
                    disabled
                    style={{
                      border: "none",
                      borderRadius: "18px",
                      padding: "5px 10px",
                      color: "#fff",
                      background: "green",
                      cursor: "pointer",
                    }}
                  >
                    verified
                  </button>
                )}
              </div>
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default AdminDashboard;
