
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '../../components/Link/link';
import useStyles from './style';

export default function Footer() {
    const classes = useStyles(); 
    return (
        <Grid item className={classes.Footer} sm={12}>
            <Link text="Sobre"/>
            <Link text="Central de Ajuda"/>
            <Link text="Blog"/>
            <Link text="Status"/>
            <Link text="Empregos"/>
            <Link text="Termos"/>
            <Link text="Politica de Privacidade"/>
            <Link text="Cookies"/>
            <Link text="Informações de anúncios"/>
            <Link text="Marca"/>
            <Link text="Aplicativos"/>
            <Link text="Anunciantes"/>
            <Link text="Marketing"/>
            <Link text="Empresas"/>
            <Link text="Programadores"/>
            <Link text="Diretório"/>
            <Link text="Configurações"/>
            <Link text="© 2019 Twitter"/>
        </Grid>
    )
}
