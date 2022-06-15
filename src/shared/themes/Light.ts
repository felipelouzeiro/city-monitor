import { createTheme } from '@mui/material';
import { blueGrey, amber } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      dark: blueGrey[800],
      light: blueGrey[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: amber[500],
      dark: amber[400],
      light: amber[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f6f3',
    },
  },
});
