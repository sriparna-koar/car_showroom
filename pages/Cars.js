
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// const Cars = () => {
//   const [allCars, setAllCars] = useState([]);

//   useEffect(() => {
//     // Fetch all cars data
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('/api/getAllCars');
//         if (response.ok) {
//           const cars = await response.json();
//           setAllCars(cars);
//         } else {
//           console.error('Failed to fetch all cars');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchCars();
//   }, []);

//   return (
//     <div>
//       <h1>All Cars</h1>
//       {allCars.map((car, index) => (
//         <div key={index}>
//           <p>Name: {car.name}</p>
//           <p>Location: {car.direction}</p>
//           <p>Color: {car.color}</p>
//           <p>Year: {car.year}</p>

//         </div>
//       ))}
//       <Link href="/">
//         <a>Go Back to Home</a>
//       </Link>
//     </div>
//   );
// };

// export default Cars;



// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cars = () => {
//   const [allCars, setAllCars] = useState([]);

//   useEffect(() => {
//     // Fetch all cars data
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('/api/getAllCars');
//         if (response.ok) {
//           const cars = await response.json();
//           setAllCars(cars);
//         } else {
//           console.error('Failed to fetch all cars');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchCars();
//   }, []);

//   const handleDeleteCar = async (name, direction) => {
//     try {
//       const response = await fetch('api/deleteCar', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, direction }),
//       });

//       if (response.ok) {
//         toast.success('Car deleted successfully');
//         // Refresh the list of cars after deletion
//         fetchCars();
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
//       <h1>All Cars</h1>
//       {allCars.map((car, index) => (
//         <div key={index}>
//           <p>Name: {car.name}</p>
//           <p>Location: {car.direction}</p>
//           <p>Color: {car.color}</p>
//           <p>Year: {car.year}</p>
//           <button onClick={() => handleDeleteCar(car.name, car.direction)}>
//             Delete Car
//           </button>
//         </div>
//       ))}
//       <Link href="/">
//         <a>Go Back to Home</a>
//       </Link>
//     </div>
//   );
// };

// export default Cars;


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cars = () => {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    // Fetch all cars data
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/getAllCars');
        if (response.ok) {
          const cars = await response.json();
          setAllCars(cars);
        } else {
          console.error('Failed to fetch all cars');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCars();
  }, []);

  const handleDeleteCar = async (name, direction) => {
    try {
      const response = await fetch('api/deleteCar', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, direction }),
      });

      if (response.ok) {
        toast.success('Car deleted successfully');
        // Refresh the list of cars after deletion
        fetchCars();
      } else {
        console.error('Failed to delete car');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
// Replace the existing JSX code in your Cars component
return (
  <div className="table-container">
      <ToastContainer />
      <h1>All Cars</h1>
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
              {allCars.map((car, index) => (
                  <tr key={index}>
                      <td>{car.name}</td>
                      <td>{car.direction}</td>
                      <td>{car.color}</td>
                      <td>{car.year}</td>
                      <td>
                          <button onClick={() => handleDeleteCar(car.name, car.direction)}>
                              Delete Car
                          </button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
      <Link href="/">
          <a>Go Back to Home</a>
      </Link>
  </div>
);

  // return (
  //   <div>
  //     <ToastContainer />
  //     <h1>All Cars</h1>
  //     {allCars.map((car, index) => (
  //       <div key={index}>
  //         <p>Name: {car.name}</p>
  //         <p>Location: {car.direction}</p>
  //         <p>Color: {car.color}</p>
  //         <p>Year: {car.year}</p>
  //         <button onClick={() => handleDeleteCar(car.name, car.direction)}>
  //           Delete Car
  //         </button>
  //       </div>
  //     ))}
  //     <Link href="/">
  //       <a>Go Back to Home</a>
  //     </Link>
  //   </div>
  // );
};

export default Cars;
