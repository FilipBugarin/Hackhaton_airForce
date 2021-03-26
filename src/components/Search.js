import React, { useState, useEffect, useContext } from 'react';
import { AmadeusContext } from '../App.js';
import AsyncSelect from 'react-select/lib/Async';

const Search = () => {
    const amadeus = useContext(AmadeusContext);
    const [offers, setOffers] = useState([]);
    const [searchDate, setSearchDate] = useState(new Date())
    const [searchDeparture, setSearchDeparture] = useState('');
    const [searchArrival, setSearchArrival] = useState('');
    const [isLoading, setIsLoading] = useState(false);
}

export default Search