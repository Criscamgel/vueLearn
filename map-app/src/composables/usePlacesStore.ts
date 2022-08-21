import { useStore } from "vuex"
import { StateInterface } from '@/store/index';
import { onMounted } from "vue";

export const usePlaceStore = () => {
    const store = useStore<StateInterface>();


    onMounted( () => {
        if(!store.getters['places/isUserLocationReady']){
            // Esto activa la accion
            store.dispatch('places/getInitialLocation');
        }
    });

    return {

    }

}