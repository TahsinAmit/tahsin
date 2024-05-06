import { create } from 'zustand';
import Home from '../components/Home';
import Instructions from '../components/Instructions';
import Recommendations from '../components/Recommendations';
import { randomNumber } from '../utils';
import Feedback from '../components/Feedback';
import { InstructionProps } from '../@types';

function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

const pages = {
  home: () => <Home></Home>,
  instructions: () => <Instructions></Instructions>,
  recommendations: () => <Recommendations></Recommendations>,
  feedback: () => <Feedback></Feedback>,
};

type Ipage = keyof typeof pages;

interface State {
  sessionId: string;
  activePage: () => JSX.Element;
  setActivePage: (activePage: Ipage) => void;
  instructionPageNumber: number;
  activeRandomPageIndex: number;
  setActiveRandomPageIndex: (activeRandomPageIndex: number) => void;
  recommendationValues: string[];
  instructionValues?: InstructionProps;
  setInstructionValues: (props: InstructionProps) => void;
  setRecommendationValues: (recommendationValue: string) => void;
}

export const useAppState = create<State>((set, state) => ({
  sessionId: randomId(),
  activePage: pages.home,
  instructionPageNumber: randomNumber(1, 3),
  activeRandomPageIndex: 0,
  setActivePage(activePage) {
    set({ activePage: pages[activePage] });
  },
  setActiveRandomPageIndex(activeRandomPageIndex) {
    set({ activeRandomPageIndex });
  },
  recommendationValues: [],
  setRecommendationValues(recommendationValue) {
    const recommendationValues = state().recommendationValues.concat(recommendationValue);
    set({ recommendationValues });
  },
  setInstructionValues(instructionValues) {
    set({ instructionValues });
  },
}));
