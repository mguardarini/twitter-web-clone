
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '../../components/Link/link';
import useStyles from './style';

export default function Footer() {
    const classes = useStyles(); 
    return (
        <Grid item className={classes.footer} fixed="true" sm={12}>
            <Link className={classes.link} text="Sobre"/>
            <Link className={classes.link} text="Central de Ajuda"/>
            <Link className={classes.link} text="Blog"/>
            <Link className={classes.link} text="Status"/>
            <Link className={classes.link} text="Empregos"/>
            <Link className={classes.link} text="Termos"/>
            <Link className={classes.link} text="Politica de Privacidade"/>
            <Link className={classes.link} text="Cookies"/>
            <Link className={classes.link} text="Informações de anúncios"/>
            <Link className={classes.link} text="Marca"/>
            <Link className={classes.link} text="Aplicativos"/>
            <Link className={classes.link} text="Anunciantes"/>
            <Link className={classes.link} text="Marketing"/>
            <Link className={classes.link} text="Empresas"/>
            <Link className={classes.link} text="Programadores"/>
            <Link className={classes.link} text="Diretório"/>
            <Link className={classes.link} text="Configurações"/>
            <Link className={classes.link} text="© 2019 Twitter"/>
        </Grid>
    )
}
