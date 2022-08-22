import { useStore } from "vuex"
import { StateInterface } from '@/store/index';
import { computed, onMounted } from "vue";

export const usePlaceStore = () => {
    const store = useStore<StateInterface>();


    onMounted( () => {
        if(!store.getters['places/isUserLocationReady']){
            // Esto activa la accion y llena el Store
            store.dispatch('places/getInitialLocation');
        }
    });

    return {
        // State
        isLoading: computed( () => store.state.places.isLoading ),
        userLocation: computed( () => store.state.places.userLocation ),

        // Getters
        isUserLocationReady: computed<boolean>( () => store.getters['places/isUserLocationReady'] )

        // Actions

        //Mutations

    }

}