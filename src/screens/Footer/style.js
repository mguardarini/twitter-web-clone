import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Footer:{
        position: 'fixed',
        left: 0,
        bottom: 15,
        width: '100%',
        textAlign: 'center'
    }
}));

export default useStyles;