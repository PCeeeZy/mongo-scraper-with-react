import axios from 'axios';

const DogCeoService = {
  getRandomDog: () => {
    return axios.get('https://dog.ceo/api/breeds/image/random');
  },
  getDogsByBreed: (breed) => {
    return axios.get(`https://dog.ceo/api/breeds/${breed}/images`);
  }
}

export default DogCeoService;