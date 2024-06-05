import { mysqlTable, serial, json, varchar, int, float, boolean } from 'drizzle-orm/mysql-core';

const options = { length: 128 };

function createRecommendationSchema(max: number) {
  let schema: Record<string, ReturnType<typeof varchar | typeof float>> = {}
  for (let index = 0; index < max; index++) {
    const value = `recommendation-page-${index + 1}-value`
    const timetaken = `recommendation-page-${index + 1}-timetaken`
    schema[value] = varchar(value, options).default("0")
    schema[timetaken] = float(timetaken).default(0)
  }
  return schema
}

function createInstructionSchema() {
  return {
    preferredDestination: varchar('preferredDestination', options).default(""),
    layoverDuration: varchar('layoverDuration', options).default(""),
    budget: int('budget').default(0),
    seatPreference: varchar('seatPreference', options).default(""),
    fitnessGoal: varchar('fitnessGoal', options).default(""),
    timePerSession: varchar('timePerSession', options).default(""),
    sessionsPerWeek: int('sessionsPerWeek').default(0),
    learningGoal: varchar('learningGoal', options).default(""),
    learningMethods: varchar('learningMethods', options).default(""),
    timePerWeek: int('timePerWeek').default(0),
    fieldOfStudy: varchar('fieldOfStudy', options).default(""),
  }
}

function createHomeSchema() {
  return {
    ethnicity: varchar('ethnicity', options),
    customEthnicity: varchar('customEthnicity', options),
    gender: varchar('gender', options),
    customGender: varchar('customGender', options),
    country: varchar('country', options),
    education: varchar('education', options),
    maritalStatus: varchar('maritalStatus', options),
    employment: varchar('employment', options),
    income: varchar('income', options),
    householdSize: varchar('householdSize', options),
    homeOwnership: varchar('homeOwnership', options),
    customHomeOwnership: varchar('customHomeOwnership', options),
    bestFriend: varchar('bestFriend', options),
    authorityFigure: varchar('authorityFigure', options),
    environmentalChoices: varchar('environmentalChoices', options),
    medicationAck: boolean('medicationAck').default(false),
    visionAck: boolean('visionAck').default(false),
  }
}

function createFeedbackSchema() {
  return {
    trustworthy: int('trustworthy'),
    sourceInfluence: int('sourceInfluence'),
    futureTrust: int('futureTrust'),
    likeMost: varchar('likeMost', options),
    suggestions: varchar('suggestions', options),
  }
}

// declaring enum in database
export const surveys = mysqlTable('surveys', {
  id: serial("id").primaryKey(),
  sessionId: varchar("sessionId", options).unique().notNull(),
  instructionPageNumber: int('instructionPageNumber').notNull(),
  ...createHomeSchema(),
  ...createInstructionSchema(),
  ...createRecommendationSchema(93),
  ...createFeedbackSchema()
});


