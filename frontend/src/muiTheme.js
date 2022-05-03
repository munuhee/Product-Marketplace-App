import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary:{
      light: '#000',
        main: '#000',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#fff',
    },
    secondary: {
      light: '#1bb6c1',
      main: '#1bb6c1',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
    success: {
      main: '#00dc5e',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});