import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc2NhbWdlbCIsImEiOiJja2R5dTRrbjYyZTZzMnVscWcxc2xqNm9oIn0.QGPHEs05pfn-MxHbXGmyFg';

if ( !navigator.geolocation ) {
    throw new Error("Tu navegador no soporta la Geolocalización");    
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
