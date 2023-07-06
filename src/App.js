import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';
import Navigation from './components/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({
        duration: 1000
      });
    }, 1000);

    return () => clearTimeout(initAOS);
  }, []);

  return (
    <div className='App container-fluid'>
      <Navigation />
      <div className='main-container row'>
        <div className='col my-auto text-center' data-aos="fade-left" data-aos-offset="200" data-aos-once="true">
          <h1>Benjamin Montibeler</h1>
          <br />
          <h3>Computer Engineering Student </h3>
        </div>
        <div className='col my-auto d-flex justify-content-center'>
          <div className='parent container-fluid d-flex justify-content-center'>
            <img src={require('./images/Slika.jpeg')} className='img-fluid image' data-aos="fade-down" data-aos-offset="200" data-aos-once="true" />
            <img src={require('./images/Slika2.jpeg')} className='img-fluid image-2' data-aos="fade-up" data-aos-offset="200" data-aos-once="true" />
          </div>
        </div>
      </div>

      <div className='about-me row' id='about'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">About me</h3>
        <p data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          Hi! <br />
          I am Benjamin Montibeler and am a student at Josip Juraj Strossmayer University in Osijek. I am about to graduate undergraduate
          professional study of computer science at FERIT. Throughout these three years of studying, I’ve touched upon many branches of
          programming, but user interface design and frontend development stuck out the most to me. As I am about to graduate, I’ve decided
          to dedicate my career to excatly that. I consider myself a very creative, ambitious, and innovative, hard-working person, which is why
          I’m best suited for such a job. I look forward to participating in a dynamic work environment where I will gain teamwork experience,
          that will enable me to improve my analytical and problem-solving skills.
        </p>
      </div>

      <div className='education row' id='education'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Education</h3>
        <ul className='my-auto' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <li>
            <h5>High School</h5>
            <h6><a href='https://gimnazijavk.hr/'>Gimnasium Matija Antun Reljković - Science And Mathematics</a></h6>
            <p>2014.- 2018.</p>
          </li>
          <br />
          <li>
            <h5>College</h5>
            <h6><a href='https://www.ferit.unios.hr/'>Faculty Of Electrical Engineering Computer Science And Information Technology Osijek -
              Professional Undergraduate Study Of Computer Science</a></h6>
            <p>2019.- 2023.</p>
          </li>
        </ul>
      </div>

      <div className='skills row' id='skills'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Skills</h3>
        <h4 className='my-auto' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">Language skills</h4>
        <ul className='my-auto' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <li>
            <h5>Mother tounge</h5>
            <p>Croatian</p>
          </li>
          <li>
            <h5>Other language(s)</h5>
            <p>English - excellent listening, reading, writing and communitacion skills</p>
          </li>
        </ul>
        <br />
        <div data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <h4>Digital skills</h4>
          <p>I possess starter knowledge in React, JS, HTML, CSS, GitHub, Python, and basics in Kotlin, Swift, SQL, Blender modeling,
            Autocad, Lunacy and Inkspace. </p>
        </div>
      </div>

      <div className='projects row' id='projects'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Projects</h3>
        <p data-aos="fade-right" data-aos-offset="200" data-aos-once="true">The theme of my final thesis was to construct a website for a dance studio. The project was built with React JS, Bootstrap, JavaScript,
          HTML, and CSS. The website allows participants to register, and then enroll in certain dance programs, as well as access to all the
          necessary information about the studio. </p>
        {/* <video src={require('./images/video.mkv')} controls autoplay loop muted className='img-fluid mx-auto' /> */}
        <img src={require('./images/projekt.gif')} className='img-fluid mx-auto' data-aos="fade-right" data-aos-offset="200" data-aos-once="true" />
      </div>

      <div className='hobbies row'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Hobbies</h3>
        <p data-aos="fade-right" data-aos-offset="200" data-aos-once="true">Besides being a computer engineer, I am also a dancer at a local dance studio <a href='https://ps-shine.com/'>Shine</a>. I dance Hip-Hop, Vogue and Contemporary. We've done
          many gigs as a group, and participated, as well as won, numerous competitions. Two of my dance colleague and I organize a monthly dance
          party for students called <a href='https://www.instagram.com/hajpos/'>Hajp</a>.
        </p>
        <div className='justify-content-center row w-100' data-aos="fade-up" data-aos-offset="200" data-aos-once="true">
          <img src={require('./images/hajp1.jpeg')} className='img-fluid' />
          <img src={require('./images/hajp2.jpeg')} className='img-fluid' />
          <img src={require('./images/hajp3.jpeg')} className='img-fluid' />
        </div>
      </div>

      <div className='information row'>
        <h3 className='my-auto' data-aos="fade-down" data-aos-offset="200" data-aos-once="true">Information</h3>

        <div className='row w-100 mx-auto text-center justify-content-evenly' data-aos="fade-right" data-aos-offset="200" data-aos-once="true">
          <div className='col d-flex justify-content-evenly'>
            <ul>
              <li>
                <h6>Nationality:</h6>
                <span>Croatian</span>
              </li>

              <li>
                <h6>Gender:</h6>
                <span>Male</span>
              </li>

              <li>
                <h6>Date of birth:</h6>
                <span>26/06/1999</span>
              </li>
            </ul>
          </div>

          <div className='col'>
            <ul>
              <li>
                <h6>Address:</h6>
                <span>Velaluška 3, Osijek 31000</span>
              </li>

              <li>
                <h6>Phone:</h6>
                <span>+385 95 398 4770</span>
              </li>

              <li>
                <h6>Mail:</h6>
                <span>benjaminmontibeler@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className='col'>
            <ul>
              <li>
                <h6><a href='https://github.com/BenjaminMontibeler'>GitHub</a></h6>
              </li>

              <li>
                <h6><a href='https://www.linkedin.com/in/benjamin-montibeler-b15411247/'>LinkedIn</a></h6>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
