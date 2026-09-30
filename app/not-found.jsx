import ErrorCard from './shared/error-card';

export default function NotFound() {
  return <ErrorCard code="404" label="NIET GEVONDEN" title="Hier is niets te vinden." description="Deze pagina bestaat niet of is verplaatst." backLink />;
}
