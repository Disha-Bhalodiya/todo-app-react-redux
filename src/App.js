import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './Components/Appcontent';
import AppHeader from './Components/Appheader';
import PageTitle from './Components/Pagetitle';
import styles from './Styles/Modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        
        {/* //here is my PageTitle  com. for print title of page  */}
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;