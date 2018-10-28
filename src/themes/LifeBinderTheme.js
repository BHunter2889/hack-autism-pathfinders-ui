import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#F89D4F',
            main: '#F05027',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#FFFFFF'
        },
        secondary: {
            // light: '#FF00ff', will be calculated (supposedly)
            main: '#BD485C',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
    },
});

export default theme;