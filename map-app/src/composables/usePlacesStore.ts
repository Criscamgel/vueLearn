import { useStore } from "vuex"
import { StateInterface } from '@/store/index';

export const usePlaceStore = () => {
    const store = useStore<StateInterface>();
    return {

    }

}