import { computed, defineComponent } from 'vue';
import { usePlaceStore } from '@/composables/usePlacesStore';
import { useMapStore } from '@/composables/useMapStore';

export default defineComponent({
    name: 'MyLocationBtn',
    setup() {

        const { userLocation, isUserLocationReady } = usePlaceStore();
        const { map, isMapReady } = useMapStore();
        

        return {

            isBtnReady: computed<boolean>( () => isUserLocationReady.value && isMapReady.value ),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }
        }
    }
})