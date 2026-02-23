/** @jsxImportSource react */

import { useEffect, useState } from 'react';

interface Stats {
  visits: number;
  leads: number;
  conversions: number;
  revenue: number;
  updatedAt: string;
}

/**
 * Front-end island: fetches marketing stats from the /api/stats back-end node
 * and renders them in a responsive dashboard grid.
 */
export function StatsWidget() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Stats>;
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="stats-loading">Cargando estadísticas…</p>;
  }
  if (error) {
    return <p className="stats-error">Error al cargar datos: {error}</p>;
  }
  if (!stats) return null;

  const cards = [
    { label: 'Visitas', value: stats.visits.toLocaleString('es-MX') },
    { label: 'Leads', value: stats.leads.toLocaleString('es-MX') },
    { label: 'Conversiones', value: stats.conversions.toLocaleString('es-MX') },
    { label: 'Ingresos (MXN)', value: `$${stats.revenue.toLocaleString('es-MX')}` },
  ];

  return (
    <section className="stats-section">
      <h2 className="stats-title">Estadísticas de Campaña</h2>
      <div className="stats-grid">
        {cards.map(({ label, value }) => (
          <div key={label} className="stat-card">
            <span className="stat-label">{label}</span>
            <span className="stat-value">{value}</span>
          </div>
        ))}
      </div>
      <p className="stats-updated">
        Actualizado: {new Date(stats.updatedAt).toLocaleString('es-MX')}
      </p>
    </section>
  );
}
