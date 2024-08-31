// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAnimalsQuery } from './redux/Slices/apiSlice';
import { setAnimals, setError } from './redux/Slices/animalsSlice';
import './App.css';
import errorimg from "./assets/error.png"
import Navbar from './components/Navbar';
import Card from './components/Cards';

function App() {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals.list);
  const error = useSelector((state) => state.animals.error);
  const { data, error: apiError } = useGetAnimalsQuery();

  useEffect(() => {
    if (apiError) {
      dispatch(setError(true));
    } else if (data) {
      dispatch(setAnimals(data));
    }
  }, [data, apiError, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <h1 className="text-5xl text-center py-4">Animals List</h1>
      <div className="h-screen flex flex-wrap justify-center items-center">
        {error || apiError ? (
          <div className="text-center size-full ">
            <img className='size-96 m-auto' src={errorimg} alt="Error loading animals" />
            <p>Error loading animals. Please try again later.</p>
          </div>
        ) : (
          animals.map((animal) => <Card key={animal.id} animal={animal} />)
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
