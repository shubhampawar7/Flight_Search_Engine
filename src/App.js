import React, { useState } from 'react';
import './app.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Flights from './components/Flights/Flights';

const App = () => {
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [reset, setReset] = useState(false);
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    returnTrip: false,
    departureDate: null,
    returnDate: null,
    passengers: 0,
    price: { min: 500, max: 5000 },
  });

  // Function to format dates
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  // Set Departure and Return Date 
  const formattedDepartureDate = searchParams.departureDate ? formatDate(searchParams.departureDate) : null;
  const formattedReturnDate = searchParams.returnDate ? formatDate(searchParams.returnDate) : null;

  return (
    <div className="app">
      <Header />
      <section className={filteredFlights.length < 1 ?'appContentCenter':'appContent'}>
        <Search
          setFilteredFlights={setFilteredFlights}
          filteredFlights={filteredFlights}
          setReset={setReset}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <Flights
          filteredFlights={filteredFlights}
          reset={reset}
          formattedDepartureDate={formattedDepartureDate}
          formattedReturnDate={formattedReturnDate}
          searchParams={searchParams}
        />
      </section>
    </div>
  );
};

export default App;
