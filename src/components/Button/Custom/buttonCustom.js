import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function CustomButton(){   
    return withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText('#1da1f2'),
      backgroundColor:'#1da1f2',
      '&:hover': {
        backgroundColor: '#1da1f2',
      },
    },
  }))(Button);
}