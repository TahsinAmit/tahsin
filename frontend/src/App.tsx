import { useAppState } from './state/state';
import './App.css';
import { useEffect } from 'react';
export default function App() {
  const ActivePage = useAppState((s) => s.activePage);
  const setActivePage = useAppState((s) => s.setActivePage);

  useEffect(() => {
    const surveyComplete = localStorage.getItem('survey_complete') === 'true';
    if (surveyComplete) setActivePage('surveyComplete');
  }, []);

  return <ActivePage></ActivePage>;
}
