import Mapboxgl from 'mapbox-gl';
import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlaceStore } from '@/composables';
import { useMapStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {       
        const mapElement = ref();        
        const { userLocation, isUserLocationReady } = usePlaceStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            
            //if( !mapElement.value ) throw new Error('Div Element no exits');
            if( !userLocation.value ) throw new Error('User location no existe');
            
            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

                const myLocationPopup = new Mapboxgl.Popup()
                    .setLngLat ( userLocation.value )
                    .setHTML(`
                        <h5>Aqui Estoy</h5>
                        <h5>Actualmente en Alajuela</h5>
                        <p>${ userLocation.value }</p>
                    `)

                const myLocationMarker = new Mapboxgl.Marker()
                    .setLngLat( userLocation.value )
                    .setPopup( myLocationPopup )
                    .addTo( map )
                // Todo: establecer el mapa en Vuex 
                setMap( map );
        }

        onMounted(() => {       
           if (isUserLocationReady.value) 
            return initMap();
                       
        });

        watch( isUserLocationReady, (newVal) => {           
            if( isUserLocationReady.value ) initMap();
        })

        return {
            isUserLocationReady,
            mapElement            
        }

    }
});