import React, { useState, ChangeEvent } from "react";
import { useAppSelector } from "../../app/hook";
import { decrease, increase, increaseByAmount, selectCount } from "../../slice/counterSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux"
const CounterTemplate = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const CounterBlock = styled.div`
    display: flex;
    margin: 0 auto ;
    margin-top: 20px;
    align-items: center;
    justify-content: center
`
const TextBox = styled.div`
    font-size: 40px;
    font-weight: bold; 
    // text-align: center;
    // align-items: center;
    // justify-content: center
`
const Button = styled.button`
    margin: 30px;
    padding: 10px 20px;
    font-size: 30px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    border: none;
    &: hover {
        background-color: rgb(112, 76, 182);
    }

`
const Input = styled.input`
margin-left: 30px;
    font-size: 20px;
    padding: 15px;
    border: none;
    width: 20%
`

const CounterApp = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useDispatch();

    const [number, setNumber] = useState(2)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(parseInt(e.target.value));
    }
    return (
        <CounterTemplate>
            <CounterBlock>
                <Button onClick={() => dispatch(increase())}>+</Button>
                <TextBox>{count}</TextBox>
                <Button onClick={() => dispatch(decrease())}>-</Button>
            </CounterBlock>
            <CounterBlock>
                <Input type="number" value={number} onChange={onChange} />
                <Button onClick={() => dispatch(increaseByAmount(number))}>+</Button>
            </CounterBlock>

        </CounterTemplate>
    )
}

export default CounterApp;