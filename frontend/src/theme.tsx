import { red, grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#f381a7',
        main: pink[300],
        dark: '#f57c00',
        contrastText: '#ffffff',
      },
    secondary: {
        light: '#bdbdbd',
        main: grey[500],
        dark: '#616161',
        contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#f381a7'
    }
  },
});

export default theme;
