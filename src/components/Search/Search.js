import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import './search.css';
import FLIGHTS from '../Flights/FlightsJsonData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ setFilteredFlights, filteredFlights, setReset, searchParams, setSearchParams }) => {


  const handleTrip = (tab) => {
    setSearchParams({ ...searchParams, returnTrip: tab === 2 });
  };

  const handleInputChange = (field, value) => {
    if(field === 'departureDate'|| 'returnDate'){
      const formattedValue = moment.isMoment(value) ? value.format('MM/DD/YYYY') : value;
      value==formattedValue;
    }
    setSearchParams({ ...searchParams, [field]: value });
  };

  const handleInputRange = (field, value) => {
    setSearchParams({ ...searchParams, [field]: value });
    const filteredData = FLIGHTS.filter((flight) => {
      const isPriceInRange = flight.price >= searchParams.price.min && flight.price <= searchParams.price.max;
      return isPriceInRange;
    });
    setFilteredFlights(filteredData);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    
    //filter the conditions
    const filteredData = FLIGHTS.filter((flight) => {
      const isPriceInRange = flight.price >= searchParams.price.min && flight.price <= searchParams.price.max;
      const isOriginMatch = !searchParams.origin || flight.from.toLowerCase() === searchParams.origin.toLowerCase();
      const isDestinationMatch = !searchParams.destination || flight.to.toLowerCase() === searchParams.destination.toLowerCase();
      const isDepartureDateMatch = !searchParams.departureDate || moment(flight.depart_date).isSame(moment(searchParams.departureDate), 'day');
      const isReturnDateMatch = !searchParams.returnDate || moment(flight.return_trip.depart_date).isSame(moment(searchParams.returnDate), 'day');
      return isPriceInRange && isOriginMatch && isDestinationMatch && isDepartureDateMatch && (searchParams.returnTrip ? isReturnDateMatch : true);
    });


    if (filteredData.length > 0) {
      //If flights are matched with the searched results.
      setFilteredFlights(filteredData);
    } else {
      //If flights are not matched with the searched then shows popup
      setSearchParams({ ...searchParams, ['departureDate']: null, ['returnDate']: null, origin: '', destination: '' });
      toast.error('Oops ! Flights are not available', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  //Clear all form Data
  const handleClear = () => {
    setReset(true);
    setSearchParams({
      origin: '',
      destination: '',
      returnTrip: false,
      departureDate: null,
      returnDate: null,
      passengers: 0,
      price: { min: 500, max: 5000 },
    });
    setFilteredFlights([]);
  };

  return (
    <>
      <div className={filteredFlights?.length > 0 ? 'searchBox' : 'filteredSearchBox'}>
        <ul className="tabs">
          <li className={`tab${searchParams.returnTrip ? '' : ' active'}`} onClick={() => handleTrip(1)}>
            One way
          </li>
          <li className={`tab${searchParams.returnTrip ? ' active' : ''}`} onClick={() => handleTrip(2)}>
            Return
          </li>
        </ul>

        <form className="form" onSubmit={handleSearch}>
          <div>
            <div className='inputContainer'>
              <input
                className="inputFields"
                type="text"
                placeholder="Enter Origin City *"
                value={searchParams.origin}
                onChange={(e) => handleInputChange('origin', e.target.value)}
                required
              />
            </div>

            <div className='inputContainer'>
              <input
                className="inputFields"
                type="text"
                placeholder="Enter Destination City *"
                value={searchParams.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
                required

              />
            </div>

            <div className='inputContainer'>
              <DatePicker
                className="travelDate"
                placeholderText="Departure date *"
                selected={searchParams?.departureDate || null}
                onChange={(date) => handleInputChange('departureDate', date)}
                required

              />

            </div>

            {searchParams.returnTrip && (
              <div className='inputContainer'>
                <DatePicker
                  className="travelDate"
                  placeholderText="Return date *"
                  selected={searchParams?.returnDate || null}
                  onChange={(date) => handleInputChange('returnDate', date)}
                  required

                />

              </div>
            )}

            <div className='inputContainer'>
              <select
                className="inputFields"
                value={searchParams.passengers}
                onChange={(e) => handleInputChange('passengers', Number(e.target.value))}
                required

              >
                <option>Passengers</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="buttonContainer">
              <button className="formSubmit" type="submit">
                Search
              </button>
              <button className="formClear" type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>



          <div className="priceRangeLabel">
            <label>Price range</label>
          </div>

          <InputRange
            className="price--range"
            maxValue={10000}
            minValue={0}
            formatLabel={(price) => `Rs ${price}`}
            value={searchParams.price}
            onChange={(newPrice) => handleInputRange('price', newPrice)}
          />


        </form>
        <ToastContainer />

      </div>
    </>
  );
};

export default Search;
