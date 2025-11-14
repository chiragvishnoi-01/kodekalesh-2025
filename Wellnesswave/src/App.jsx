import { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await api.get('/');
        setStatus('Connected to backend!');
      } catch (error) {
        setStatus('Connection failed');
        console.error('Error:', error);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Connection Status: {status}</h1>
    </div>
  );
}

export default App;