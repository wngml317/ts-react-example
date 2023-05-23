import { Request, Response } from "express";
import { ChartSchema } from "../model/CHART";
import { dbClose, dbConnect } from "../connect/connect";
import mongoose from "mongoose";


mongoose.pluralize(null);
export const dataAdd = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const chartModel = await conn.model("CHART", ChartSchema)
        const data = new chartModel(req.body);
        await data.save();
        await dbClose(conn);
        return res.status(200).json({
            message: "저장 성공",
            data
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};

export const dataSelectLine = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const chartModel = await conn.model("CHART", ChartSchema)
        const { startDate, endDate } = req.query;
        const data = await chartModel.aggregate([
            {
                $project: {
                    date: {$dateToString: {format: "%Y-%m-%d", date: "$date"}},
                    value1: 1,
                    value2: 1
                },  
            },
            {
                $match: {
                    date: {$gte: startDate, $lte: endDate}
                }
            },
            {
                $sort: { date: 1 }
            }
        ]);
        const labels: string[] = [];
        const value1: number[] = [];
        const value2: number[] = [];
        
        for (let i of data) {
            labels.push(i.date);
            value1.push(i.value1);
            value2.push(i.value2);
        }
        await dbClose(conn);
        return res.status(200).json({
            message: "조회 성공",
            labels: labels,
            datasets: [
                { label: "value1", data: value1 },
                { label: "value2", data: value2 }
            ]
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};

export const dataSelectMulti = async (req: Request, res: Response) => {
    try {
        const conn = await dbConnect();
        const chartModel = await conn.model("CHART", ChartSchema)
        const { startDate, endDate } = req.query;
        const data = await chartModel.aggregate([
            {
                $project: {
                    date: {$dateToString: {format: "%Y-%m-%d", date: "$date"}},
                    value1: 1,
                    value2: 1
                },  
            },
            {
                $match: {
                    date: {$gte: startDate, $lte: endDate}
                }
            },
            {
                $sort: { date: 1 }
            }
        ]);
        const labels: string[] = [];
        const value1: number[] = [];
        const value2: number[] = [];
        
        for (let i of data) {
            labels.push(i.date);
            value1.push(i.value1);
            value2.push(i.value2);
        }
        
        await dbClose(conn);
        return res.status(200).json({
            message: "조회 성공",
            labels: labels,
            datasets: [
                { type: "line", label: "value1", data: value1 },
                { type: "bar", label: "value2", data: value2 }
            ]
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
};