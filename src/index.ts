import { env } from "@/common/utils/envConfig";
import { app, logger } from "@/server";
import { sequelize } from "./database/client";
import Orders from "./database/models/Orders";
import Products from "./database/models/Products";

const server = app.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});

(async () => {
  await sequelize.sync({ alter: true });
})();

const onCloseSignal = () => {
  logger.info("sigint received, shutting down");
  server.close(() => {
    logger.info("server closed");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
};

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
