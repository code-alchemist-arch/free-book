import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ActiveCampaignForm from '../components/activeCampaignForm';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '1.2rem'
}));

export default function SignUp() {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Discover tips for your next home improvement project
        </Typography>
        <Typography component="h1" variant="h5">
        This info pack gives you tips from following topics
        </Typography>
        <Stack spacing={2}>
          <Item>Planning for a home remodeling? Here is tips for the Do-It-Yourselfers</Item>
          <Item>Tips and techniques for improving the looks of your bathroom</Item>
          <Item>Insider Tips on Keeping Your Kitchen Looking Flawless</Item>
          <Item>Home improvement by painting. When it comes to improving one’s home, perhaps one of the easiest, quickest and least expensive ways to create a stunning, significant impact to a home is to consider painting. Here we give tips what things you need to consider when planning improvements by painting.</Item>
          <Item>Everybody wants to stay healthy and live long, right? We give tips how to start improving your hearth health, help losing some pounds or just simply become more active</Item>
        </Stack>
        <ActiveCampaignForm thanksText="Thank you! Email with instructions to download should arrive your box soon."/>
      </Box>
    </Layout>
  );
}

export const Head = () => <Seo title="Join Club" />
/*

<link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Roboto&family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/intl-tel-input@17.0.18/build/css/intlTelInput.min.css"/>
    <form method="POST" action="https://forestjoker.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark" novalidate>
      <input type="hidden" name="u" value="1" />
      <input type="hidden" name="f" value="1" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="9953ac5d321c84ff2c5fa12d2528fca8" />
      <div class="_form-content">
        <div class="_form_element _x86065749 _full_width _clear" >
          <div class="_form-title">
            Subscribe for Email Updates
          </div>
        </div>
        <div class="_form_element _x54995616 _full_width _clear" >
          <div class="_html-code">
            <p>
              Add a descriptive message telling what your visitor is signing up for here.
            </p>
          </div>
        </div>
        <div class="_form_element _x81081400 _full_width " >
          <label for="firstname" class="_form-label">
            First Name
          </label>
          <div class="_field-wrapper">
            <input type="text" id="firstname" name="firstname" placeholder="Type your first name" />
          </div>
        </div>
        <div class="_form_element _x48560280 _full_width " >
          <label for="lastname" class="_form-label">
            Last Name
          </label>
          <div class="_field-wrapper">
            <input type="text" id="lastname" name="lastname" placeholder="Type your last name" />
          </div>
        </div>
        <div class="_form_element _x87492644 _full_width " >
          <label for="email" class="_form-label">
            Email*
          </label>
          <div class="_field-wrapper">
            <input type="text" id="email" name="email" placeholder="Type your email" required/>
          </div>
        </div>
        <div class="_form_element _x18874613 _full_width " >
          <label class="_form-label">
            Choose whether to subscribe or unsubscribe*
          </label>
          <div class="_row">
            <input type="radio" value="sub" name="act" checked />
            <span>
              Subscribe
            </span>
          </div>
          <div class="_row">
            <input type="radio" value="unsub" name="act" />
            <span>
              Unsubscribe
            </span>
          </div>
        </div>
        <div class="_button-wrapper _full_width">
          <button id="_form_1_submit" class="_submit" type="submit">
            Submit
          </button>
        </div>
        <div class="_clear-element">
        </div>
      </div>
      <div class="_form-thank-you" style="display:none;">
      </div>
      <div class="_form-branding">
        <div class="_marketing-by">
          Marketing by
        </div>
        <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" class="_logo">
          <span class="form-sr-only">
            ActiveCampaign
          </span>
        </a>
      </div>
    </form><script type="text/javascript">

*/