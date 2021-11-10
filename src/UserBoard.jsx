import React from 'react';
import { fire } from './actions';
import Square from './Square';
import { useSelector, useDispatch } from 'react-redux';

export default function UserBoard(props) {
    const mode = props.mode;
    const dispatch = useDispatch();
	const gameState = useSelector((state) => state.gameState);
	const boardState = gameState.board1;
	const boardComp = [];
	for (let i = 0; i < boardState.length; i++) {
		let row = boardState[i];
		for (let j = 0; j < row.length; j++) {
			boardComp.push(
				<div onClick={() => dispatch(fire(mode, i, j))}>
					<Square num={boardState[i][j]} mode ="user"> </Square>
				</div>
			);
		}
	}
    return (
        <div class = "container">
            {boardComp}
        </div>
    )
}
