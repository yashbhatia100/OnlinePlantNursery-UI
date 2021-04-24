import axios from 'axios';

const baseUrl = "http://localhost:8585";

function fetchSeedById(seedId) {
    const url = baseUrl + "/seeds/fetch/byid/" + seedId;
    const promise = axios.get(url);
    return promise;
}

expoet {fetchSeedById} ;