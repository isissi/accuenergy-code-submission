import GetGeolocation from './components/GetGeolocation/GetGeolocation.component';
import SearchLocation from './components/SearchLocation/SearchLocation.component';
import { useState } from 'react';

function App() {
  const [ geolocation, setGeolocation ] = useState(null);

  return (
    <div className="App">
      <GetGeolocation setGeolocation={setGeolocation} geolocation={geolocation}/>
      <hr/>
      <SearchLocation />
    </div>
  );
}

export default App;
