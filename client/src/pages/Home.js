import React, {useState, useEffect} from 'react';
import {registerUser} from '../api/index';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Home = () => {
    const [state, setState] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        if(data) {
            registerUser(data)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                setError(err);
            })
        }
    }, [data])

    const buttonHandler = () => {
        setState(state => !state);
    }

    const getData = (userData) => {
        setData(userData);
    }

    const textButton = state ? "SignIn" : "SignUp";

    return (
        <>
        <header>
            <button onClick={buttonHandler}>{textButton}</button>
        </header>

        <main>
            {state ? <SignUp sendData={getData} /> : <SignIn sendData={getData} />}
        </main>
        {error && <div>{error}</div>}
        </>
    );
}

export default Home;
