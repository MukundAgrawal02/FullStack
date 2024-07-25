// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAnimalsQuery } from './redux/Slices/apiSlice';
import { setAnimals, setError } from './redux/Slices/animalsSlice';
import './App.css';
import img from "../src/assets/img2.avif";
import errorimg from "./assets/error.png"
import Navbar from './components/Navbar';

function App() {
  //using useDispatch to dispatch actions to the Redux store.
  const dispatch = useDispatch();
  //getting data from store
  const animals = useSelector((state) => state.animals.list);
  const error = useSelector((state) => state.animals.error);

  //api calling
  const { data, error: apiError } = useGetAnimalsQuery();

  //useEffect to fetch data when component mounts or when data or error state changes
  useEffect(() => {
    if (apiError) {
      dispatch(setError(true));
    } else if (data) {
      dispatch(setAnimals(data));
    }
  }, [data, apiError, dispatch]);

  const getImageUrl = (animalName) => {
    switch (animalName) {
      // case 'Lion':
      //   return 'lion';
      // case 'Elephant':
      //   return 'elephant';
      // case 'Tiger':
      //   return 'tiger';
      // case 'Giraffe':
      //   return 'giraffe';
      default:
        return img;
    }
  };

  return (
    <React.Fragment>
      <Navbar /> 
      {/* Displaying loading state */}
      <h1 className="text-5xl text-center py-10">Animals List</h1>
      {/* Displaying animals data */}
      <div className="h-screen flex flex-wrap justify-center items-center">
        {error ? (
          <div>
            <div className="text-center size-full">
              <img className='size-96' src={errorimg} alt="Error loading animals" />
              <p>Error loading animals. Please try again later.</p>
            </div>
          </div>
        ) : (
          animals.map((animal) => (
            <div key={animal.name} className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-6">
              <img className="w-full h-48 object-cover" src={getImageUrl(animal.name)} alt={animal.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{animal.name}</div>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Type:</span> {animal.type}
                </p>
                <p className="text-gray-700 text-base">
                  <span className="font-semibold">Habitat:</span> {animal.habitat}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
