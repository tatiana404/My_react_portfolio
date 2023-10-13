
import Carousel from 'react-bootstrap/Carousel';


export default function Portfolio() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Note Taker App</h2>
      <br />
        <img 
          className="d-block w-100"
          src="/img/NoteTaker.png"
          alt="First slide"
        />
        <Carousel.Caption>
        <a href="https://github.com/tatiana404/T-Note-Taker" className="btn btn-primaty"style={{position: "center", color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Weather App</h2>
      <br />
		
        <img
          className="d-block w-100"
          src="/img/Weather_App.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/cute_weather_application" className="btn btn-primaty"style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>What's for Dinner App</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/What's_for_Dinner_App.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/WhatsforDinner" className="btn btn-primaty"style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>TimeTable</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Work_Day_Schedule.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/TimeTable_challenge" className="btn btn-primaty"style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Quiz Game</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Quiz_Game.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/nice_simple_quiz" className="btn btn-primaty"style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Company Database</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Company_Database.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/My_company_database" className="btn btn-primaty"style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Tech Blog</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Tech_blog.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/MVC_Tech_Blog" className="btn btn-primaty" style={{color:"black", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <br />
			<br />
      <h2 style={{font:"segoe ui", color:"#0D6EFD", textAlign: "center" }}>Social Network backend</h2>
      <br />
			
        <img
          className="d-block w-100"
          src="/img/Social_Network.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <a href="https://github.com/tatiana404/Challenge18_NoSQL_Social_Network_API" className="btn btn-primaty"style={{color:"darkblue", fontsize:"1,5rem",font: "bold", textAlign: "center" }}>GITHUB LINK</a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

  );
}
