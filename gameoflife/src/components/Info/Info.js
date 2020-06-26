import React from 'react'

export default function Info() {
    return (
        <>
        <h3>Rules of the Game</h3>
        <p> Any cell with fewer than two live neighbors dies (as if by isolation)
Any cell with two or three living neighbors survives to the next generation
Any cell with four or more neighbors dies (as if by over population) </p>
        </>
    )
}