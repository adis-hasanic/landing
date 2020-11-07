import logo from './logo.svg';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';



function App({ scrollPosition }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Adis Hasanic
        </p>
        <div>
    <LazyLoadImage src="1.png" effect="blur"  width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="2.png" effect="blur" width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="3.png" effect="blur" width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="4.png" effect="blur"  width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="5.png" effect="blur" width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="6.png" effect="blur" width="300px" scrollPosition={scrollPosition}></LazyLoadImage>
    <LazyLoadImage src="7.png" effect="blur"  width="300px" scrollPosition={scrollPosition} beforeLoad={() => console.log("ide")}></LazyLoadImage>
  </div>
      </header>
    </div>
  );
}

export default trackWindowScroll(App);
