import * as React from 'react';
import { navigate } from 'gatsby';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface ActiveCampaignFormProps {
  thanksText?: string;
}

export default function ActiveCampaignForm( props: ActiveCampaignFormProps = { thanksText: '' }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const { thanksText } = props;
  const onSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);

    fetch('https://forestjoker.activehosted.com/proc.php', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    })
    .then(() => {
      // tracking facebook pixel event
      if (window.fbq != null) {
        window.fbq('track', 'Subscribe', {currency: "USD", value: 0.00});
      }

      navigate('/thank-you', {
        state: {
          thanksText
        }
      });
    })
    .catch(err => {
      console.log('Request failed', err);
      //TODO: show error
    });
  }

  return (
    <div>
      <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
        <input type="hidden" name="u" value="1" />
        <input type="hidden" name="f" value="1" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input type="hidden" name="or" value="5c9b4611fad17e1999bf2c15340f0b47" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstname"
              required
              fullWidth
              id="firstname"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" id="opt-in"/>}
              label="I want to super cool offers and product updates via email."
            />
            <br/>
            No worries, we are not going to spam you with useless content.
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </div>
  )

}