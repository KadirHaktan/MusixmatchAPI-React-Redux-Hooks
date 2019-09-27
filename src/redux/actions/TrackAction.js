import * as actionTypes from "./Types/ActionTypes";
import axios from "axios";

function GetTrackSuccess(track_list, dispatch) {
  return dispatch({
    type: actionTypes.GET_TRACK,
    payload: track_list
  });
}

function GetTop10TrackSuccess(track_list, dispatch) {
  return dispatch({
    type: actionTypes.GET_TOP_10_TRACK,
    payload: track_list
  });
}

function GetRequest(url) {
  const apikey = "cf04681533632ac943595dd82f237731";

  const config = {
    headers: {
      //Origin: "x-requested-with"
    }
  };

  url += apikey;

  return axios.get(url, config);
}

function GetSearchRequest(artist = "") {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=" +
    artist +
    "&page_size=10&page=1&s_track_rating=desc&apikey=";

  return GetRequest(url);
}

function GetTop10Request() {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=";

  return GetRequest(url);
}

export function GetTrack(dispatch, artist) {
  return GetSearchRequest(artist).then(response => {
    GetTrackSuccess(response.data.message.body, dispatch);
    //console.log(response.data.message.body.track_list)
  });
}

export function GetTop10Track(dispatch) {
  return GetTop10Request().then(response => {
    GetTop10TrackSuccess(response.data.message.body, dispatch);
    //console.log(response.data.message.body.track_list)
  });
}
