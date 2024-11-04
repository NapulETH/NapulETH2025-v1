// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
  ne_purple: Palette['primary'];
  ne_rose: Palette['primary'];
  ne_lightblue: Palette['primary'];
  ne_gold: Palette['primary'];
  ne_green: Palette['primary'];
  ne_gray: Palette['primary'];
  ne_darkblue: Palette['primary'];
}

interface PaletteOptions {
  ne_purple: PaletteOptions['primary'];
  ne_rose: PaletteOptions['primary'];
  ne_lightblue: PaletteOptions['primary'];
  ne_gold: PaletteOptions['primary'];
  ne_green: PaletteOptions['primary'];
  ne_gray: PaletteOptions['primary'];
  ne_darkblue: PaletteOptions['primary'];
  }

}

export interface Theme {
    palette: {
  ne_purple: { primary: string };
  ne_rose: { primary: string };
  ne_lightblue: { primary: string };
  ne_gold: { primary: string };
  ne_green: { primary: string };
  ne_gray: { primary: string };
  ne_darkblue: { primary: string };
    }
}

const theme = createTheme({
  palette: {
    text: {
      primary: "#000005",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
    primary: {
      main: "#1976D2",
      dark: "#1565C0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      contrastText: "#FFFFFF",
      main: "#9C27B0",
    },
    error: {
      contrastText: "#FFFFFF",
      main: "#D32F2F",
    },
    warning: {
      contrastText: "#FFFFFF",
      main: "#EF6C00",
      dark: "#E65100",
    },
    info: {
      contrastText: "#FFFFFF",
      main: "#FFFFFF",
    },
    success: {
      contrastText: "#FFFFFF",
      main: "#2E7D32",
    },
    background: {
      default: "#FFFFFF",
    },
    ne_purple: {main: "#EDD4FE"},
    ne_rose: {main: "#FDC1FF"},
    ne_lightblue: {main: "#AEE8FE"},
    ne_gold: {main: "#F7E78E"},
    ne_green: {main: "#BCFBC2"},
    ne_gray: {main: "#EBEBC4"},
    ne_darkblue: {main: "#6FBDE2"},
    action: {
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {  
    MuiButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundImage: `linear-gradient(266.61deg, #6672B6 0%, #7783C8 50.4%, #8894D9 100%)`,
            fontWeight: 500,
            fontSize: "1.2rem",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 1px",
            textTransform: "none",
            outline: "none",
            border: "none",
            borderRadius: "0.8rem"
          }
        }
      ],
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(266.61deg, #6672B6 0%, #7783C8 50.4%, #8894D9 100%)`,
          color: "#000005",
          fontWeight: 500,
          fontSize: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 4px 1px",
          outline: "none",
          border: "none",
          borderRadius: "0.8rem",
          textTransform: "none",
        },


      }
    },
    MuiContainer: {
        styleOverrides:{
            root:{
                position: 'relative',
            }
        }
    },
    MuiCssBaseline: {
        styleOverrides: `
        *::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }
      `,
      },
      MuiChip: {
        styleOverrides: {
          root: {
            // Base style for the chip
            backgroundImage: `linear-gradient(64.63deg, #20544B 0%, #389685 100%)`,
            color: "#F2F2F2",
            fontWeight: 600,
          },
          label: {
            // Customize the label inside the chip
            fontSize: '0.875rem',
            fontWeight: 600
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
            root: {
                paddingLeft: '.75rem',
                paddingRight: '.75rem',
                paddingBottom: '.25rem',
                paddingTop: '.25rem',
                borderRadius: '2rem'
            },
        }
      }
  },
  
});

export default theme;
