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


export const getSticky = async (req,res) => {
    try {
        //Query Param
        const {search, sort, page=1, limit=10} = req.query;
        
        //Base query
        let query = {};

        //Search by title
        if(search){
            query.title = {$regex: search, $options: "i"} //i for case insensitive
        }

        //Sorting
        let sortOption = {};
        if(sort === "asc") sortOption.createdAt = 1; //1 for ascending order
        else sortOption.createdAt = -1; //-1 for descending order (default order)

        //Pagination
        const skip = (page-1) * limit;
        const stickies = 
        await sticky.find(query)
        .sort(sortOption)
        .skip(skip)
        .limit(parseInt(limit));

        const totalStickies = await sticky.countDocuments(query);

        return res.status(200).json({
            success: true,
            message: "Stickies fetched successfully",
            total: totalStickies,
            page: Number(page),
            limit: Number(limit),
            data: stickies
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
};