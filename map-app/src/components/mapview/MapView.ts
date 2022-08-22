import { defineComponent, ref, onMounted } from 'vue';
import { usePlaceStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlaceStore();

        onMounted(() => {
            console.log(mapElement.value);            
        })

        return {
            userLocation,
            isUserLocationReady
            
        }

    }
});