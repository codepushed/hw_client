import React, { useEffect, useState } from "react";
import {
  adminGetAllProfessionals,
  adminProfessionalAdhaarVerification,
} from "../../../helpers";

const AdminDashboard = () => {
  const [data, setData] = useState();

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
        alert(`${item?.name} adhaar verified successfully`);
      }
    }
  };

  useEffect(() => {
    getAllProfessionals();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <ul>
        {data &&
          data?.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <div>{item?.name}</div>

              <div>{item?.phoneNumber}</div>
              <div>{item?.adhaarNumber}</div>

              <div>{item?.isAdhaarVerified}</div>
              <div>
                {!item?.isAdhaarVerified && (
                  <button onClick={() => handleVerification(item)}>
                    Verified
                  </button>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
