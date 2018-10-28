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
        background: {
            default: "linear-gradient(217deg, rgba(240,80,39,.8), rgba(240,80,39,0) 70.71%), linear-gradient(127deg, rgba(248,157,79,.8), rgba(248,157,79,0) 70.71%), linear-gradient(336deg, rgba(240,80,39,.8), rgba(248,157,79,0) 70.71%)",
        },
    },
});

export default theme;