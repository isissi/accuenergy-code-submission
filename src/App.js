import GetGeolocation from './components/GetGeolocation/GetGeolocation.component';
import { useState } from 'react';

function App() {
  const [ geolocation, setGeolocation ] = useState(null);

  return (
    <div className="App">
      <GetGeolocation setGeolocation={setGeolocation} geolocation={geolocation}/>
    </div>
  );
}

export default App;
