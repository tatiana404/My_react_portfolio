
import Carousel from 'react-bootstrap/Carousel';


export default function Portfolio() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{color:"darkBlue", textAlign: "center" }}>First slide label</h2>
      <br />
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty">GitHub Link</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{color:"darkBlue", textAlign: "center" }}>Second slide label</h2>
      <br />
		
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty">GitHub Link</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{color:"darkBlue", textAlign: "center" }}>Third slide label</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty">GitHub Link</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{color:"darkBlue", textAlign: "center" }}>Third slide label</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty">GitHub Link</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{color:"darkBlue", textAlign: "center" }}>Third slide label</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty">GitHub Link</a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

  );
}
