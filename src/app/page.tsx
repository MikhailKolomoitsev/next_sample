'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const callApi = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to My API Tester</h1>
      <button onClick={callApi} style={{backgroundColor: 'red', width: 100, height:100}}>Call /api/hello</button>
      {message && <p>Response: {message}</p>}
    </main>
  );
}