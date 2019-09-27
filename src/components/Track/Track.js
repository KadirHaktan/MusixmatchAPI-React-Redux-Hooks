import React from "react";
import {Form,FormGroup,Button,Input,CardBody,Card,CardText,Container} from 'reactstrap'
import {useDispatch,useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay,faChevronRight,faCompactDisc,faMusic} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



import * as trackActions from '../../redux/actions/TrackAction'




function Track() {

  const {track_list}=useSelector(state=>({
    ...state.GetTrackReducer
  }))

  const dispatch=useDispatch()

  function GetTracks(event){

    const q_track=event.target.elements.q_track.value
    trackActions.GetTrack(dispatch,q_track)
    event.preventDefault();
    
  }

  
  return (
    <Container >
      <br></br>
      <div className="col-md-12 center-block">
      <h1 className="display-6 text-center">
        <FontAwesomeIcon icon={faMusic}/>Search For A Song
      </h1>
      <br></br>
     <Form onSubmit={GetTracks}>
       <FormGroup>
         <Input type="text" name="q_track"/>
       </FormGroup>
       <FormGroup>
         <Button  color="primary" className="btn-lg btn-block mb-5">Get Tracks</Button>
       </FormGroup>
     </Form>
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
                  <Button color="default" style={{border:'solid blue'}} >
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
    
  )
}

export default Track;
