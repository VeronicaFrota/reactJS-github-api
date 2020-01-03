import React from "react";
import RepoItem from './components/repo-item'

// Recebe os repositórios que são buscados no component principal (App.js) através da busca
const RepoList = ({ repos }) => (
    // Map para percorrer todos os dados do array, ou seja, percorre todos os repositórios
    <div className="repoListContainer">
        {
            repos.map(repo => (
                <RepoItem repo={repo}/>
            ))
        }
    </div>
)


export default RepoList;

