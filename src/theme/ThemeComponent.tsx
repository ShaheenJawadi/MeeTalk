import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
    children: React.ReactNode;

}

const ThemeComponent= (props:Props) => {
    const { children } = props;
    const theme = createTheme({ 
        palette: {
            primary: {
                main: '#000',
            },
            secondary: {
                main: '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeComponent;