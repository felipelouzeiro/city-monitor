import { createTheme } from '@mui/material';
import { blueGrey, amber } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: amber[700],
      dark: amber[800],
      light: amber[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
  },
});
