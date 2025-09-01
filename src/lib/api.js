const BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8080';

export async function apiGet(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Accept': 'application/json' },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GET ${path} ${res.status} ${text}`);
  }
  return res.json();
}
