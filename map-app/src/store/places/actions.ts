import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit }, payload  ) {
        navigator.geolocation.getCurrentPosition();
    }
}



export default actions;