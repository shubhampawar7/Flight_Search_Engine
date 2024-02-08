import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Flights.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlightDetails = ({ flight, searchParams }) => {
  const [bookflight, setBookFlight] = useState(false);

  const handleBookFlight = () => {
    if (!bookflight) {
      setBookFlight(true);
      toast.success('Flight booked successfully!', { position: toast.POSITION.TOP_RIGHT });
    } else {
      toast.info('This flight is already booked!', { position: toast.POSITION.TOP_RIGHT });
    }
  };

  const { depart_date, arrive_date, number, from_code, to_code, return_trip, airline_code, price } = flight;
  const depart_time = moment(depart_date).format('hh:mm A');
  const arrive_time = moment(arrive_date).format('hh:mm A');
  const returnTripDepartTime = moment(return_trip.depart_date).format('hh:mm A');
  const returnTripArriveTime = moment(return_trip.arrive_date).format('hh:mm A');

  return (
    <>
      <div className="flight">
        <div className="flightDetails">
          <h3 >Rs {price}</h3>

          <div className="flighTimings">
            <div className="flightDeparture">
              <p>{number.toUpperCase()}</p>
              <p>
                {from_code} &raquo; {to_code}
              </p>
              <p>Depart: {depart_time}</p>
              <p>Arrive: {arrive_time}</p>
            </div>

            {searchParams.returnTrip && (
              <div className="flightReturn">
                <p>{return_trip.number.toUpperCase()}</p>
                <p>
                  {return_trip.from_code} &raquo; {return_trip.to_code}
                </p>
                <p>Depart: {returnTripDepartTime}</p>
                <p>Arrive: {returnTripArriveTime}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flightLogo">
          <div className={`airline ${airline_code}`}></div>
          <button className='bookFlightBtn' onClick={handleBookFlight}>{bookflight ? "Booked" : "Book this flight"}</button>
        </div>

      </div>
    </>
  );
};

export default FlightDetails;
