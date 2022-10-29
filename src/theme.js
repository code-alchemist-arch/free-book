import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
    },
    background: {
      paper: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
});

export default theme;
