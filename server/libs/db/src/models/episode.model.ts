import {modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode {
    @prop()
    public  name:string

    @prop()
    public  file:string
}