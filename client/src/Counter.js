import React, {useReducer} from 'react';
import {connect} from 'react-redux';



const Counter = (props) => {
    const increment = () => {
        const action = {
            type: 'COUNTER_PLUS'
        }
        props.dispatch(action);
    }

    const decrement = () => {
        const action = {
            type: 'COUNTER_MINUS'
        }
        props.dispatch(action);
    }
    console.log(props);
    return (
        <>
            <h1>{props.counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

/*
connect - це функція, яка приймає два аргументи (обидва опціональні) і підписує комопненту на оновлення стейту
- mapStateToProps - функція, яка приймає ВЕСЬ стейт і повертає тільки ту частину, яка потрібна ЦІЙ компоненті
- mapDispatchToProps

*/

const mapStateToProps = (state) => {
    return state
}

const WrappedCounter = connect(mapStateToProps)(Counter);
// f(a, b, c) -> f(a)(b)(c)

export default WrappedCounter;
