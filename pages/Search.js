// Search.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
const Search = () => {
  const [searchCarName, setSearchCarName] = useState('');
  const [foundCarDetails, setFoundCarDetails] = useState(null);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/getCars?name=' + encodeURIComponent(searchCarName));

      if (response.ok) {
        const cars = await response.json();

        if (cars.length > 0) {
          toast.success('Car details found!');
          setFoundCarDetails(cars);
        } else {
          toast.error('No car found with the provided name.');
          setFoundCarDetails([]);
        }
      } else {
        console.error('Failed to fetch car details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2>Search Car</h2>
      <form onSubmit={handleSearchSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={searchCarName}
            onChange={(e) => setSearchCarName(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Search Car</button>
      </form>

      {foundCarDetails && foundCarDetails.length > 0 && (
        <div className="table-container">
          <h3>Found Car Details</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Color</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {foundCarDetails.map((car, index) => (
                <tr key={index}>
                  <td>{car.name}</td>
                  <td>{car.direction}</td>
                  <td>{car.color}</td>
                  <td>{car.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
       <Link href="/">
          <a>Go Back to Home</a>
      </Link>
    </div>
  );
};

export default Search;
