export default function ErrorCard({ code, label, title, description, backLink = false }) {
  return (
    <main className="error-card">
      <p className="error-code">{code} / {label}</p>
      <h1>{title}</h1>
      <p className="error-description">{description}</p>
      {backLink ? <a href="/">Terug naar het begin ↗</a> : null}
    </main>
  );
}
