import { Request, Response } from "express";
import { TodoSchema } from "../model/TODO"
import { dbClose, dbConnect } from "../connect/connect";
import mongoose from "mongoose";

mongoose.pluralize(null);

export const todoAdd = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const TodoModel = await conn.model("TODO", TodoSchema)
        const todo = new TodoModel(req.body);
        await todo.save();
        await dbClose(conn)
    
        return res.status(200).json({
            message: "추가 성공",
            todo
        })    
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const todoAll = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const TodoModel = await conn.model("TODO", TodoSchema)
        const todoList = await TodoModel.find({});
        
        await dbClose(conn);
        return res.status(200).json({
            message: "수정 성공",
            todoList
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
    
}

export const todoUpdate = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const TodoModel = await conn.model("TODO", TodoSchema)
        const todo = await TodoModel.findByIdAndUpdate(req.params, req.body);
        await dbClose(conn);
    
        return res.status(200).json({
            message: "수정 성공",
            todo
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};

export const todoRemove = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const TodoModel = await conn.model("TODO", TodoSchema)
        const todo = await TodoModel.findByIdAndRemove(req.params);
        await dbClose(conn);
    
        return res.status(200).json({
            message: "삭제 성공",
            todo
        }) 
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}