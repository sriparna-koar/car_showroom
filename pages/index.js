


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Link from 'next/link';
Modal.setAppElement('#__next');
const Home = () => {
  const [addCarName, setAddCarName] = useState('');
  const [addCarLocation, setAddCarLocation] = useState('');
  const [addCarColor, setAddCarColor] = useState('');
  const [addCarYear, setAddCarYear] = useState('');
  const [searchCarName, setSearchCarName] = useState('');
  const [foundCarDetails, setFoundCarDetails] = useState(null);
  const [deleteCarName, setDeleteCarName] = useState('');
  const [deleteCarDirection, setDeleteCarDirection] = useState('');
  const [deleteConfirmationModalIsOpen, setDeleteConfirmationModalIsOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  const openDeleteConfirmationModal = (car) => {
    setCarToDelete(car);
    setDeleteConfirmationModalIsOpen(true);
  };

  const closeDeleteConfirmationModal = () => {
    setCarToDelete(null);
    setDeleteConfirmationModalIsOpen(false);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!addCarName || !addCarLocation || !addCarColor || !addCarYear) {
      toast.error('All fields are required.');
      return;
    }
    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: addCarName, direction: addCarLocation, color: addCarColor, year: addCarYear }),
      });

      if (response.ok) {
        toast.success('Car added successfully');
        setAddCarName('');
        setAddCarLocation('');
        setAddCarColor('');
        setAddCarYear('');
      } else {
        console.error('Failed to add car');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
  const handleDeleteCar = async (name, direction) => {
    try {
      const response = await fetch('/api/deleteCar', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, direction }),
      });
  
      if (response.ok) {
        toast.success('Car deleted successfully');

        window.location.reload();
      } else {
        console.error('Failed to delete car');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      closeDeleteConfirmationModal();
    }
  };
  
 

  const handleDeleteCarSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/deleteCar', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: deleteCarName, direction: deleteCarDirection }),
      });

      if (response.ok) {
        toast.success('Car deleted successfully');
        // Refresh the search results or update the state accordingly.
        setDeleteCarName('');
        setDeleteCarDirection('');
      } else {
        console.error('Failed to delete car');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1>Car App</h1>

      <form onSubmit={handleAddSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={addCarName}
            onChange={(e) => setAddCarName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={addCarLocation}
            onChange={(e) => setAddCarLocation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            value={addCarColor}
            onChange={(e) => setAddCarColor(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="text"
            value={addCarYear}
            onChange={(e) => setAddCarYear(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Car</button>
      </form>

      {/* <h2>Search Car</h2> */}
      {/* <form onSubmit={handleSearchSubmit}>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foundCarDetails.map((car, index) => (
              <tr key={index}>
                <td>{car.name}</td>
                <td>{car.direction}</td>
                <td>{car.color}</td>
                <td>{car.year}</td>
                <td>
                  <button onClick={() => openDeleteConfirmationModal(car)}>
                    Delete Car
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )} */}
      {/* {foundCarDetails && foundCarDetails.length > 0 && (
        <div className="table-container">
          <h3>Found Car Details</h3>
          
          {foundCarDetails.map((car, index) => (
            <div key={index}>
              <p>Name: {car.name}</p>
              <p>Location: {car.direction}</p>
              <p>Color: {car.color}</p>
              <p>Year: {car.year}</p>
              <button onClick={() => openDeleteConfirmationModal(car)}>
                Delete Car
              </button>
            </div>
          ))}
        </div>
      )} */}
   <Link href="/Cars">
        <a className="app-link">View All Cars</a>
      </Link>

      <Link href="/Search">
        <a className="app-link">Search Cars</a>
      </Link>
      <Modal
        isOpen={deleteConfirmationModalIsOpen}
        onRequestClose={closeDeleteConfirmationModal}
        contentLabel="Delete Confirmation Modal"
      >
        <h2>Delete Confirmation</h2>
        {carToDelete && (
          <p>Are you sure you want to delete the car: {carToDelete.name}?</p>
        )}
        <button onClick={() => handleDeleteCar(carToDelete.name, carToDelete.direction)}>
          Yes, Delete
        </button>
        <button onClick={closeDeleteConfirmationModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default Home;
