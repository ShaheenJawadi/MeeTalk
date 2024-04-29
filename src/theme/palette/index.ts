import { createTheme } from '@mui/material/styles';

const Palette = () => {

    return {
        primary: {
            light: '#7e57c2',
            main: '#4d2c91',
            dark: '#311b92',
        },
        secondary: {
            light: '#9c27b0',
            main: '#6a0080',
            dark: '#38006b',
        },
        error: {
            light: '#e57373',
            main: '#b61827',
            dark: '#870000',
        },
        warning: {
            light: '#ffb74d',
            main: '#ff8f00',
            dark: '#c25e00',
        },
        info: {
            light: '#5c6bc0',
            main: '#26418f',
            dark: '#001064',
        },
        success: {
            light: '#66bb6a',
            main: '#338a3e',
            dark: '#005005',
        },
        text: {
            primary: '#000',
            secondary: '#37486a',
            disabled: '#ccc',
            hint: '#ccc',
        },
        background: {
            default: '#fff',
            paper: '#f2f2f2',
            
        },
        divider: '#2f224b1a',
        action: {
            active: '#000',
            hover: '#ccc',
            selected: '#ccc',
            disabled: '#ccc',
            disabledBackground: '#ccc',
            focus: '#ccc',
            hoverOpacity: 0.08,
            selectedOpacity: 0.08,
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
    };

}
export default Palette;