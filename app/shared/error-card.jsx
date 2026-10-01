import SiteShell from './site-shell';

export default function ErrorCard({ code, label, title, description, backLink = false }) {
  return (
    <SiteShell>
      <main className="error-content">
        <div className="error-inner">
          <p className="error-code">{code} — {label}</p>
          <h1>{title}</h1>
          <p className="error-description">{description}</p>
          {backLink ? <div className="actions"><a className="primary-link" href="/">Naar de homepage <span aria-hidden="true">↗</span></a></div> : null}
        </div>
      </main>
    </SiteShell>
  );
}
