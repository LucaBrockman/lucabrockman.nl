export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/">Luca Brockman</a>
        <nav className="site-nav" aria-label="Hoofdnavigatie">
          <a href="https://www.blbsolutions.nl/">BLB Solutions</a>
          <a className="nav-button" href="https://ps.lucabrockman.nl/">Portfolio</a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Luca Brockman</span>
        <a href="https://www.blbsolutions.nl/">BLB Solutions ↗</a>
      </footer>
    </div>
  );
}
