import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AmadeusContext } from '../App.js'
import TextField from '@material-ui/core/TextField';
import '../Search.css'
import { capitalizeFirstLetter } from '../utils/functions'
import loadingGif from '../images/loading.gif'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Cross from '@material-ui/icons/Clear';

function Search() {

    const [flights, setFlights] = useState([])
    const [airports, setAirports] = useState([])
    const [search, setSearch] = useState('')
    const [iataCode, setIataCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false) 

    const amadeus = useContext(AmadeusContext)

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        searchAirports(search)
    }

    const searchAirports = search => {
        if(search.length > 2) {
            amadeus.referenceData.locations.get({
                keyword: search,
                subType: "AIRPORT"
            }).then(function(response){
                setAirports(response.data)
            }).catch(function(error){
               console.log(error.code);
            });
        }
    }

    const selectAirport = (airport) => {
        setIataCode(airport.iataCode)
        setSearch(airport.name)
    }

    useEffect(() => {
        if(iataCode !== '') {
            getFlights()
        }
    }, [iataCode])

    const getFlights = () => {
        setLoading(true)
        setError(false)
        amadeus.shopping.flightDestinations.get({
            origin: iataCode
         }).then(function(response){
             setFlights(response.data)
             setLoading(false)
             setError(false)
         }).catch(function(error){
            console.log(error.code);
            setFlights([])
            setLoading(false)
            setError(true)
         });
    }

    const handleClickReset = () => {
        setSearch('')
        setAirports([])
        setFlights([])
        setError(false)
    }

    const flightsList = flights.map((flight) => 
    <Link to={{ pathname: '/flight-details', state: { flight: flight} }} className="Flight-details" key={flight.destination}>
        <div><span>Departure: </span><span>{flight.origin}</span></div>    
        <div><span>Arrival: </span><span>{flight.destination}</span></div>
        <div><span>Departure date: </span><span>{flight.departureDate}</span></div>
        <div><span>Return Date: </span><span>{flight.returnDate}</span></div>
        {flight.price !== undefined && (<div><span>Price: </span><span>{flight.price.total} €</span></div>)}

    </Link>)

    const airportsList = airports.map((airport) => {
        return (
            <div id={airport.id} 
                onClick={() => selectAirport(airport)} 
                key={airport.id} 
                className="Flights-suggestion">
                <div className="Flights-suggestion-iata">{airport.iataCode}</div>
                <div className="Flights-suggestion-city">{capitalizeFirstLetter(airport.address.cityName)}</div>
                <div>{capitalizeFirstLetter(airport.name)}</div>
            </div>
        )
    })
    
    return (
        <div className="Flights" >
            <div className="Airlines-title">
                {(flights.length > 0 && airports.length ===0) && (
                <span> from {search}</span>
            )}</div>
            <TextField className="Flights-input" variant="outlined" type="Text" value={search} 
                onChange={handleChangeSearch} label="Departure airport"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="Reset search"
                        onClick={handleClickReset}
                        ><Cross/>
                        </IconButton>
                    </InputAdornment>
                ),
                }}>
            </TextField>
            <div className="Flights-container">{airportsList}</div>
            {loading ? 
                <div className="Airlines-loading">
                    <img src={loadingGif} alt="Loading"></img>
                </div>
            : <div className="Flights-list">{flightsList}</div>}
            {error && <div className="Flights-error">
                <p>Sorry, we don't have available details for this city</p>
                <div>We have available details for these cities:
                    <ul>
                        <li>Madrid (MAD)</li>
                        <li>Los Angeles (LAX)</li>
                        <li>San Francisco (SFO)</li>
                        <li>Miami (MIA)</li>
                        <li>Seattle (SEA)</li>
                        <li>Boston (BOS)</li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Search;