import React, { useState, useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

import Header from "../../components/Header";
import Snackbars from "../../components/Snackbars";

import { updateProfessionalDetails, upload } from "../../helpers";

const UploadProfile = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState();
  const router = useRouter();
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const files = e.target.files[0];
    if (files instanceof Blob) {
      const uri = URL.createObjectURL(files);
      setFile(files);
      setFileUrl(uri);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    setLoading(true);
    if (!file) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Oops! You forgot to select a file");
      setSnack(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await upload(formData);
      if (res.fileUrl) {
        setImgUrl(res?.fileUrl);
        setLoading(false);
        setOpenSnackbar(true);
        setSnackbarMsg("Profile uploaded successfully!");
        setSnack(true);
      }
    } catch (error) {
      setLoading(false);
      setOpenSnackbar(true);
      setSnackbarMsg("Upload again!");
      setSnack(false);
    }
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  const updateProfession = async () => {
    const data = {
      photo: imgUrl,
    };
    if (imgUrl) {
      const response = await updateProfessionalDetails(data);
      if (response) {
        router.push("/professional/completedetails");
      }
    }
  };

  return (
    <div className="professionalLoginContainer">
      <Header isMobileHeader={isMobile} />
      <Snackbars open={openSnackbar} msg={snackbarMsg} snack={snack} />
      <div className="professionalLogin">
        <h1>One more step to go</h1>
        <p>you are one step closer</p>
        <div className="professionalLoginInput">
          <div className="professionalLoginInputSection">
            <h3>Upload your profile picture</h3>
            <div className="proProfileImgContainer">
              <div className="proProfileImg">
                <img
                  src={fileUrl || "/assets/frameadmin.png"}
                  alt="profileimg"
                />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              <button
                className="basicRoundedButton"
                onClick={() => handleButtonClick()}
                disabled={loading}
              >
                Upload
                {loading && (
                  <CircularProgress
                    style={{
                      height: "10px",
                      width: "10px",
                      color: "#fff",
                      marginLeft: "10px",
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;
