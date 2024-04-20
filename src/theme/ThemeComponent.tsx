"use client";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {deepmerge} from '@mui/utils';
import { CssBaseline, Theme, responsiveFontSizes } from '@mui/material'; 
import Breakpoints from './breackpoints';
import Palette from './palette';
import Typography from './typography';
interface Props {
    children: React.ReactNode;

}

const ThemeComponent= (props:Props) => {
    const { children } = props;
    let theme = createTheme({ 
        palette: Palette(),
        typography: {
            fontFamily: 'Arial, sans-serif',
        },
        shape: {
            borderRadius: 8,
        },
        breakpoints: Breakpoints,
        
    });

    const mergeTypography =(theme :Theme) => deepmerge(Typography(theme), theme.typography) ;


    theme = createTheme(theme, {
        typography: mergeTypography(theme),
    });
    theme= responsiveFontSizes(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default ThemeComponent;