import { Avatar as MuiAvatar, makeStyles } from "@mui/material";
import React from "react";

export interface AvatarProps {
  label: string;
  width?: string;
  height?: string;
}

const Avatar: React.FC<AvatarProps> = ({ label, width, height }) => {
  const customStyles = {
    width: width ?? "24px",
    height: height ?? "24px",
    bgcolor: "orange",
  };

  return <MuiAvatar sx={customStyles}>{label}</MuiAvatar>;
};

export default Avatar;
