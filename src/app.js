import express from "express";
import projectRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// middlewares
app.use(express.json());

app.use("/api", projectRoutes);
app.use("/api", tasksRoutes);

export default app;
