import dotenv from "dotenv";
import typia from "typia";

export class Config {
    private readonly _config: IConfig;
    constructor() {
        switch (process.env["NODE_ENV"]) {
            case "development":
                dotenv.config({ path: ".env", override: true });
                break;
            case "test":
                dotenv.config({ path: ".env.test", override: true });
                break;
            case "production":
                break;
            default:
                throw Error("NODE_ENV should be one of (development|production|test)");
        }
        this._config =
            process.env["NODE_ENV"] === "test" ?
                ({ ...process.env } as unknown as IConfig)
            :   typia.assert<IConfig>({ PORT: 4000, ...process.env } satisfies Partial<IConfig>);
    }

    get<T extends keyof IConfig>(key: T): IConfig[T] {
        return this._config[key];
    }
}

interface IConfig {
    NODE_ENV: "development" | "production" | "test";
    /** @default 4000 */
    PORT: number;
    DATABASE_URL: string;
}

export const config = new Config();
