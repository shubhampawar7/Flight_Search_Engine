import React, { useState, useEffect } from 'react';
import FlightDetails from './FlightDetails';
import './Flights.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Flights = ({ filteredFlights, formattedDepartureDate, formattedReturnDate, searchParams }) => {

  return (
    <>
      {
        filteredFlights.length > 0 ? (
          <>
            <section className="flights">
              <div className="flightsDetails">
                <div>
                  <h1>
                    <span>{searchParams.origin ? searchParams.origin : "From"}</span> &raquo;
                    <span> {searchParams.destination ? searchParams.destination : "To"} </span>
                    {searchParams.returnTrip && <span>&raquo;  {searchParams.origin ? searchParams.origin : "From"}</span>}
                  </h1>
                </div>

                <div>
                  <h1>Total Flights - {filteredFlights.length > 0 && filteredFlights.length}</h1>
                </div>

                <div className="flightTimings">
                  <span>Departure: {formattedDepartureDate}</span>
                  {formattedReturnDate && searchParams.returnTrip && <span>Return: {formattedReturnDate}</span>}
                </div>
              </div>

              {/* {filteredFlights.length <= 0 && (
                <div>Sorry, No flights for your selection. Please refine your search!</div>
              )} */}

              <div className='flightResultsSection'>
                {(filteredFlights.length > 0 && filteredFlights) && filteredFlights.map((flight) => (
                  <FlightDetails key={flight.id} flight={flight} searchParams={searchParams} />
                ))}
              </div>
            </section>
            < ToastContainer />

          </>
        ) : ("")

      }


    </>
  );
};

export default Flights;