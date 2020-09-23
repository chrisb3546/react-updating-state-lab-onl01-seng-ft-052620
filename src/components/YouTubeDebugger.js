// Code YouTubeDebugger Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      changeToTwelve = () => {
          let newBitrate = 12
          this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: newBitrate
              })
        })

      }

      changeVidQual = () => {
          let newVidQual = '720p'
          this.setState({
              settings: Object.assign({}, this.state.settings,{
                  video:{
                resolution: newVidQual
            }
              })
          })

      }

    render(){
        return(
            <div>
        <button className="bitrate" onClick={this.changeToTwelve}>Bitrate Change</button >
        <button className="resolution" onClick={this.changeVidQual}>Quality Change</button>
        </div>
        )
    }
}
