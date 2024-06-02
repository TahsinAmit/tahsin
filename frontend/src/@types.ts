export interface InstructionProps {
  preferredDestination: string;
  layoverDuration: string;
  budget: number;
  seatPreference: string;
  fitnessGoal: string;
  timePerSession: string;
  sessionsPerWeek: number;
  learningGoal: string;
  learningMethods: string;
  timePerWeek: number;
  fieldOfStudy: string;
}

export interface HomePageProps {
  ageGroup: string;
  ethnicity: string;
  customEthnicity: string;
  gender: string;
  customGender: string;
  country: string;
  education: string;
  maritalStatus: string;
  employment: string;
  income: string;
  householdSize: string;
  homeOwnership: string;
  customHomeOwnership: string;
  bestFriend: string;
  authorityFigure: string;
  environmentalChoices: string;
  medicationAck: boolean;
  visionAck: boolean;
}

export interface FeedbackProps {
  trustworthy: number;
  sourceInfluence: number;
  futureTrust: number;
  likeMost: string;
  suggestions: string;
}
