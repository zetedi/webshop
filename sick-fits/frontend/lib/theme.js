import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React from 'react';

// White label theme
const defaultTheme = createMuiTheme({
  /* By convention, MUI uses dark variant on hover */
  palette: {
    primary: {
      main: '#404955',
      contrastText: '#fff',
      hover: '#4E91E9',
      active: '#084FA6',
      focus: '#A875FE',
      border: '#EEEFF2',
      get dark() {
        return this.hover;
      },
    },
    secondary: {
      main: '#D9DDE3',
      contrastText: '#21252C',
      hover: '#EEEFF2',
      active: '#BFC6CF',
      get dark() {
        return this.hover;
      },
    },
    terciary: {
      main: '#404955',
      contrastText: '#fff',
      hover: '#677589',
      active: '#21252C',
      get dark() {
        return this.hover;
      },
    },
    inverted: {
      main: '#fff',
      contrastText: '#21252C',
      hover: '#F6F7F8',
      active: '#BFC6CF',
      get dark() {
        return this.hover;
      },
    },
    mainText: '#21252C',
    backgroundWave: '#dfe5e9',
    white: '#fff',
    success: green,
    silver: '#DFE5E9',
    highlightsAndDividers: '#DFE5E9',
    elementBackground: '#F6F7F8',
    border: '#D9DDE3',
    statusChip: {
      DRAFT: { main: '#F6C452', contrastText: '#21252C' },
      READY_TO_SIGN: { main: '#68C6DE', contrastText: '#21252C' },
      SENT_TO_SIGN: { main: '#4270B1', contrastText: 'white' },
      READY_TO_SEND: { main: '#BED05E', contrastText: '#21252C' },
      SENT_TO_FILING: { main: '#DFE5E9', contrastText: '#21252C' },
      SENT: { main: '#29623B', contrastText: 'white' },
      default: { main: '#DFE5E9', contrastText: '#21252C' },
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1600,
      xxl: 1920,
      xxxl: 2560,
    },
  },
});
const theme = createMuiTheme({
  ...defaultTheme,
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: '500',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: '450',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: '450',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: '450',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
    },
    button: {
      height: '2.75rem',
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiTable: {
      root: {
        // Workaround to show round real borders on tables
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: `1px solid ${defaultTheme.palette.border}`,
        borderRadius: '0.5rem',
      },
    },
    MuiTableCell: {
      root: {
        borderRight: '1px solid #DFE5E9',
        borderBottom: '1px solid #DFE5E9',
        '&:last-child': {
          borderRight: 'none',
        },
      },
      head: {
        backgroundColor: defaultTheme.palette.elementBackground,
        '&:first-child': {
          borderTopLeftRadius: '0.5rem',
        },
        '&:last-child': {
          borderTopRightRadius: '0.5rem',
        },
      },
      body: {
        backgroundColor: 'white',
      },
      footer: {
        backgroundColor: defaultTheme.palette.elementBackground,
        borderBottomLeftRadius: '.5rem',
        borderBottomRightRadius: '.5rem',
      },
      sizeSmall: {
        '&$head': {
          paddingTop: '10px',
          paddingBottom: '10px',
        },
        '&$body': {
          paddingTop: '2px',
          paddingBottom: '2px',
        },
      },
    },
    MuiToggleButton: {
      root: {
        backgroundColor: defaultTheme.palette.inverted.main,
        color: defaultTheme.palette.inverted.contrastText,
        '&:focus, &:active': {
          backgroundColor: defaultTheme.palette.inverted.active,
        },
        '&:hover': {
          backgroundColor: defaultTheme.palette.inverted.hover,
        },
        '&$selected': {
          backgroundColor: defaultTheme.palette.terciary.main,
          color: defaultTheme.palette.terciary.contrastText,
          '&:focus, &:active': {
            backgroundColor: defaultTheme.palette.terciary.active,
          },
          '&:hover': {
            backgroundColor: defaultTheme.palette.terciary.hover,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      root: {
        border: '1px solid #CBD0D6',
      },
    },
    MuiInputBase: {
      input: {
        background: defaultTheme.palette.white,
      },
    },
    MuiCssBaseline: {
      '@global': {
        '.MuiOutlinedInput-multiline': {
          background: defaultTheme.palette.white,
        },
        html: {
          scrollBehavior: 'smooth',
        },
        'a,button,p,h1,h2,h3,h4,h5,h6': {
          '&:focus': {
            outline: `2px solid ${defaultTheme.palette.primary.focus}`,
          },
        },
      },
    },
    MuiDropzonePreviewList: {
      position: 'relative',
      removeButton: {
        opacity: '1',
        top: '8px',
        right: '65px',
      },
    },
    MUIDataTable: {
      paper: {
        padding: '1.5rem',
      },
    },
    MUIAppBar: {
      backgroundColor: defaultTheme.palette.backgroundWave,
    },
    MuiCheckbox: {
      root: {
        '& > span > span': {
          width: '1.1rem',
          height: '1.1rem',
          backgroundColor: '#BFC6CF',
          borderRadius: '0.2rem',
        },
        '&$checked': {
          '& > span > span': {
            position: 'relative',
            width: '1.1rem',
            height: '1.1rem',
            backgroundColor: defaultTheme.palette.primary.main,
            borderRadius: '0.2rem',
            '&::after': {
              content: '""',
              top: '45%',
              left: '50%',
              width: '.75rem',
              height: '.35rem',
              position: 'absolute',
              transform: 'translate(-50%, -50%) rotate(-45deg)',
              borderLeft: '0.15rem solid white',
              borderBottom: '0.15rem solid white',
            },
          },
        },
      },
    },
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
      icon: <span />,
      checkedIcon: <span />,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
  customTheme: {
    root: {
      backgroundColor: defaultTheme.palette.backgroundWave,
      position: 'static',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    },
    responsive: {
      display: 'block',
      [defaultTheme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    visuallyHidden: {
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    },
    content: {
      paddingTop: '24px',
      paddingBottom: '16px',
    },
    hidden: {
      display: 'none',
    },
  },
});

export default theme;
