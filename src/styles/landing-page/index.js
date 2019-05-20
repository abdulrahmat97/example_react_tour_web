export default theme => ({
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grow: {
    flexGrow: 1,
    color: theme.color.primary,
    fontSize: '2.4rem',
  },
  socialBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '3rem',
    height: '80%',
    transition: 'all 0.5s ease-in',
    background: theme.palette.text.secondary,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarstyles: {
    background: 'transparent',
    boxShadow: 'none',
    padding: "0.925rem 3rem",
  },
  container: {
    padding: "3rem 4rem",
    display: 'flex',
    overflow: 'hidden',
  },
  line: {
    border: 'none',
    height: 3,
    width: '70%',
    background: 'rgb(148, 138, 136)',
    margin: '2rem 0',
  },
  textStyles: {
    lineHeight: '1.5rem',
  },
  containerLandingText: {
    paddingLeft: '2rem',
  }
})
