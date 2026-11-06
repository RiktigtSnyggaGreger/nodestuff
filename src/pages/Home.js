import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
          <Link to="/contact">Go to Contact</Link>
          <Link to="/todolist">Go to ToDoList</Link>
    </div>
  );
}

export default Home;