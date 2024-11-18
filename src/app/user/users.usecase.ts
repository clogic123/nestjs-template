import { Injectable } from "@nestjs/common";
import typia from "typia";

import { UserProfileDTO } from "./user.dto";

@Injectable()
export class UserService {
    public get = async (input: { user_id: string }): Promise<UserProfileDTO> => {
        return { ...typia.random<UserProfileDTO>(), id: input.user_id };
    };
}
