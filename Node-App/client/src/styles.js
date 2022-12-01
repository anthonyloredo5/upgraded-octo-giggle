import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#5b2d89'
      },
      heading: {
        color: '#000000',
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse'
        }
      }
}));