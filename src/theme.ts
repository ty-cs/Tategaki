import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      lineHeight: 1.08349,
      fontWeight: 700,
      letterSpacing: '-.002em',
    },
    h2: {
      lineHeight: 1.08349,
      fontWeight: 700,
      letterSpacing: '-.002em',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.08349,
      letterSpacing: '-.002em',
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.7rem',
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.47059,
      // letterSpacing: '-.022em', // seems not need if use font in OS (apple.com uses font from cdn)
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.47059,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      // lineHeight: 1.47059,
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
