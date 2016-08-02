import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../muiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap for material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = ({children}) => (
	<div>
		<MuiThemeProvider muiTheme={muiTheme}>
			{children}
		</MuiThemeProvider>
	</div>
);

export default App;