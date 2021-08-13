import {ModelOptions, prop, Ref} from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
import {Episode} from "@libs/db/models/episode.model";

@ModelOptions({
    schemaOptions:{
        timestamps:true,
    }
})
export class Course {

    @ApiProperty({description:'课程名称',example:'语文'})
    @prop()
    public name!:string

    @ApiProperty({description:'课程封面图',example:'封面url'})
    @prop()
    public cover?:string

    @prop({ref: () => Episode})
    public episodes?:Ref<Episode>[]
}