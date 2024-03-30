import "dotenv/config";
import { parse } from "dotenv";

import App from "@/app";
import AppRoutes from "@/routes/app.routes";
import QuestionsRoutes from "@/routes/questions.routes";
import UsersRoutes from "@/routes/users.routes";
import AnswersRoutes from "@/routes/answers.routes";

parse(".env");
const app = new App([
  new AppRoutes(),
  new AnswersRoutes(),
  new UsersRoutes(),
  new QuestionsRoutes(),
]);

app.listen();
export default app.app;
