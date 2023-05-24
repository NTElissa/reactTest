import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hello from './Component/Home';
import Register from './Component/Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/displayRegistration" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
