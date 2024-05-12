import { useAppState } from './state/state';
import './App.css';
export default function App() {
  const ActivePage = useAppState((s) => s.activePage);
  const SessionID = useAppState((s) => s.sessionId);
  return (
    <div>
      <h1>Session ID: {SessionID}</h1>
      <ActivePage></ActivePage>
    </div>
  );
}
