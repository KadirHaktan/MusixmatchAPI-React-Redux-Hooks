import * as actionTypes from "./Types/ActionTypes";
import axios from "axios";

function GetLyricsSuccess(lyrics, dispatch) {
  return dispatch({
    type: actionTypes.GET_LYRİC,
    payload: lyrics
  });
}

function GetRequest(url) {
  const apikey = "cf04681533632ac943595dd82f237731";

  const config = {
    headers: {}
  };

  url += apikey;

  return axios.get(url, config);
}

function GetRequestToLyrics(track_id) {
  const url =
    "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
    track_id +
    "&apikey=";

  return GetRequest(url);
}

export default function GetLyrics(dispatch, track_id) {
  return GetRequestToLyrics(track_id).then(response => {
    GetLyricsSuccess(response.data.message.body, dispatch);
    //console.log(response.config.url)
  });
}
