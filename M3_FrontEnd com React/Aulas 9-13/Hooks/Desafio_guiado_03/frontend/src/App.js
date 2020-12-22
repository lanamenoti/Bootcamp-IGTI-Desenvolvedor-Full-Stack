import React, { useEffect, useState } from 'react';
import Candidates from './components/Candidates';
import Header from './components/Header';
import Spinner from './components/Spinner';

export default function App() {
  const [candidates, setCandidates] = useState([]);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCandidates(json.candidates);
        });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [candidates]);

  if (candidates.length === 0) {
    return <Spinner description="Carregando..." />;
  }

  return (
    <div className="container">
      <Header> Votação</Header>
      <Candidates candidates={candidates} />
    </div>
  );
}
