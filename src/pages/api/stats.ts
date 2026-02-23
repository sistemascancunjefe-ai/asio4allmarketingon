import type { APIRoute } from 'astro';

/**
 * Back-end node: returns marketing statistics as JSON.
 * Consumed by the StatsWidget front-end island on the home page.
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
