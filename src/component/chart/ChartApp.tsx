import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import MultiChart from "./MultiChart";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { dataSelectLineAsync, dataSelectMultiAsync, selectLineData, selectMultiData } from "../../slice/chartSlice";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCalendar } from "react-icons/ai"

const ChartWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
`
const DateContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;

`
const DataBox = styled.div`
    display: flex;
    
    border-radius: 12px;
    border: white;
    background: white;
    
    align-items: center;
    jusitfy-content: center;
    padding: 10px;
    color: gray;
`
const DatePickerStyle = styled(DatePicker)`
    padding-left: 10px;
    margin: 0 auto;
    background-color: transparent;
    color: #707070;
    font-size: 16px;
    // font-weight: bold;
    border: white;
    cursor: pointer;
`
const ShowButton = styled.button`
    padding: 10px 20px;
    margin-left: 20px;
    border-radius: 10px;
    border: none;
    background: rgb(112, 76, 182, 0.1);
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    &: hover {
        color: white;
        background: rgb(112, 76, 182);
    }
`

const ChartApp = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(dataSelectLineAsync({startDate: new Date(new Date().setMonth(new Date().getMonth() -1)), endDate: new Date()}));
        dispatch(dataSelectMultiAsync({startDate: new Date(new Date().setMonth(new Date().getMonth() -1)), endDate: new Date()}))
    }, [dispatch])

    const chartLineData = useAppSelector(selectLineData);
    const chartMultiData = useAppSelector(selectMultiData);


    const [startDate, setStartDate] = useState(new Date(new Date().setMonth(new Date().getMonth() -1)));
    const [endDate, setEndDate] = useState(new Date());

    const showChart = () => {
        dispatch(dataSelectLineAsync({startDate: startDate, endDate: endDate}));
        dispatch(dataSelectMultiAsync({startDate: startDate, endDate: endDate}));
    };

    return (
        <ChartWrapper>
            <DateContainer>
                <DataBox>
                    <AiFillCalendar />
                    <DatePickerStyle dateFormat={"yyyy-MM-dd"}  selected={startDate} maxDate={endDate} onChange={(date: Date) => setStartDate(date)} />
                </DataBox>
                <div> &nbsp; ~ &nbsp; </div>
                <DataBox>
                    <AiFillCalendar />
                    <DatePickerStyle dateFormat={"yyyy-MM-dd"}  selected={endDate} minDate={startDate} onChange={(date: Date) => setEndDate(date)} />
                </DataBox>
            <ShowButton onClick={() => showChart()}>조회</ShowButton>
            </DateContainer>

            <LineChart chartData={chartLineData} />
            <MultiChart chartData={chartMultiData} />
        </ChartWrapper>
    )
}

export default ChartApp;