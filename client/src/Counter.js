import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction } from './actions/actionCreator';

const Counter = (props) => {
    // const increment = () => {
    //     props.dispatch(createActionIncrement());
    // }

    // const decrement = () => {
    //     props.dispatch(createActionDecrement());
    // }
    console.log(props);
    return (
        <>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    );
}

/*
connect - це функція, яка приймає два аргументи (обидва опціональні) і підписує комопненту на оновлення стейту
- mapStateToProps - функція, яка приймає ВЕСЬ стейт і повертає тільки ту частину, яка потрібна ЦІЙ компоненті
- mapDispatchToProps - функція, яка повертає об'єкт, наповнений огорнутими діспатчем actionCreator-ами.

*/

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//        increment: () => dispatch(createActionIncrement()),
//        decrement: () => dispatch(createActionDecrement())
//    }
//}

const mapDispatchToProps = {
    increment: incrementAction,
    decrement: decrementAction
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
// f(a, b, c) -> f(a)(b)(c)

export default WrappedCounter;
