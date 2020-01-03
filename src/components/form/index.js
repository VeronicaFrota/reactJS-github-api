import React from 'react';
import Spinner from '../spinner';
import { Button, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import styles from './style.module.css'

// stateless component
const Form = ({ user, loading, error, buttonAction, changeUser }) => (
    <div className="formContainer">

        <h1 className="title">Consumindo API do GitHub com ReactJS</h1>

        <TextField 
            className={styles.moduleCss}
            value={user}            /* Vem como propriedade do componente principal */ 
            placeholder="Usuário ou Organização"
            onChange={e => changeUser(e.target.value)}
        />

        <Button variant="contained" color="secondary" onClick={buttonAction} className={styles.button} >
            <SearchIcon />
            { loading ? <Spinner /> : "Buscar" }
        </Button>

        <p className="errorText">{error}</p>

    </div>
);

export default Form;


