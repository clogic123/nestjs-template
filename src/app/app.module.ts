import * as nest from "@nestjs/common";

import { UserModule } from "./user/user.module";

@nest.Module({
    imports: [UserModule],
})
export class AppModule {}
