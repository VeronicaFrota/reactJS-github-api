import React from 'react';
import { Button } from '@material-ui/core'
import styles from './style.module.css'

const RepoItem = ({ repo }) => (
    <a href={repo.html_url} key={repo.id} className="repoItemContainer" target="_blank">
        <span>{repo.name}</span>
        <span>Stars: {repo.stargazers_count}</span>
        <span>Fork: {repo.forks}</span>
        <span className={styles.spanSpace}>Issues: {repo.open_issues}</span>

        <Button variant="outlined" color="primary" href={repo.html_url} target="_blank" className={styles.button}>
            Visualizar
        </Button>
    </a>
)


export default RepoItem;

