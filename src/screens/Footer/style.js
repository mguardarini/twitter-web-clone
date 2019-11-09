import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Footer:{
        position: 'fixed',
        left: 0,
        bottom: 15,
        width: '100%',
        textAlign: 'center'
    },
    Link:{
        fontSize: '12px',
        paddingLeft:'4px',
        paddingRight:'12px',
        marginTop:'5px',
        color:'#aab8c2',
        textAlign:'center',
        fontFamily:'Segoe UI'
    },
}));

export default useStyles;