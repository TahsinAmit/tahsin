import { useAppState } from './state/state';

export default function App() {
  const ActivePage = useAppState((s) => s.activePage);
  const SessionID = useAppState((s) => s.sessionId);
  return <div>
    <h1>{SessionID}</h1>
    <ActivePage></ActivePage></div>;
}
