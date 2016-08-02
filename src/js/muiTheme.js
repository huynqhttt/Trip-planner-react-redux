import {
  tealA400,
  cyan500, cyan700, cyan800,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors'
import Spacing from 'material-ui/styles/spacing'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { fade } from 'material-ui/utils/colorManipulator'

const muiTheme = getMuiTheme ({
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#48c3cb',
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  paper:{
    width: '100%'
  }
});

export default muiTheme
