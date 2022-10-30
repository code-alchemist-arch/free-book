import React from 'react';
import { Typography } from '@mui/material';

const fontSizeModes = {
  default: {
    xl: "40px",
    lg: "30px",
    md: "24px",
    sm: "20px",
    xs: "12px",
  },
  medium: {
    xl: "48px",
    lg: "36px",
    md: "28.8px",
    sm: "24px",
    xs: "14.4px",
  },
  small: {
    xl: "24px",
    lg: "18px",
    md: "14.4px",
    sm: "12px",
    xs: "7.2px",
  }
}

interface GeneralTypographyProps {
  text: string;
  fontSizeMode: string;
}

const GlobalTypography = ({ text, fontSizeMode = 'default' }: GeneralTypographyProps) => {
  return (
    <Typography
      variant="inherit"
      sx={{
        fontWeight: 400,
        fontSize: fontSizeModes[fontSizeMode],
        fontFamily: "Crimson Text",
        textAlign: "center",
        maxWidth: "100%"
      }}
    >
      {text}
    </Typography>
  );
}

export default GlobalTypography;