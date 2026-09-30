# lucabrockman.nl

Persoonlijke startpagina van Luca Brockman, gebouwd met Next.js en React en gehost op Vercel.

## Ontwikkelen

```bash
npm install
npm run dev
```

De homepage staat in `app/page.jsx`. Onbekende paden gebruiken `app/not-found.jsx` met HTTP 404. De route `/403` rendert de foutpagina met React en retourneert HTTP 403.

## Domein en proxy

Koppel `lucabrockman.nl` aan het Vercel-project en wijzig daarna alleen het DNS-record van het hoofddomein. Laat `ps.lucabrockman.nl` ongemoeid.

Het kale IP-adres wordt door Nginx Proxy Manager afgehandeld. Verander onder **Settings → Default Site** de huidige doorsturing naar `ps.lucabrockman.nl` in een eigen pagina of een doorsturing naar `https://lucabrockman.nl/`.

De Vercel-route `/403` verandert de foutpagina van afgeschermde Nginx Proxy Manager-hosts niet automatisch. Daarvoor is een Nginx `error_page 403`-configuratie nodig die het antwoord met status 403 voor die hosts serveert.
