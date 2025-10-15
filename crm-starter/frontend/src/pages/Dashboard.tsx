import React, { useState } from 'react';
import { getEcho } from '../services/api';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('Hello');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const onAsk = async () => {
    setLoading(true);
    try {
      const res = await getEcho(prompt);
      setResponse(res.echo ?? '');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'grid', gap: 12, maxWidth: 600 }}>
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Say something" />
        <button onClick={onAsk} disabled={loading}>{loading ? 'Asking…' : 'Ask AI'}</button>
        <pre>{response}</pre>
      </div>
    </main>
  );
}



