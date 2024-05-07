export interface InstructionProps {
  preferredDestination: string;
  layoverDuration: string;
  budget: number;
  seatPreference: string;
  fitnessGoal: string;
  timePerSession: string;
  sessionsPerWeek: string;
  learningGoal: string;
  learningMethods: string;
  timePerWeek: string;
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
  bestFriend: string;
  authorityFigure: string;
  environmentalChoices: string;
  medicationAck: boolean;
  visionAck: boolean;
}
