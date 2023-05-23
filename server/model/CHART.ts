import mongoose from "mongoose";

mongoose.pluralize(null);

export const ChartSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true,
        default: new Date()
    },
    value1: {
        type: Number,
        require: true
    },
    value2: {
        type: Number,
        require: true
    }
});

export default mongoose.model("CHART", ChartSchema);