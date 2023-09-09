import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from "react-icons/fc";
import {AiFillMinusCircle} from  "react-icons/ai"
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><AiFillMinusCircle size='1.5em' onClick={handleDeleteExpense} color='Red'></AiFillMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;