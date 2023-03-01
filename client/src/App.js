import React, {useReducer} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';

const reducer = (state, action) => {
  return state;
}

function App() {

  const [state, dispatch] = useReducer({
    user: null,
    tasks: []
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* localhost:3000/ -> Home component */}
        <Route path="/tasks/" element={<TodoPage />}/>
        {/* localhost:3000/tasks/ -> TodoPage component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
