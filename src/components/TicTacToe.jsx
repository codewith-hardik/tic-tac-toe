import React, { useState, useRef } from 'react'
import "./TicTacToe.css"
import circle_icon from "../assets/circle.png" 
import cross_icon from "../assets/cross.png" 

const TicTacToe = () => {
    const [data, setData] = useState(["","","","","","","","",""])
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null)

    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

    const toggle = (e, num) => {
        if(lock || data[num] !== ""){
            return;
        }
        
        const newData = [...data];
        if(count % 2 === 0){
            e.target.innerHTML = `<img src='${cross_icon}' alt='X'>`;
            newData[num] = "x";
            setCount(count + 1);
        } else {
            e.target.innerHTML = `<img src='${circle_icon}' alt='O'>`;
            newData[num] = "o";
            setCount(count + 1);
        }
        setData(newData);
        setTimeout(() => checkWin(newData), 100);
    }

    const checkWin = (currentData) => {
        // Check rows
        if(currentData[0] === currentData[1] && currentData[1] === currentData[2] && currentData[2] !== ""){
            won(currentData[2])
        }else if(currentData[3] === currentData[4] && currentData[4] === currentData[5] && currentData[5] !== ""){
            won(currentData[5])
        }else if(currentData[6] === currentData[7] && currentData[7] === currentData[8] && currentData[8] !== ""){
            won(currentData[8])
        }
        // Check columns
        else if(currentData[0] === currentData[3] && currentData[3] === currentData[6] && currentData[6] !== ""){
            won(currentData[6])
        }else if(currentData[1] === currentData[4] && currentData[4] === currentData[7] && currentData[7] !== ""){
            won(currentData[7])
        }else if(currentData[2] === currentData[5] && currentData[5] === currentData[8] && currentData[8] !== ""){
            won(currentData[8])
        }
        // Check diagonals
        else if(currentData[0] === currentData[4] && currentData[4] === currentData[8] && currentData[8] !== ""){
            won(currentData[8])
        }else if(currentData[2] === currentData[4] && currentData[4] === currentData[6] && currentData[6] !== ""){
            won(currentData[6])
        }
    }

    const won = (winner) => {
        setLock(true)
        if(titleRef.current) {
            if(winner === "x"){
                titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}' alt='X'> Wins!`
            } else {
                titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}' alt='O'> Wins!`
            }
        }
    }

    const reset = () => {
        setLock(false);
        setData(["","","","","","","","",""]);
        setCount(0);
        if(titleRef.current) {
            titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`
        }
        box_array.forEach((box) => {
            if(box.current) {
                box.current.innerHTML = "";
            }
        })
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' ref={box1} onClick={(e) => toggle(e, 0)}></div>
                    <div className='boxes' ref={box2} onClick={(e) => toggle(e, 1)}></div>
                    <div className='boxes' ref={box3} onClick={(e) => toggle(e, 2)}></div>
                </div>

                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e) => toggle(e, 3)}></div>
                    <div className='boxes' ref={box5} onClick={(e) => toggle(e, 4)}></div>
                    <div className='boxes' ref={box6} onClick={(e) => toggle(e, 5)}></div>
                </div>

                <div className='row3'> 
                    <div className='boxes' ref={box7} onClick={(e) => toggle(e, 6)}></div>
                    <div className='boxes' ref={box8} onClick={(e) => toggle(e, 7)}></div>
                    <div className='boxes' ref={box9} onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='btn' onClick={reset}>Reset</button>
            
            <div className='creator-credit'>
                <div className='credit-text'>
                    <span className='created-by'>Created by</span>
                    <span className='creator-name'>Hardik Chavda</span>
                </div>
                <div className='credit-heart'>💻</div>
            </div>
        </div>
    )
}

export default TicTacToe
