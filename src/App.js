import GetGeolocation from './components/GetGeolocation/GetGeolocation.component';
import SearchLocation from './components/SearchLocation/SearchLocation.component';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <GetGeolocation />
      <hr/>
      <SearchLocation />
    </div>
  );
}

export default App;
