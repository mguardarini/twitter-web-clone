
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  rootGrid: {
    flexGrow: 1,
    color: '#ffffff',
  },
  imageGrid: {
    alignContent: 'center',
    marginLeft:'29%',
    marginTop:'20px',
    marginRight:'24%',
    align: 'center',
    width:'70%',
    height:'70%'
  },
  inputGrid: {
    marginLeft:'15%',
    marginTop:'3%',
  },
  entrarButtoon: {
    marginTop:'11px',
    width:'80px',
    height:'50px',
    color:'#1da1f2',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  forgetPasswordGrid:{
    marginLeft:'50%',
  },
  forgetPasswordText:{
    paddingTop:'0px',
    fontSize:'15px'
  },
  inscrevaButton: {
    color:'#ffffff',
    marginTop:'20px',
    width:'80%',
    height:'35px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  },
  entrarButton2: {
    marginTop:'15px',
    width:'80%',
    color:'#1da1f2',
    height:'35px',
    fontFamily:'Segoe UI',
    borderRadius:'60px',
    textTransform: 'none',
  }
}));

export default useStyles;