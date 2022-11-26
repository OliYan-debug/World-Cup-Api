import { Schema, model } from "mongoose";


const nationSchema = new Schema({
    name: {type: String, required: true},
    flag: {type: String, required: true},
    summary: {type: String, required: true},
    name_formated:{type: String}
});

const Nation = model("Nation", nationSchema);
export default Nation;