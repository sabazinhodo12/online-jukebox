import types from '../../reducers/actionTypes';
import store from '../../store/index';

const updateVolumeAction = (volume) => ({
    type: types.UPDATE_VOLUME,
    data: volume
});

const dataLoading = (payload) => ({
    type: types.LOADING_DATA,
    data: payload
});

const dataLoadingComplete = (payload) => ({
    type: types.DATA_LOADED_COMPLETE,
    data: payload
});

const updateLoadingStatus = (status, payload) => {
    if(status === 'calling') {
        store.dispatch(dataLoading(payload));
    } else if (status === 'complete') {
        store.dispatch(dataLoadingComplete(payload));
    }
};

const updateVolume = (volume, player) => (dispatch) => {
    dispatch(updateVolumeAction(volume));
    if(volume === 0){
        player.mute();
        return
    }
    player.setVolume(volume)
    player.unMute();
};

export default {
    updateVolume,
    updateLoadingStatus,
    dataLoading,
    dataLoadingComplete
};