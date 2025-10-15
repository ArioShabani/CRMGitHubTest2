export const API_BASE = import.meta?.env?.VITE_API_BASE || process.env.REACT_APP_API_BASE || 'http://localhost:8000/api';

export async function getEcho(prompt: string): Promise<{ echo: string }> {
  const url = `${API_BASE}/ai/echo?prompt=${encodeURIComponent(prompt)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}



