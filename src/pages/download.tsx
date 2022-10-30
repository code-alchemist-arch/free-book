import React, { useState } from 'react';

import { Button, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

import * as stylesDashboard from '../styles/dashboard.module.css';
import DownloadForm from '../components/downloadForm';
import GlobalTypography from '../components/common/GlobalTypography';

export default function Download() {
  const [isDownloadFormOpen, setIsDownloadFormOpen] = useState(false);

  const openDownloadForm = () => {
    setIsDownloadFormOpen(true);
  }

  return (
    <div className={stylesDashboard.root}>
      <div className={stylesDashboard.containerLogo}>
        <StaticImage
          className={stylesDashboard.logo}
          src="../images/ultrahandy-logo.svg"
          alt="UltraHandy Logo"
        />
        <div>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              fontSize: {
                xl: "50px",
                lg: "25px",
                md: "20px",
                sm: "15px",
                xs: "15px",
              },
              fontFamily: "Roboto",
              fontStretch: 97
            }}
          >
            {'UltraHandy'}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: {
                xl: "24px",
                lg: "12px",
                md: "9.6px",
                sm: "7.2px",
                xs: "7.2px",
              },
              fontFamily: "Crimson Pro"
            }}
          >
            {'Hand in Hand Partner for your Home Improvement'}
          </Typography>
        </div>
      </div>
      <div className={stylesDashboard.content}>
        <GlobalTypography
          text="Six Amazing ways to Improve your Household with this FREE E-Book. Keep place of the House organize without spending much."
          fontSizeMode="default"
        />
        <GlobalTypography
          text="You’ll discover how to “Do It Yourself” Improvement at home in many ways. What are you waiting for Grab this FREE E-Book offers now!"
          fontSizeMode="default"
        />
        <StaticImage
          className={stylesDashboard.bookList}
          src="../images/book-list.svg"
          alt="Book List"
        />
        <div className={stylesDashboard.btnContainer}>
          <StaticImage
            className={stylesDashboard.arrow}
            src="../images/arrow-right.svg"
            alt="Arrow Right"
          />
          <Button
            variant="text"
            sx={{
              boxShadow: "none",
              textTransform: "none",
              fontSize: {
                xl: "72px",
                lg: "54px",
                md: "43.2px",
                sm: "36px",
                xs: "21.6px",
              },
              fontWeight: 700,
              fontFamily: "Roboto",
              borderRadius: "10px",
              backgroundColor: "#4DC539",
              color: "#FFFFFF",
              width: {
                xl: "630px",
                lg: "472.5px",
                md: "378px",
                sm: "315px",
                xs: "189px",
              },
              padding: "6px 0",
              "&:hover": {
                backgroundColor: "#4DC539",
              }
            }}
            onClick={openDownloadForm}
          >
            {'Download'}
          </Button>
          <StaticImage
            className={stylesDashboard.arrow}
            src="../images/arrow-left.svg"
            alt="Arrow Left"
          />
        </div>
        <GlobalTypography
          text="Note: Due to Limited Time offer, we will only make it available for a short while. So “Download It Now!!!!"
          fontSizeMode="medium"
        />
        <GlobalTypography
          text="2022 All Rights Reserved."
          fontSizeMode="small"
        />
      </div>
      <DownloadForm
        isOpen={isDownloadFormOpen}
        setIsOpen={setIsDownloadFormOpen}
      />
    </div>
  )
}
