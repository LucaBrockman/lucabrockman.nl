export default function Home() {
  return (
    <main className="home-card">
      <header className="home-header">
        <div className="identity">
          <div className="mark" aria-hidden="true">LB</div>
          <div><div className="name">Luca Brockman</div><div className="label">Persoonlijke pagina</div></div>
        </div>
        <div className="status">Welkom</div>
      </header>
      <section className="home-content" aria-labelledby="intro-title">
        <p className="eyebrow">Aangenaam</p>
        <h1 id="intro-title">Hoi, ik ben <span>Luca.</span></h1>
        <p className="intro">Leuk dat je er bent. Ik ben graag bezig met technologie, netwerken en nieuwe ideeën. Dit is mijn kleine plek op het web.</p>
        <a className="portfolio-link" href="https://ps.lucabrockman.nl/">Bekijk mijn portfolio <span aria-hidden="true">↗</span></a>
      </section>
      <footer className="home-footer"><span>Luca Brockman</span><span>Gemaakt met aandacht.</span></footer>
    </main>
  );
}
