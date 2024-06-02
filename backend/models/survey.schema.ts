import { mysqlTable,serial, json, varchar, int, float, boolean } from 'drizzle-orm/mysql-core';

function createRecommendationSchema(max:number){
  let schema: Record<string, ReturnType<typeof varchar | typeof float>> = {}
  for (let index = 0; index < max; index++) {
    const value = `recommendation-page-${index+1}-value`
    const timetaken = `recommendation-page-${index+1}-timetaken`
    schema[value]= varchar(value, {length: 256}).default("0")
    schema[timetaken]= float(timetaken).default(0)
  }
  return schema
}

function createInstructionSchema(){
  return {
    preferredDestination: varchar('preferredDestination', {length: 256}).default(""),
    layoverDuration: varchar('layoverDuration', {length: 256}).default(""),
    budget: int('budget').default(0),
    seatPreference: varchar('seatPreference', {length: 256}).default(""),
    fitnessGoal: varchar('fitnessGoal', {length: 256}).default(""),
    timePerSession: varchar('timePerSession', {length: 256}).default(""),
    sessionsPerWeek: int('sessionsPerWeek').default(0),
    learningGoal: varchar('learningGoal', {length: 256}).default(""),
    learningMethods: varchar('learningMethods', {length: 256}).default(""),
    timePerWeek: int('timePerWeek').default(0),
    fieldOfStudy: varchar('fieldOfStudy', {length: 256}).default(""),
  }
}

function createHomeSchema(){
  return {
    ethnicity: varchar('ethnicity', {length: 256}),
    customEthnicity: varchar('customEthnicity', {length: 256}),
    gender: varchar('gender', {length: 256}),
    customGender: varchar('customGender', {length: 256}),
    country: varchar('country', {length: 256}),
    education: varchar('education', {length: 256}),
    maritalStatus: varchar('maritalStatus', {length: 256}),
    employment: varchar('employment', {length: 256}),
    income: varchar('income', {length: 256}),
    householdSize: varchar('householdSize', {length: 256}),
    homeOwnership: varchar('homeOwnership', {length: 256}),
    customHomeOwnership: varchar('customHomeOwnership', {length: 256}),
    bestFriend: varchar('bestFriend', {length: 256}),
    authorityFigure: varchar('authorityFigure', {length: 256}),
    environmentalChoices: varchar('environmentalChoices', {length: 256}),
    medicationAck: boolean('medicationAck').default(false),
    visionAck: boolean('visionAck').default(false),
  }
}

function createFeedbackSchema(){
  return {
    trustworthy: int('trustworthy'),
    sourceInfluence: int('sourceInfluence'),
    futureTrust: int('futureTrust'),
    likeMost: varchar('likeMost', {length: 256}),
    suggestions: varchar('suggestions', {length: 256}),
  }
}

// declaring enum in database
export const surveys = mysqlTable('surveys', {
  id: serial("id").primaryKey(),
  sessionId:varchar("sessionId", {length: 256}).unique().notNull(),
  instructionPageNumber: int('instructionPageNumber').notNull(),
  ...createRecommendationSchema(93),
  ...createInstructionSchema(),
  ...createHomeSchema(),
  ...createFeedbackSchema()
});


