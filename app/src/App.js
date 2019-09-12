import React, {useState, useEffect} from 'react';
import axios from 'axios';
function App() {
  const [msg, setMsg] = useState('');

  useEffect(async() => {
    let response = await axios.get('/api/test');
    setMsg(response.data);
  });

  return (
    <div>
      <p>Server says: {msg}</p>
    </div>
  );
}

export default App;
