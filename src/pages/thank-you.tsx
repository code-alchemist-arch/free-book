import React, { useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh'
}));

function Thankyou() {
  if (typeof window === 'undefined')
    return null;

  const { thanksText } = window.history?.state;

  return (
    <Wrapper>
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Crimson Text",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textAlign: "center"
          }}
        >
          {'Thank you!'}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "Crimson Text",
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textAlign: "center"
          }}
        >
          { thanksText || '' }
        </Typography>
      </Container>
    </Wrapper>
  )
}

export default Thankyou;