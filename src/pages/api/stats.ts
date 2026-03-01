import type { APIRoute } from 'astro';

/**
 * Back-end node: returns marketing statistics as JSON.
 * Consumed by the StatsWidget front-end island on the home page.
 *
 * NOTE: This project uses Astro's default `output: "static"` mode, so this
 * route is pre-rendered at build time and the values below are placeholder
 * data. To serve live per-request stats, configure an SSR adapter and add
 * `export const prerender = false` to this file, then replace the hardcoded
 * values with a real data source (database, external API, etc.).
 */
export const GET: APIRoute = () => {
  const stats = {
    visits: 12483,
    leads: 342,
    conversions: 58,
    revenue: 28450,
    updatedAt: new Date().toISOString(),
  };

  return new Response(JSON.stringify(stats), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
