import { defineComponent } from 'vue'
import { usePlaceStore } from '@/composables';

export default defineComponent({
    name: 'SearchResults',
    setup() {
         
        const { isLoadingPlaces, places } = usePlaceStore();


        return {
            isLoadingPlaces,
            places,
        }
    }
})
