import React, { useEffect } from "react";

import GetLyrics from "../../redux/actions/LyricsAction";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  CardFooter
} from "reactstrap";

function Lyrics(props) {
  const { lyrics } = useSelector(state => ({
    ...state.GetLyricsReducer
  }));

  const dispatch = useDispatch();

  function Getlyrics() {
    GetLyrics(dispatch, props.match.params.id);
  }

  function WriteState() {
    console.log(lyrics);
  }

  function ShowPage(){
    let page=<div></div>

     if(!lyrics){
       page=(
         <Container>
           <div className="alert alert-danger col-md-12 center-block">
             <h4 style={{textAlign:'center'}}><strong>Track has not lyrics</strong></h4>
           </div>
         </Container>
       )
     }

     else{
      page=(
        <Container>
        <div className="col-md-12 center-block">
          <Card body inverse className="card mb-4 shadow-sm">
            <CardHeader>
              <CardTitle style={{ color: "black" }}>
                <strong>Song's Lyrics</strong>
              </CardTitle>
            </CardHeader>
            <CardBody style={{ color: "black" }}>
              <CardText>
                <p>
                  <strong>{lyrics.lyrics_body}</strong>
                </p>
              </CardText>
            </CardBody>
            <CardFooter>
              <CardText style={{ color: "black" }}>
                <strong>{lyrics.lyrics_copyright}</strong>
              </CardText>
            </CardFooter>
          </Card>
        </div>
      </Container>
       )
     }
    

     return page
  }


  useEffect(() => {
    Getlyrics();
  }, [props.match.params.id]);

  return (
    ShowPage()
  );
}

export default Lyrics;
