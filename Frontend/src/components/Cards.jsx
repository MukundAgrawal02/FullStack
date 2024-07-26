// src/components/Card.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAnimals } from '../redux/Slices/animalsSlice';
import img from "../assets/img2.avif";

const Card = ({ animal }) => {
  const dispatch = useDispatch();

  const getImageUrl = (animalName) => {
    switch (animalName) {
      // Add cases for specific animals if needed
      default:
        return img;
    }
  };

  const handleDelete = () => {
    dispatch(deleteAnimals(animal.name));
  };

  return (
    <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white m-6">
      <img className="w-full h-48 object-cover" src={getImageUrl(animal.name)} alt={animal.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{animal.name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Type:</span> {animal.type}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Habitat:</span> {animal.habitat}
        </p>
        <button
          onClick={handleDelete}
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
