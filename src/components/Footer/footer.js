
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../Link/link';

export default function Footer() {

    const classes = useStyles();

    return (
        <Grid item className={classes.footer} fixed="true" sm={12}>
            <Link name="Sobre"/>
            <Link name="Central de Ajuda"/>
            <Link name="Blog"/>
            <Link name="Status"/>
            <Link name="Empregos"/>
            <Link name="Termos"/>
            <Link name="Politica de Privacidade"/>
            <Link name="Cookies"/>
            <Link name="Informações de anúncios"/>
            <Link name="Marca"/>
            <Link name="Aplicativos"/>
            <Link name="Anunciantes"/>
            <Link name="Marketing"/>
            <Link name="Empresas"/>
            <Link name="Programadores"/>
            <Link name="Diretório"/>
            <Link name="Configurações"/>
            <Link name="© 2019 Twitter"/>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    footer:{
        marginLeft:'60px',
        marginRight:'50px'
    }
}));
