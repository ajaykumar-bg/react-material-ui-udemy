import { createMuiTheme } from '@material-ui/core/styles';

// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createMuiTheme({
	palette: {
		common: {
			blue: `${arcBlue}`,
			orange: `${arcOrange}`,
		},
		primary: {
			main: `${arcBlue}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: '700',
			fontSize: '1rem',
		},
		button: {
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white',
		},
	},
});
