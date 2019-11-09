
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '../../components/Link/link';
import useStyles from './style';

export default function Footer() {
    const classes = useStyles(); 
    return (
        <Grid item className={classes.Footer} sm={12}>
            <Link className={classes.Link} text="Sobre"/>
            <Link className={classes.Link} text="Central de Ajuda"/>
            <Link className={classes.Link} text="Blog"/>
            <Link className={classes.Link} text="Status"/>
            <Link className={classes.Link} text="Empregos"/>
            <Link className={classes.Link} text="Termos"/>
            <Link className={classes.Link} text="Politica de Privacidade"/>
            <Link className={classes.Link} text="Cookies"/>
            <Link className={classes.Link} text="Informações de anúncios"/>
            <Link className={classes.Link} text="Marca"/>
            <Link className={classes.Link} text="Aplicativos"/>
            <Link className={classes.Link} text="Anunciantes"/>
            <Link className={classes.Link} text="Marketing"/>
            <Link className={classes.Link} text="Empresas"/>
            <Link className={classes.Link} text="Programadores"/>
            <Link className={classes.Link} text="Diretório"/>
            <Link className={classes.Link} text="Configurações"/>
            <Link className={classes.Link} text="© 2019 Twitter"/>
        </Grid>
    )
}
