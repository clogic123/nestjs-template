import * as nest from "@nestjs/common";

import { UsersController } from "@/app/user/users.controller";

@nest.Module({
    controllers: [UsersController],
})
export class UserModule {}
