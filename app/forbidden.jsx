import ErrorCard from './shared/error-card';

export default function Forbidden() {
  return <ErrorCard code="403" label="GEEN TOEGANG" title="Deze pagina is afgeschermd." description="Je hebt vanaf deze verbinding geen toegang tot deze pagina." />;
}
