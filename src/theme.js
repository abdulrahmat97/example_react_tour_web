const color = {
  primary: '#F6AD72',
  secondary: '#5A4F4D',
  textPrimary: '#F6AD72',
  textLight: '#EFEFEF',
  textNote: '#3E5867',
  white: '#FFF',
  green: '#00b7b2',
  red: '#EA4B35',
  redHover: '#FA5B45',
  grey: '#3E5867',
  darkGrey: '#324452',
  orange: '#fa341a',
  linkHover: '#10C7C2',
  border: '#6E8897',
  sideMenuBg: '#223442',
  shadow: 'rgba(50, 68, 82, 0.2)',
  inactive: 'rgba(110, 136, 151, 0.5)',
  pending: '#fa341a',
  completed: '#00b7b2',
  background: '#F3ECE6',
}

const breaks = {
  mobile: '477px',
  tablet: '767px',
  tabletLandscape: '991px',
}

const palette = {
  primary: {
    main: color.primary,
  },
  secondary: {
    main: color.secondary,
  },
  text: {
    primary: color.textPrimary,
  },
  background: {
    main: color.background
  }
}

const typography = {
  fontFamily: '"Montserrat", sans-serif',
  useNextVariants: true,
  htmlFontSize: 16,
  fontSize: 16,
  color: 'textPrimary',
}

const props = {
  // Name of the component ⚛️
  MuiButtonBase: {
    // The properties to apply
    disableRipple: false, // Set to true for no more ripple, on the whole application 💣!
  },
  MuiCircularProgress: {
    size: 28,
    thickness: 5,
  },
  MuiInput: {
    autoComplete: 'off',
  },
  MuiCheckbox: {
    color: 'primary',
  },
}

const overrides = {
  MuiInputBase: {
    root: {
      fontSize: '1rem',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
    inputMultiline: {
      lineHeight: '1.15rem',
      width: '100%',
      height: 'auto !important',
    },
    input: {
      '&:disabled': {
        color: color.darkGrey,
        opacity: '0.8',
        '&:hover': {
          cursor: 'not-allowed',
        },
      },
    },
  },
}

export default {
  color,
  breaks,
  palette,
  typography,
  props,
  overrides,
}
