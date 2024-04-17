import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your main CSS file
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the Preloader component before rendering the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
