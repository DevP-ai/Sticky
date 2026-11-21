import mongoose  from "mongoose";

const stickySchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    discription: {
        type: String,
        default: ""
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
}
);

export default mongoose.model("Sticky", stickySchema);