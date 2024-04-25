import { Theme } from '@mui/material/styles';

const Typography = (theme: Theme) => {

    return { 

        h1: {
            fontSize: '6rem',
            fontWeight: 600,
            color: theme.palette.text.primary,
        },
        h2: {
            fontSize: '3.75rem',
            fontWeight: 600,
            color: theme.palette.text.primary,
        },
        h3: {
            fontSize: '3rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h4: {
            fontSize: '2.125rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.palette.text.secondary,
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.palette.text.secondary,
        },

        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            color: theme.palette.text.primary,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: theme.palette.text.secondary,
        },
        button: {
            fontSize: '1rem',
            fontWeight: 500,
            color: theme.palette.text.primary,
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 500,
            color: theme.palette.text.secondary,
        },
    }
}

export default Typography;