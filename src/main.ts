import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { AppModule } from "./app/app.module";
import { config } from "./infrastructure/config";

export const main = async () => {
    const app = await NestFactory.create(AppModule);
    await app.use(cookieParser(), helmet({ contentSecurityPolicy: true, hidePoweredBy: true })).init();
    await app.listen(config.get("PORT"));
};

void main();
