import { createTheme } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: lightBlue[700],
      dark: lightBlue[800],
      light: lightBlue[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blue[500],
      dark: blue[400],
      light: blue[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f6f3',
    },
  },
});
