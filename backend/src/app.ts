import express from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import morgan from "morgan";

import DB from "@databases";
import Routes from "@interfaces/routes.interface";
import errorMiddleware from "@middlewares/error.middleware";

class App {
  private port: string | number;
  private env: string;
  private appUrl: string;
  public app: express.Application;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.env = process.env.NODE_ENV || "development";
    this.appUrl =
      this.env === "development"
        ? `http://localhost:${this.port}`
        : `/${this.port}`;
    this.connectToDatabase();
    this.initializeSwagger();
    this.initializeMiddlewares();
    this.initializeErrorHandling();
    this.initializeRoutes(routes);
  }

  private connectToDatabase() {
    DB.sequelize.sync({ force: false });
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeSwagger() {
    const swaggerOptions = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Limbic Ai",
          version: "1.0.0",
          description: "API documentation for Limbic Ai",
        },
        servers: [
          {
            url: this.appUrl,
          },
        ],
      },
      apis: [`${__dirname}/routes/*.ts`],
    };
    const swaggerDocs = swaggerJSDoc(swaggerOptions);
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  public getServer() {
    return this.app;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`=====================================================`);
      console.info(`================ ENV: ${this.env} ===================`);
      console.info(`🚀 App listening on  ${this.appUrl}/docs`);
      console.info(`=====================================================`);
    });
  }
}

export default App;
