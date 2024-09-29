import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: '"Roboto", sans-serif',
        fontSize: 14
    },
    palette: {
        primary: {
            main: '#23B27C',
            contrastText: '#FEFEFE',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#93867F',
            contrastText: '#303633',
        },
        white: {
            main: '#FEFEFE',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "lighter",
                    fontSize: '1.4rem',
                    textTransform: 'none',
                    textDecoration: 'none',
                    variants: [
                        {
                            props: {variant: "outlined", size: "extraLarge"},
                            style: {
                                padding: '2.2rem 4.6rem',
                            }
                        },

                    ]
                }
            }
        }
    }
});

export {theme};