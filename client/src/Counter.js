import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction, changeStepAction, toggleThemeAction } from './actions/actionCreator';

const Counter = (props) => {
    // const increment = () => {
    //     props.dispatch(createActionIncrement());
    // }

    // const decrement = () => {
    //     props.dispatch(createActionDecrement());
    // }
    console.log(props);

    const onChangeStep = ({target: {value}}) => {
        props.changeStep(Number(value));
    }

    const toggleTheme = () => {
        props.toggleTheme();
    }

    return (
        <>
            <div style={{backgroundColor: props.themes.isDarkMode ? 'gray' : 'white'}}>
                <h1>{props.counter.counter}</h1>
                <input type="number" name="step" onChange={onChangeStep} value={props.counter.step} />
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
                <button onClick={toggleTheme}>{props.themes.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</button>
            </div>
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
//        increment: () => dispatch(incrementAction()),
//        decrement: () => dispatch(decrementAction()),
//        changeStep: (value) => dispatch(changeStepAction(value)),
//        toggleTheme: () => dispatch(toggleThemeAction())
//    }
//}

const mapDispatchToProps = {
    increment: incrementAction,
    decrement: decrementAction,
    changeStep: changeStepAction,
    toggleTheme: toggleThemeAction
}

const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
// f(a, b, c) -> f(a)(b)(c)

export default WrappedCounter;
