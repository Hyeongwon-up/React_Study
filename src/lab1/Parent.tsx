import React, {Component, FC, useEffect, useState} from "react";
import Child from "./Child";


const black: any = {
    float: 'center',
    border: '1px solid black',
    height: 'auto',
    width: '50%',
    padding : '10px',
    textAlign: 'center',
}

const red: any = {
    border: '1px solid red',
    height: '50%',
    width: 'auto',
    padding : '10px',
    textAlign: 'center',
}

const Parent: FC = () => {
    const [level, setLevel] = useState(1);
    const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [check, setCheck] = useState<boolean[]>([false, false, false, false, false, false, false, false, false]);
    const [checkList, setCheckList]= useState([
        {stage: 1, state: '미완료', active : false},
        {stage: 2, state: '미완료', active : false},
        {stage: 3, state: '미완료', active : false},
        {stage: 4, state: '미완료', active : false},
        {stage: 5, state: '미완료', active : false},
        {stage: 6, state: '미완료', active : false},
        {stage: 7, state: '미완료', active : false},
        {stage: 8, state: '미완료', active : false},
        {stage: 9, state: '미완료', active : false},
    ]);



    const onClickUpButton = (temp: number) => {
        let count = temp;
        if(level + temp > 9) {
            count = 1;
        }
        else {
            count = level + temp;
        }
        setLevel(count)
        if(check[count] == true) {
            alert(count+'단은 이미 학습했어!')
        }
    }

    const onClickDownButton = (temp: number) => {
        let count = temp;
        if(level - temp < 1) {
            count = 1;
        }
        else {
            count = level - temp;
        }
        setLevel(count)
        if(check[count] == true) {
            alert( count + '단은 이미 학습했어!')
        }
    }

    const completeButton = (level: number) => {
        const newCheck = [];
        for(let i =0; i<9; i++) {
            newCheck.push(check[i]);
        }
        console.log('check');
        newCheck[level]= true;
        console.log(newCheck[level]);
        setCheck(newCheck);
    }

    return(
        <>
            <div style = {black}>
                <h3 style = {red}> 구구단-{level}</h3>
                <div style = {black}>
                    <Child level = {level} nums = {nums}/>
                    <button onClick = {() => completeButton(level)}>학습완료</button>
                </div>
                <button onClick = {() => onClickUpButton(1)}>업</button>
                <button onClick = {() => onClickDownButton(1)}>다운</button>
            </div>
        </>
    );
}



export default Parent;