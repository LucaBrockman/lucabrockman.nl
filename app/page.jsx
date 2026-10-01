import SiteShell from './shared/site-shell';

export default function Home() {
  return (
    <SiteShell>
      <main className="hero">
        <div className="hero-inner">
          <h1>Hoi, ik ben<br />Luca Brockman.</h1>
          <p className="intro">Ik werk aan websites, software en infrastructuur. Hier vind je mijn portfolio en mijn werk bij BLB Solutions.</p>
          <div className="actions">
            <a className="primary-link" href="https://ps.lucabrockman.nl/">Bekijk mijn portfolio <span aria-hidden="true">↗</span></a>
            <a className="secondary-link" href="https://www.blbsolutions.nl/">BLB Solutions <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
