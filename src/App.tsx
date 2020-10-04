import React from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';

function App() {
  return (
    <div id="wrapper">
      <main role="main" id="main">
        <AppHeader />
        <AppContent />
      </main>

      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;