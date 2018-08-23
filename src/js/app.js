import Header from './components/Header';
import Footer from './components/Footer';

class App {
	constructor() {

    new Header();
    new Footer();
    // this.loadData();

    this.dataIsLoaded = false;
  }

  // loadData() {
  //   if (this.dataIsLoaded) return;

  //   this.loadAppData()
  //     .then(() => {
  //       if (this.dataIsLoaded) {
  //         this.dataIsLoaded = true;
  //       }
  //     })
  // }

  // loadAppData = () => {
  //   return fetch(END_POINT.APP)
  //     .then(response => {
  //       if (response) {
  //         return response.json()
  //       }
  //     })
  //     .then((appData) => {
  //       this.setState({appData})
  //     })
  //     .catch((e) => {
  //       return e
  //     })
  // }
}

new App();