# lucabrockman.nl

Persoonlijke startpagina van Luca Brockman, gebouwd met Next.js en React en gehost op Vercel. De vormgeving gebruikt het kleurpalet en de typografische stijl van BLB Solutions.

## Ontwikkelen

```bash
npm install
npm run dev
```

De homepage staat in `app/page.jsx`. Onbekende paden en de expliciete route `/404` gebruiken `app/not-found.jsx` met HTTP 404. De route `/403` rendert de foutpagina met React en retourneert HTTP 403.

## Productie

De GitHub-repository is gekoppeld aan het Vercel-project `lucabrockman-nl`. Het hoofddomein gebruikt in Cloudflare een DNS-only CNAME op `68179837c2d3b743.vercel-dns-017.com`. Het afzonderlijke `ps.lucabrockman.nl`-record is niet gewijzigd.

Het kale IP-adres wordt door Nginx Proxy Manager afgehandeld. **Settings → Default Site** verwijst nu naar `https://lucabrockman.nl/`.

Alle acht Nginx Proxy Manager-hosts met de toegangslijst `HomeNetwork` gebruiken in **Advanced → Custom Nginx Configuration**:

```nginx
error_page 403 =302 https://lucabrockman.nl/403;
```

Een geweigerde aanvraag op zo'n host krijgt daarmee eerst HTTP 302; de browser opent vervolgens de Vercel-pagina `/403`, die HTTP 403 teruggeeft. De toegangsregels blijven bij Nginx Proxy Manager staan.

Voor onbekende subdomeinen is een NPM **404 Host** op `*.lucabrockman.nl` ingesteld, met het bestaande wildcardcertificaat en in **Advanced**:

```nginx
error_page 404 =302 https://lucabrockman.nl/404;
```

Nginx kiest bestaande exacte proxyhosts vóór deze wildcard. Een aanvraag op het kale IP-adres blijft via **Default Site** naar de homepage verwijzen.
