import core from "@nestia/core";
import * as nest from "@nestjs/common";

import { UserProfileDTO } from "@/app/user/user.dto";

import { UserService } from "./users.usecase";

@nest.Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) {}
    /**
     * 사용자 정보를 불러옵니다.
     *
     * @summary 사용자 정보 보기
     * @tag User
     * @param user_id user id
     * @return 사용자 정보
     */
    @core.TypedException<"USER_NOT_FOUND">({ status: nest.HttpStatus.NOT_FOUND })
    @core.TypedRoute.Get(":user_id")
    async profile(@core.TypedParam("user_id") user_id: string): Promise<UserProfileDTO> {
        return this.userService.get({ user_id });
    }
}
