import { Theme } from '@mui/material/styles';

const Typography = (theme: Theme) => {

    return {
        fontFamily: 'Arial, sans-serif',

        h1: {
            fontWeight: 600,
            color: theme.palette.text.primary,
        },
        h2: {
            fontWeight: 600,
            color: theme.palette.text.primary,
        },
        h3: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h4: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h5: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h6: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        caption: {
            fontWeight: 400,
            color: theme.palette.text.secondary,
        },
        subtitle1: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        subtitle2: {
            fontWeight: 500,
            color: theme.palette.text.secondary,
        },

        body1: {
            fontWeight: 400,
            color: theme.palette.text.primary,
        },
        body2: {
            fontWeight: 400,
            color: theme.palette.text.secondary,
        },
        button: {
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        overline: {
            fontWeight: 500,
            color: theme.palette.text.secondary,
        },
    }
}

export default Typography;