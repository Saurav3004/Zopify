import { Song } from "../models/song.model.js"

export const getAllsongs = async (req,res,next) => {
    try {
        // -1 = Descending => newest to oldest
        const songs = await Song.find().sort({createdAt: -1})
        return res.status(200).json({
            songs
        })
    } catch (error) {
        next(error)
    }
}


export const getFeaturedSongs = async (req,res,next) => {
    
}