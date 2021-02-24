import React from 'react';

import YouTube from '@u-wave/react-youtube';

let videoIdList=["36yEfPaQcSc","qcPfI0y7wRU","_rZou_PqFoo",
                 "EWTVx4ICrmg","ruNNUABRpf8","ZufFqNhmmgU",
                 "9XvC8Z8yZao","3oOAMoAKdMo","_rZou_PqFoo"];
 export default class Example extends React.Component {
    constructor(props){
    super(props);
    this.state = {};
    this.i =0; 
    /* this.i={this.props.id} */
    }   
    componentDidMount() {
      this.setState({videoId: videoIdList[this.i]});
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <YouTube
                video={this.state.videoId}
                opts={opts}
                onReady={this._onReady}
                onEnd={this._onEnd}
            />
        );
    }  
    _onEnd = () => {
        this.setState({videoId: videoIdList[++this.i]});
     }
    }
  