import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as trackActions from "../../redux/actions/TrackAction"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faChevronRight,faCompactDisc,faMusic} from '@fortawesome/free-solid-svg-icons'
import {Container,Card,CardBody,CardText,Button} from 'reactstrap'
import {Link} from 'react-router-dom'


function Track10() {
  const { track_list } = useSelector(state => ({
    ...state.GetTop10TrackReducer
  }));

  const dispatch = useDispatch();

  function GetTrack10() {
    trackActions.GetTop10Track(dispatch);
  }

  useEffect(() => {
     GetTrack10()
  },[])

  return (
    <Container>
      <br></br>
      <div className="col-md-12 center-block">
      <h1 className="display-6 text-center">
        <FontAwesomeIcon icon={faMusic}/> Top10
      </h1>
      {
        track_list.map(t=>(
          <Card body inverse className="card mb-4 shadow-sm" key={t.track.track_id}>
            <CardBody className="card-body">
              <CardText style={{color:'black'}}>
                <p>
                <h5>{t.track.artist_name}</h5>
                <strong>
                  <FontAwesomeIcon  icon={faPlay}/>
                </strong>
                Track:{t.track.track_name}
                <br></br>
                <strong>
                  <FontAwesomeIcon icon={faCompactDisc}/>
                </strong>
                Album:{t.track.album_name}
                <br></br>
                
                <strong>
                  <Button color="default" style={{border:'solid blue'}}>
                    <FontAwesomeIcon icon={faChevronRight}/> 
                    <Link to={"/lyrics/track/"+t.track.track_id}>Lyrics</Link>
                  </Button>
                </strong>
                </p>
              </CardText>
            </CardBody>
          </Card>
        ))
      }
      </div>

    </Container>
  );
}

export default Track10