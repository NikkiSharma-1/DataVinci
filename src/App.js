import React from 'react';
import "./scss/index.scss";
import Sidebar from './components/Sidebar';
import Metrics from './components/Metrics';

function App() {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Metrics />
    </div>
  )
}

export default App;