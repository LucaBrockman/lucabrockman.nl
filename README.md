# lucabrockman.nl

Persoonlijke startpagina van Luca Brockman, gebouwd met Next.js en React en gehost op Vercel.

## Ontwikkelen

```bash
npm install
npm run dev
```

De homepage staat in `app/page.jsx`. Onbekende paden gebruiken `app/not-found.jsx` met HTTP 404. De route `/403` rendert de foutpagina met React en retourneert HTTP 403.

## Productie

De GitHub-repository is gekoppeld aan het Vercel-project `lucabrockman-nl`. Het hoofddomein gebruikt in Cloudflare een DNS-only CNAME op `68179837c2d3b743.vercel-dns-017.com`. Het afzonderlijke `ps.lucabrockman.nl`-record is niet gewijzigd.

Het kale IP-adres wordt door Nginx Proxy Manager afgehandeld. **Settings → Default Site** verwijst nu naar `https://lucabrockman.nl/`.

Nginx Proxy Manager-hosts met de toegangslijst `HomeNetwork` gebruiken in **Advanced → Custom Nginx Configuration**:

```nginx
error_page 403 =302 https://lucabrockman.nl/403;
```

Een geweigerde aanvraag op zo'n host krijgt daarmee eerst HTTP 302; de browser opent vervolgens de Vercel-pagina `/403`, die HTTP 403 teruggeeft. De toegangsregels blijven bij Nginx Proxy Manager staan. De `404 Hosts`-functie van Nginx Proxy Manager is niet betrokken bij de Next.js-404-pagina op het hoofddomein.
