
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  RootGrid: {
    flexGrow: 1,
    color: '#ffffff',
  },
  SecondaryFormPageSignup: {
    alignContent: 'center',
    marginLeft:'29%',
    marginTop:'7%',
    marginRight:'24%',
    align: 'center',
    width:'60%'
  },
  FormGrid: {
    marginLeft:'15%',
    marginTop:'3%',
  },
  SignupButton: {
    marginTop:'1.3%',
    width:'14%',
    height:'50px',
    color:'#1da1f2',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
    borderColor:'#1da1f2',
    
  },
  ForgetPassword:{
    fontSize:'14px',
    fontFamily:'Segoe UI',
    marginLeft:'36.5%',
  },
  PrimaryStaticLoggedOutHomePageButtonSignup: {
    color:'#ffffff',
    marginTop:'20px',
    width:'80%',
    height:'35px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  SecondaryStaticLoggedOutHomePageButtonSignup: {
    marginTop:'15px',
    width:'80%',
    color:'#1da1f2',
    height:'35px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  StaticLoggedOutHomePageSignupTitle:{

  }
}));

export default useStyles;