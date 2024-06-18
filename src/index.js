import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Project.js";

async function main() {
  try {
    console.log('Attempting database synchronization');
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");

    app.listen(3000);
    console.log("===================================");
    console.log("Server is running on port 3000");
    console.log("===================================");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();