CREATE TABLE `surveys` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`sessionId` varchar(10) NOT NULL,
	`instructionPageNumber` int NOT NULL,
	`recommendation-page-1-value` float DEFAULT 0,
	`recommendation-page-2-value` float DEFAULT 0,
	`recommendation-page-3-value` float DEFAULT 0,
	`recommendation-page-4-value` float DEFAULT 0,
	`recommendation-page-5-value` float DEFAULT 0,
	`recommendation-page-6-value` float DEFAULT 0,
	`recommendation-page-7-value` float DEFAULT 0,
	`recommendation-page-8-value` float DEFAULT 0,
	`recommendation-page-9-value` float DEFAULT 0,
	`recommendation-page-10-value` float DEFAULT 0,
	`recommendation-page-11-value` float DEFAULT 0,
	`recommendation-page-12-value` float DEFAULT 0,
	`recommendation-page-13-value` float DEFAULT 0,
	`recommendation-page-14-value` float DEFAULT 0,
	`recommendation-page-15-value` float DEFAULT 0,
	`recommendation-page-16-value` float DEFAULT 0,
	`recommendation-page-17-value` float DEFAULT 0,
	`recommendation-page-18-value` float DEFAULT 0,
	`recommendation-page-19-value` float DEFAULT 0,
	`recommendation-page-20-value` float DEFAULT 0,
	`recommendation-page-21-value` float DEFAULT 0,
	`recommendation-page-22-value` float DEFAULT 0,
	`recommendation-page-23-value` float DEFAULT 0,
	`recommendation-page-24-value` float DEFAULT 0,
	`recommendation-page-25-value` float DEFAULT 0,
	`recommendation-page-26-value` float DEFAULT 0,
	`recommendation-page-27-value` float DEFAULT 0,
	`recommendation-page-28-value` float DEFAULT 0,
	`recommendation-page-29-value` float DEFAULT 0,
	`recommendation-page-30-value` float DEFAULT 0,
	`recommendation-page-31-value` float DEFAULT 0,
	`recommendation-page-32-value` float DEFAULT 0,
	`recommendation-page-33-value` float DEFAULT 0,
	`recommendation-page-34-value` float DEFAULT 0,
	`recommendation-page-35-value` float DEFAULT 0,
	`recommendation-page-36-value` float DEFAULT 0,
	`recommendation-page-37-value` float DEFAULT 0,
	`recommendation-page-38-value` float DEFAULT 0,
	`recommendation-page-39-value` float DEFAULT 0,
	`recommendation-page-40-value` float DEFAULT 0,
	`recommendation-page-41-value` float DEFAULT 0,
	`recommendation-page-42-value` float DEFAULT 0,
	`recommendation-page-43-value` float DEFAULT 0,
	`recommendation-page-44-value` float DEFAULT 0,
	`recommendation-page-45-value` float DEFAULT 0,
	`recommendation-page-46-value` float DEFAULT 0,
	`recommendation-page-47-value` float DEFAULT 0,
	`recommendation-page-48-value` float DEFAULT 0,
	`recommendation-page-49-value` float DEFAULT 0,
	`recommendation-page-50-value` float DEFAULT 0,
	`recommendation-page-51-value` float DEFAULT 0,
	`recommendation-page-52-value` float DEFAULT 0,
	`recommendation-page-53-value` float DEFAULT 0,
	`recommendation-page-54-value` float DEFAULT 0,
	`recommendation-page-55-value` float DEFAULT 0,
	`recommendation-page-56-value` float DEFAULT 0,
	`recommendation-page-57-value` float DEFAULT 0,
	`recommendation-page-58-value` float DEFAULT 0,
	`recommendation-page-59-value` float DEFAULT 0,
	`recommendation-page-60-value` float DEFAULT 0,
	`recommendation-page-61-value` float DEFAULT 0,
	`recommendation-page-62-value` float DEFAULT 0,
	`recommendation-page-63-value` float DEFAULT 0,
	`recommendation-page-64-value` float DEFAULT 0,
	`recommendation-page-65-value` float DEFAULT 0,
	`recommendation-page-66-value` float DEFAULT 0,
	`recommendation-page-67-value` float DEFAULT 0,
	`recommendation-page-68-value` float DEFAULT 0,
	`recommendation-page-69-value` float DEFAULT 0,
	`recommendation-page-70-value` float DEFAULT 0,
	`recommendation-page-71-value` float DEFAULT 0,
	`recommendation-page-72-value` float DEFAULT 0,
	`recommendation-page-73-value` float DEFAULT 0,
	`recommendation-page-74-value` float DEFAULT 0,
	`recommendation-page-75-value` float DEFAULT 0,
	`recommendation-page-76-value` float DEFAULT 0,
	`recommendation-page-77-value` float DEFAULT 0,
	`recommendation-page-78-value` float DEFAULT 0,
	`recommendation-page-79-value` float DEFAULT 0,
	`recommendation-page-80-value` float DEFAULT 0,
	`recommendation-page-81-value` float DEFAULT 0,
	`recommendation-page-82-value` float DEFAULT 0,
	`recommendation-page-83-value` float DEFAULT 0,
	`recommendation-page-84-value` float DEFAULT 0,
	`recommendation-page-85-value` float DEFAULT 0,
	`recommendation-page-86-value` float DEFAULT 0,
	`recommendation-page-87-value` float DEFAULT 0,
	`recommendation-page-88-value` float DEFAULT 0,
	`recommendation-page-89-value` float DEFAULT 0,
	`recommendation-page-90-value` float DEFAULT 0,
	`recommendation-page-91-value` float DEFAULT 0,
	`recommendation-page-92-value` float DEFAULT 0,
	`recommendation-page-93-value` float DEFAULT 0,
	`preferredDestination` varchar(256) DEFAULT '',
	`layoverDuration` varchar(256) DEFAULT '',
	`budget` int DEFAULT 0,
	`seatPreference` varchar(256) DEFAULT '',
	`fitnessGoal` varchar(256) DEFAULT '',
	`timePerSession` varchar(256) DEFAULT '',
	`sessionsPerWeek` int DEFAULT 0,
	`learningGoal` varchar(256) DEFAULT '',
	`learningMethods` varchar(256) DEFAULT '',
	`timePerWeek` int DEFAULT 0,
	`fieldOfStudy` varchar(256) DEFAULT '',
	`ethnicity` varchar(256),
	`customEthnicity` varchar(256),
	`gender` varchar(256),
	`customGender` varchar(256),
	`country` varchar(256),
	`education` varchar(256),
	`maritalStatus` varchar(256),
	`employment` varchar(256),
	`income` varchar(256),
	`householdSize` varchar(256),
	`homeOwnership` varchar(256),
	`customHomeOwnership` varchar(256),
	`bestFriend` varchar(256),
	`authorityFigure` varchar(256),
	`environmentalChoices` varchar(256),
	`medicationAck` boolean DEFAULT false,
	`visionAck` boolean DEFAULT false,
	`trustworthy` int,
	`sourceInfluence` int,
	`futureTrust` int,
	`likeMost` varchar(256),
	`suggestions` varchar(256),
	CONSTRAINT `surveys_id` PRIMARY KEY(`id`),
	CONSTRAINT `surveys_sessionId_unique` UNIQUE(`sessionId`)
);