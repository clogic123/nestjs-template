import core from "@nestia/core";
import * as nest from "@nestjs/common";
import typia from "typia";

import { UserProfileDTO } from "@/app/user/user.dto";

@nest.Controller("users")
export class UsersController {
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
        user_id;
        return typia.random<UserProfileDTO>();
    }
}
