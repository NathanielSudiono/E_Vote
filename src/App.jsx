import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreateCandButton from './components/CreateCandButton';
import RegisterCandidate from './components/RegisterCandidate';
import CandidateList from './components/CandidateList';

function App() {
  const [candidates, setCandidates] = useState([]);

  // Function to add a candidate to the list
  const addCandidate = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-candidate" element={<CreateCandButton />} />
        <Route path="/register-candidate" element={<RegisterCandidate addCandidate={addCandidate} />} />
        <Route path="/candidate-list" element={<CandidateList candidates={candidates} />} />
      </Routes>
    </Router>
  );
}

export default App;
