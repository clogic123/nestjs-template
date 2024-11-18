import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { AppModule } from "./app/app.module";

export const main = async () => {
    const app = await NestFactory.create(AppModule);
    await app.use(cookieParser(), helmet({ contentSecurityPolicy: true, hidePoweredBy: true })).init();
    await app.listen(3000);
};

void main();
