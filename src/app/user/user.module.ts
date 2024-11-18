import * as nest from "@nestjs/common";

import { UsersController } from "@/app/user/users.controller";

import { UserService } from "./users.usecase";

@nest.Module({
    providers: [UserService],
    controllers: [UsersController],
})
export class UserModule {}
