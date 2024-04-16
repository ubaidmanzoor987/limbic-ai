-- init-db.sql
CREATE USER postgres WITH ENCRYPTED PASSWORD '123';
CREATE DATABASE limbic_ai;
GRANT ALL PRIVILEGES ON DATABASE limbic_ai TO postgres;

\c limbic_ai;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  text TEXT NOT NULL,
  question_id UUID NOT NULL,
  user_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO questions (id, text) VALUES
('4de99916-0c95-45e7-bbb6-8ce23d8f1b39', 'How would you describe your current mood and emotions? Are you feeling mostly positive, negative, or neutral?'),
('90192cde-e21f-45df-8ad6-488d52a531ab', 'On a scale of 1 to 10, with 1 being the lowest and 10 being the highest, how would you rate your overall stress level? Please provide details about what is contributing to your stress.'),
('76fe467f-9bf0-42c9-915e-12c4cc19f6bc', 'Are you currently experiencing any physical symptoms, such as headaches, stomachaches, or fatigue? If yes, please describe them in detail.'),
('27ca0030-9318-4141-800d-db0d6be5fc3d', 'How well are you sleeping lately? Are you experiencing any difficulties falling asleep, staying asleep, or waking up feeling rested?'),
('865e6a9f-8558-46df-9964-919fe460891b', 'Are you currently taking any medications? If yes, please provide the names and dosages. Additionally, have you noticed any side effects?'),
('97f3e5e4-d78f-4e41-9d85-64acf316e3e8', 'Do you have any allergies or sensitivities to medications, foods, or other substances? If yes, please describe them.'),
('e6cb38cd-82da-40c1-8d54-cb93b5a05df3', 'How would you rate your overall energy level throughout the day? Do you notice any patterns of fatigue or increased energy?'),
('232d6bbe-ee01-445e-acf7-6b399dfedfa4', 'Are you currently experiencing any difficulties in your relationships with family, friends, or romantic partners? If yes, please describe.'),
('a664c811-406b-471a-b582-8055ca4ac42a', 'Have you recently experienced any significant life changes or stressors, such as job loss, relocation, or the loss of a loved one?'),
('75742ac5-6bb7-4cd5-b015-3a2a0178d4f6', 'How would you describe your current level of motivation and engagement in daily activities? Are there any tasks or responsibilities that feel particularly challenging?');


INSERT INTO users (id, name) VALUES
('4de99916-0c95-45e7-bbb6-8ce23d8f1b39', 'Johnson Charles'),
('104aaaba-47bb-45cb-804e-68914ad34adf', 'John Smith'),
('5e79f6bc-8245-4913-a6a4-b5e79c965639', 'Margaret Lewis'),
('8b8117ec-9b88-4c8f-80fa-b94b134ce91e', 'Charlie kaploi');


INSERT INTO answers (id, text, question_id, user_id) VALUES
('4de99916-0c95-45e7-bbb6-8ce23cal2b39', 'neutral', '4de99916-0c95-45e7-bbb6-8ce23d8f1b39', '5e79f6bc-8245-4913-a6a4-b5e79c965639'),
('4de99916-0c95-45e7-bbb6-8ce23cal2b50', 'positive', '4de99916-0c95-45e7-bbb6-8ce23d8f1b39', '104aaaba-47bb-45cb-804e-68914ad34adf'),
('4de99916-0c95-45e7-bbb6-8ce2aaal2b49', 'negative', '4de99916-0c95-45e7-bbb6-8ce23d8f1b39'),
;
