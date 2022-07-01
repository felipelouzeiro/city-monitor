import { createTheme } from '@mui/material';
import { deepPurple, deepOrange } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[700],
      dark: deepPurple[800],
      light: deepPurple[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: deepOrange[500],
      dark: deepOrange[400],
      light: deepOrange[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});
