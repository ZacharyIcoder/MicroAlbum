import { Controller } from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud";
import {InjectModel} from "nestjs-typegoose";
import {User} from "@libs/db/models/user.model";
import {ApiTags} from "@nestjs/swagger";
import {ReturnModelType} from "@typegoose/typegoose";


@Crud({
    model:User,
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(
        @InjectModel(User) private readonly model:ReturnModelType<typeof User>
    ) {
    }
}
