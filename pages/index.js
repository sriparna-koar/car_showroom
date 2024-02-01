// import { useState } from 'react';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction }),
//       });

//       if (response.ok) {
//         console.log('Car added successfully');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Car App</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// };

// export default Home;


// import { useState } from 'react';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');
//   const [color, setColor] = useState(''); // Added color state
//   const [year, setYear] = useState(''); // Added year state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction, color, year }), // Include color and year
//       });

//       if (response.ok) {
//         console.log('Car added successfully');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Car App</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// };

// export default Home;


// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');
//   const [color, setColor] = useState(''); // Added color state
//   const [year, setYear] = useState(''); // Added year state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction, color, year }), // Include color and year
//       });

//       if (response.ok) {
//         toast.success('Car added successfully'); // Show success notification
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// };

// export default Home;


// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');
//   const [color, setColor] = useState(''); // Added color state
//   const [year, setYear] = useState(''); // Added year state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction, color, year }), // Include color and year
//       });

//       if (response.ok) {
//         toast.success('Car added successfully'); // Show success notification

//         // Clear form fields after successful submission
//         setName('');
//         setDirection('');
//         setColor('');
//         setYear('');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// };

// export default Home;

// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');
//   const [color, setColor] = useState('');
//   const [year, setYear] = useState('');

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction, color, year }),
//       });

//       if (response.ok) {
//         toast.success('Car added successfully');
//         // Clear form fields after successful submission
//         setName('');
//         setDirection('');
//         setColor('');
//         setYear('');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/getCars?name=' + encodeURIComponent(name));

//       if (response.ok) {
//         const cars = await response.json();

//         if (cars.length > 0) {
//           toast.success('Car details found!');
//           // Handle the car details as needed (display, update state, etc.)
//           console.log('Car details:', cars);
//         } else {
//           toast.error('No car found with the provided name.');
//         }
//       } else {
//         console.error('Failed to fetch car details');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>
//       <form onSubmit={handleAddSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>
//       <h2>Search Car</h2>
//       <form onSubmit={handleSearchSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         {/* ... (other input fields for searching) */}
//         <button type="submit">Search Car</button>
//       </form>
//     </div>
//   );
// };

// export default Home;





// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [name, setName] = useState('');
//   const [direction, setDirection] = useState('');
//   const [color, setColor] = useState('');
//   const [year, setYear] = useState('');
//   const [foundCarDetails, setFoundCarDetails] = useState(null);

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction, color, year }),
//       });

//       if (response.ok) {
//         toast.success('Car added successfully');
//         // Clear form fields after successful submission
//         setName('');
//         setDirection('');
//         setColor('');
//         setYear('');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/getCars?name=' + encodeURIComponent(name));

//       if (response.ok) {
//         const cars = await response.json();

//         if (cars.length > 0) {
//           toast.success('Car details found!');
//           // Set the found car details
//           setFoundCarDetails({
//             name: cars[0].name,
//             direction: cars[0].direction,
//           });
//         } else {
//           toast.error('No car found with the provided name.');
//           // Reset found car details when not found
//           setFoundCarDetails(null);
//         }
//       } else {
//         console.error('Failed to fetch car details');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>

//       <form onSubmit={handleAddSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input
//             type="text"
//             value={direction}
//             onChange={(e) => setDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>

//       <h2>Search Car</h2>
//       <form onSubmit={handleSearchSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         {/* ... (other input fields for searching) */}
//         <button type="submit">Search Car</button>
//       </form>

//       {foundCarDetails && (
//         <div>
//           <h3>Found Car Details</h3>
//           <p>Name: {foundCarDetails.name}</p>
//           <p>Location: {foundCarDetails.direction}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [addCarName, setAddCarName] = useState('');
//   const [addCarLocation, setAddCarLocation] = useState('');
//   const [addCarColor, setAddCarColor] = useState('');
//   const [addCarYear, setAddCarYear] = useState('');
//   const [searchCarName, setSearchCarName] = useState('');
//   const [foundCarDetails, setFoundCarDetails] = useState(null);

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: addCarName, direction: addCarLocation, color: addCarColor, year: addCarYear }),
//       });

//       if (response.ok) {
//         toast.success('Car added successfully');
//         setAddCarName('');
//         setAddCarLocation('');
//         setAddCarColor('');
//         setAddCarYear('');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/getCars?name=' + encodeURIComponent(searchCarName));

//       if (response.ok) {
//         const cars = await response.json();

//         if (cars.length > 0) {
//           toast.success('Car details found!');

//           setFoundCarDetails(cars);
//         } else {
//           toast.error('No car found with the provided name.');
//           setFoundCarDetails([]);
//         }
//       } else {
//         console.error('Failed to fetch car details');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>

//       <form onSubmit={handleAddSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={addCarName}
//             onChange={(e) => setAddCarName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input
//             type="text"
//             value={addCarLocation}
//             onChange={(e) => setAddCarLocation(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={addCarColor}
//             onChange={(e) => setAddCarColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={addCarYear}
//             onChange={(e) => setAddCarYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>

//       <h2>Search Car</h2>
//       <form onSubmit={handleSearchSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={searchCarName}
//             onChange={(e) => setSearchCarName(e.target.value)}
//           />
//         </label>
//         <br />

//         <button type="submit">Search Car</button>
//       </form>

// {foundCarDetails && foundCarDetails.length > 0 && (
//   <div>
//     <h3>Found Car Details</h3>
//     {foundCarDetails.map((car, index) => (
//       <div key={index}>
//         <p>Name: {car.name}</p>
//         <p>Location: {car.direction}</p>
//         <p>Color: {car.color}</p>
//         <p>Year: {car.year}</p>
//       </div>
//     ))}
//   </div>
// )}

//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Home = () => {
//   const [addCarName, setAddCarName] = useState('');
//   const [addCarLocation, setAddCarLocation] = useState('');
//   const [addCarColor, setAddCarColor] = useState('');
//   const [addCarYear, setAddCarYear] = useState('');
//   const [searchCarName, setSearchCarName] = useState('');
//   const [foundCarDetails, setFoundCarDetails] = useState(null);
//   const [deleteCarName, setDeleteCarName] = useState('');
//   const [deleteCarDirection, setDeleteCarDirection] = useState('');

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/cars', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: addCarName, direction: addCarLocation, color: addCarColor, year: addCarYear }),
//       });

//       if (response.ok) {
//         toast.success('Car added successfully');
//         setAddCarName('');
//         setAddCarLocation('');
//         setAddCarColor('');
//         setAddCarYear('');
//       } else {
//         console.error('Failed to add car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/getCars?name=' + encodeURIComponent(searchCarName));

//       if (response.ok) {
//         const cars = await response.json();

//         if (cars.length > 0) {
//           toast.success('Car details found!');
//           setFoundCarDetails(cars);
//         } else {
//           toast.error('No car found with the provided name.');
//           setFoundCarDetails([]);
//         }
//       } else {
//         console.error('Failed to fetch car details');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDeleteCar = async (name, direction) => {
//     try {
//       const response = await fetch('/api/deleteCar', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction }),
//       });

//       if (response.ok) {
//         toast.success('Car deleted successfully');
//         // Refresh the search results or update the state accordingly.
//       } else {
//         console.error('Failed to delete car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDeleteCarSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/deleteCar', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: deleteCarName, direction: deleteCarDirection }),
//       });

//       if (response.ok) {
//         toast.success('Car deleted successfully');
//         // Refresh the search results or update the state accordingly.
//         setDeleteCarName('');
//         setDeleteCarDirection('');
//       } else {
//         console.error('Failed to delete car');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <h1>Car App</h1>

//       <form onSubmit={handleAddSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={addCarName}
//             onChange={(e) => setAddCarName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input
//             type="text"
//             value={addCarLocation}
//             onChange={(e) => setAddCarLocation(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Color:
//           <input
//             type="text"
//             value={addCarColor}
//             onChange={(e) => setAddCarColor(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Year:
//           <input
//             type="text"
//             value={addCarYear}
//             onChange={(e) => setAddCarYear(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Add Car</button>
//       </form>

//       <h2>Search Car</h2>
//       <form onSubmit={handleSearchSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={searchCarName}
//             onChange={(e) => setSearchCarName(e.target.value)}
//           />
//         </label>
//         <br />

//         <button type="submit">Search Car</button>
//       </form>

//       {foundCarDetails && foundCarDetails.length > 0 && (
//         <div>
//           <h3>Found Car Details</h3>
//           {foundCarDetails.map((car, index) => (
//             <div key={index}>
//               <p>Name: {car.name}</p>
//               <p>Location: {car.direction}</p>
//               <p>Color: {car.color}</p>
//               <p>Year: {car.year}</p>
//               <button onClick={() => handleDeleteCar(car.name, car.direction)}>
//                 Delete Car
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* <h2>Delete Car</h2>
//       <form onSubmit={handleDeleteCarSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={deleteCarName}
//             onChange={(e) => setDeleteCarName(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Direction:
//           <input
//             type="text"
//             value={deleteCarDirection}
//             onChange={(e) => setDeleteCarDirection(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Delete Car</button>
//       </form> */}
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
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
        // Refresh the search results or update the state accordingly.
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
  
  // const handleDeleteCar = async (name, direction) => {
  //   try {
  //     const response = await fetch('/api/deleteCar', {
  //       method: 'DELETE',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ name, direction }),
  //     });

  //     if (response.ok) {
  //       toast.success('Car deleted successfully');
  //       // Refresh the search results or update the state accordingly.
  //     } else {
  //       console.error('Failed to delete car');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   } finally {
  //     closeDeleteConfirmationModal();
  //   }
  // };

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
        <div>
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
      )}

      {/* Delete Confirmation Modal */}
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
