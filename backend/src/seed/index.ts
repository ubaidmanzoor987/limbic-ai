import { Pool } from "pg";
import "dotenv/config";
import { parse } from "dotenv";
import { v4 as uuidv4 } from "uuid";
parse(".env");

import { getDbConfig } from "../configs";

// Database connection configuration
const { host, port, database, user, password } = getDbConfig();

const pool = new Pool({
  user,
  host,
  database,
  password,
  port: port,
});

const clientQuestionnaire = [
  {
    question:
      "How would you describe your current mood and emotions? Are you feeling mostly positive, negative, or neutral?",
  },
  {
    question:
      "On a scale of 1 to 10, with 1 being the lowest and 10 being the highest, how would you rate your overall stress level? Please provide details about what is contributing to your stress.",
  },
  {
    question:
      "Are you currently experiencing any physical symptoms, such as headaches, stomachaches, or fatigue? If yes, please describe them in detail.",
  },
  {
    question:
      "How well are you sleeping lately? Are you experiencing any difficulties falling asleep, staying asleep, or waking up feeling rested?",
  },
  {
    question:
      "Are you currently taking any medications? If yes, please provide the names and dosages. Additionally, have you noticed any side effects?",
  },
  {
    question:
      "Do you have any allergies or sensitivities to medications, foods, or other substances? If yes, please describe them.",
  },
  {
    question:
      "How would you rate your overall energy level throughout the day? Do you notice any patterns of fatigue or increased energy?",
  },
  {
    question:
      "Are you currently experiencing any difficulties in your relationships with family, friends, or romantic partners? If yes, please describe.",
  },
  {
    question:
      "Have you recently experienced any significant life changes or stressors, such as job loss, relocation, or the loss of a loved one?",
  },
  {
    question:
      "How would you describe your current level of motivation and engagement in daily activities? Are there any tasks or responsibilities that feel particularly challenging?",
  },
  {
    question:
      "Are you satisfied with your work or school life? Are there any aspects that you find fulfilling or frustrating?",
  },
  {
    question:
      "How would you rate your ability to cope with daily challenges and stressors? Are there any coping strategies that you find helpful or ineffective?",
  },
  {
    question:
      "Are you engaging in any regular physical activity or exercise? If yes, please describe your routine and how it affects your mood and energy levels.",
  },
  {
    question:
      "How would you describe your appetite and eating habits? Are you experiencing any changes in appetite or significant cravings?",
  },
  {
    question:
      "Are you experiencing any difficulties with concentration, memory, or cognitive functioning? If yes, please describe your experiences.",
  },
  {
    question:
      "Have you noticed any changes in your thoughts, feelings, or behaviors that concern you or others? If yes, please provide details.",
  },
  {
    question:
      "How would you describe your social support network? Do you have friends, family members, or other sources of support that you can turn to during difficult times?",
  },
  {
    question:
      "Are you currently experiencing any financial stressors or difficulties managing your finances? If yes, please describe your concerns.",
  },
  {
    question:
      "How would you rate your overall satisfaction with life at the moment? Are there areas where you feel fulfilled or dissatisfied?",
  },
  {
    question:
      "Have you ever sought therapy or counseling before? If yes, please describe your previous experiences and what you found helpful or unhelpful.",
  },
  {
    question:
      "What are your goals for therapy or counseling? Are there specific outcomes or changes that you hope to achieve?",
  },
  {
    question:
      "Do you have any specific fears or phobias that affect your daily life or relationships? If yes, please describe your experiences.",
  },
  {
    question:
      "How do you typically cope with stress or difficult emotions? Are there strategies or activities that you find particularly helpful for managing your mood?",
  },
  {
    question:
      "Are there any significant events from your past that you believe have influenced your current mental health or emotional well-being? If yes, please describe them.",
  },
  {
    question:
      "How would you describe your current level of self-esteem and self-confidence? Are there areas where you feel confident or insecure?",
  },
];

// Function to seed the database with questions
async function seedDatabase() {
  const client = await pool.connect();
  try {
    // Create a table to store the questions if not exists
    await client.query(`
     CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Enable uuid-ossp extension if not enabled
     CREATE TABLE IF NOT EXISTS questions (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       text TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     )
   `);

    // Insert each question into the table with creation timestamp
    for (const question of clientQuestionnaire) {
      const questionId = uuidv4(); // Generate UUID
      await client.query(
        `
      INSERT INTO questions (id, text, created_at, updated_at)
      VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `,
        [questionId, question.question]
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    client.release(); // Release the client back to the pool
  }
}

// Call the seedDatabase function
seedDatabase();
