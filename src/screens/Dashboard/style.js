import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Root: {
      flexGrow: 1,
    },
    Paper: {
      marginTop: '20%',
      marginLeft: '90%',
      padding: theme.spacing(6),
      textAlign: 'center',
      width:'100%',
      color: theme.palette.text.secondary,
    },
  }),
);

export default useStyles;