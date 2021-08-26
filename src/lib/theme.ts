import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f9b934' },
    text: {
      primary: '#121037',
      secondary: '#546e7a',
    },
  },
  typography: {
    body1: {
      fontSize: '1.1rem',
    },
  },
});
