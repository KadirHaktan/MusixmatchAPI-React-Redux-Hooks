import {combineReducers} from 'redux'

import GetTrackReducer from './MyReducers/GetTrackReducer'
import GetTop10TrackReducer from './MyReducers/GetTop10TrackReducer'
import GetLyricsReducer from './MyReducers/GetLyricsReducer'

const combineReducer=combineReducers({
    GetTrackReducer,
    GetTop10TrackReducer,
    GetLyricsReducer
})

export default combineReducer