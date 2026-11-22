import sticky from "../models/sticky.model.js";

//Create Sticky Note
export const creatSticky = async (req,res) => {
    try {
        const {title,description} = req.body;

        if(!title || title.trim() ===""){
             return res.status(400).json({
                success: false,
                message: "Title is required"
             });
        }

        const stickyNote = await sticky.create({
            title, description
        });

        return res.status(200).json({
            success: true,
            message: "Sticky note created successfully",
            stickyNote
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
};