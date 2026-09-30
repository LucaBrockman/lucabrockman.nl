# lucabrockman.nl

Statische persoonlijke startpagina voor `lucabrockman.nl`.

- `index.html`: hoofdpagina met een handmatige link naar het bestaande portfolio.
- `404.html`: eigen pagina voor niet-bestaande URLs; Cloudflare Pages herkent dit bestand automatisch.
- `403.html`: eigen pagina voor geweigerde toegang op afgeschermde Nginx Proxy Manager-hosts. Het bestand alleen publiceren is niet voldoende: Nginx moet het als foutpagina serveren met HTTP-status 403.

Alle pagina's zijn zelfstandige HTML-bestanden zonder externe lettertypen, scripts of afbeeldingen.

## Publicatie

De site kan als statische map op Cloudflare Pages of Vercel worden gepubliceerd. Koppel `lucabrockman.nl` aan het project en wijzig alleen het DNS-record van het hoofddomein. `ps.lucabrockman.nl` blijft naar het bestaande portfolio verwijzen.

Voor het kale IP-adres: stel in Nginx Proxy Manager onder **Settings → Default Site** een eigen pagina of een redirect naar `https://lucabrockman.nl/` in. Een URL met `https://<ip>` vereist een certificaat voor het IP-adres zelf en is niet hetzelfde als de standaard HTTP-pagina.
