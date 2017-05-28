const styles = {
  loginComponent: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayLoading: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  card: {
    width: '300px',
    position: 'relative',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
  },
};

export default styles;
