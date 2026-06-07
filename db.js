/* ═══════════════════════════════════════════════════════
   SVS Beauty Space — Database (SQLite) — STUB for Render
   On Render we use PostgreSQL only (db-pg.js).
   This stub prevents crashes in auth.js/payments.js.
   ═══════════════════════════════════════════════════════ */

const handler = {
  get(_, prop) {
    return (...args) => {
      console.warn(`[db-stub] SQLite not available on Render. Called: ${prop}`);
      return { changes: 0, lastInsertRowid: 0 };
    };
  }
};

module.exports = new Proxy({}, handler);
