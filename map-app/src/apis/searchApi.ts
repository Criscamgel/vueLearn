import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        languaje: 'es',
        access_token: 'pk.eyJ1IjoiY3Jpc2NhbWdlbCIsImEiOiJja2R5dTRrbjYyZTZzMnVscWcxc2xqNm9oIn0.QGPHEs05pfn-MxHbXGmyFg'
    }
})

export default searchApi;