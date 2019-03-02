import React from 'react';
import DogCeoService from '../../services/DogCeoService';


class Discover extends React.Component {
    state = {
        image: ''
    }

    componentDidMount = () => {
        this.loadRandomDog();

    }

    loadRandomDog = () => {
        DogCeoService.getRandomDog().then(res => {
            this.setState({ image: res.data.message });
        })
    }

    render() {
        return (
            <div>
                <h1>Discover Page</h1>
                <img src={this.state.image} alt="a doggo" />
                <button onClick={this.loadRandomDog}>Load another Doggo</button>
            </div>
        )
    }
}
export default Discover;