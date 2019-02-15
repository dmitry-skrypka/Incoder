import React, {Component} from "react";
import "./styles.css";
import history from '../../config/history'
class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            play: true,
            pause: false,
        }
        this.url = "https://ericskiff.com/music/Resistor%20Anthems/05%20Come%20and%20Find%20Me.mp3";
        this.audio = new Audio(this.url);
    }


    componentDidMount() {
        setTimeout(this.play, 1000)
    }
    componentWillUnmount() {
        this.pause()
        // this.audio.currentTime = 0
    }
    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }



    render() {
console.log(this.state)
        return (
            <div className="menu">
                <div className="menu_logo"/>
                <div className="menu_buttons_container">

                    <div className="menu_button_new_game" onClick={() => {history.push('/game'); this.pause()}}>

                        START NEW GAME
                    </div>
                    <div className="menu_button">OPTIONS</div>
                    <div className="menu_button">SCORE</div>

                </div>
                <div style={{backgroundColor: 'green'}}>
                    <button onClick={this.play}>Play</button>
                    <button onClick={this.pause}>Pause</button>
                </div>
            </div>
        );
    }
}

export default Menu;
