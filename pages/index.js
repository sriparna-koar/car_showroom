import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [direction, setDirection] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, direction }),
      });

      if (response.ok) {
        console.log('Car added successfully');
      } else {
        console.error('Failed to add car');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Car App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Direction:
          <input
            type="text"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default Home;
