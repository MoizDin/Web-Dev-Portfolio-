import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18+
import './index.css';
import App from './App';
import EmojeeCounter from './EmojeeCounters'
import HookControlledButtonState from './Counter'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <HookControlledButtonState />
    <EmojeeCounter pic='Love'/>
    <EmojeeCounter pic='Sad'/>
    <EmojeeCounter pic='Like'/>
  </React.StrictMode>
);
