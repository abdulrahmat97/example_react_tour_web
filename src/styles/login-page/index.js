export default theme => ({
  appBarstyles: {
    background: 'transparent',
    boxShadow: 'none',
    padding: "0.925rem 3rem",
  },
  grow: {
    zIndex: 10,
    color: theme.color.primary,
    fontSize: '2.4rem',
    transition: 'color 1.2s ease-in-out',
  },
  logo: {
    cursor: 'pointer'
  },
  logoWhite: {
    color: '#fff',
    transition: 'all 1.2s ease-in-out',
    zIndex: '10',
  },
  container: {
    height: '100%',
    margin: '0 auto',
  },
  tittle: {
    fontSize: theme.typography.fontSize
  },
  formContainer: {
    position: 'absolute',
    top: '0',
    height: '100%',
    transition: 'all 0.5s ease-in-out',
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 7rem',
    }
  },
  textField: {
    margin: '0.5rem',
    width: '100%',
    borderRadius: '20px',
  },
  signInContainer: {
    left: '0',
    width: '50%',
    zIndex: '1',
    transition: 'all 0.5s ease-in-out',
  },
  signInContainerRightPanelActive: {
    left: '0',
    width: '50%',
    zIndex: '0',
    opacity: '0',
    transform: 'translateX(100%)',
  },
  signUpContainer: {
    width: '50%',
    // zIndex: '1',
    opacity: '0',
  },
  signUpContainerRightPanelActive: {
    width: '50%',
    transform: 'translateX(100%)',
    opacity: '1',
    // zIndex: '5',
  },
  overlayTitle: {
    color: theme.color.secondary,
    fontZise: '1rem',
  },
  overlayContainer: {
    position: 'absolute',
    top: '0',
    width: '50%',
    left: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.6s ease-in-out',
  },
  overlayContainerRightPanelActive: {
    position: 'absolute',
    top: '0',
    width: '50%',
    left: '50%',
    height: '100%',
    overflow: 'hidden',
    transition: 'transform 0.6s ease-in-out',
    transform: 'translateX(-100%)',
  },
  overlay: {
    background: theme.color.primary,
    position: 'relative',
    height: '100%',
    width: '200%',
    left: '-100%',
    zIndex: '610',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in',
  },
  overlayRightPanelActive: {
    background: theme.color.primary,
    position: 'relative',
    height: '100%',
    width: '200%',
    left: '-100%',
    zIndex: '610',
    transition: 'transform 0.6s ease-in',
    transform: 'translateX(50%)',
  },
  overlayPanel: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    height: '100%',
    width: '50%',
    textAlign: 'center',
    transform: 'translateX(0)',
    transition: 'transform 0.6s ease-in-out',
  },

  overlayRight:{
    right: '0',
    transform: 'translateX(0)',
  },
  overlayRightRightPanelActive:{
    right: '0',
    transform: 'translateX(20%)',
  },

  overlayLeft:{
    transform: 'translateX(-20%)',
  },

  overlayLeftRightPanelActive:{
    transform: 'translateX(0)',
  },

  button: {
    width: '100%',
    borderRadius: '10px',
    margin: '0.5rem',
  },
})