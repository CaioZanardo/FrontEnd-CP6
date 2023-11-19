import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((apiData) => setData(apiData));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{!data ? "Loading..." : data.message}</h1>
        <h2>Materias Envolvidas:</h2>
        <ul className="info-list">
          {data && data.materias ? data.materias.map((materia, index) => (
            <li key={index}>{materia}</li>
          )) : null}
        </ul>
        <h2>Tabela de Alunos:</h2>
        <table className="info-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>RM</th>
            </tr>
          </thead>
          <tbody>
            {data && data.tabela ? data.tabela.map((aluno, index) => (
              <tr key={index}>
                <td>{aluno.nome}</td>
                <td>{aluno.rm}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
        <h2>Professor:</h2>
        <p className="info">{data && data.professor ? data.professor : "Nenhum professor disponível"}</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;