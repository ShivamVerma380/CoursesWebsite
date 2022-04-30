import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import { Button,Row, Col, Container } from "reactstrap";
import {toast, ToastContainer} from "react-toastify";
import Home from "./component/Home"
import Course from './component/Course';
import AllCourse from './component/AllCourse';
import AddCourse from './component/AddCourse';
import Menus from './component/Menus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';

function App() {
  const btnHandle = () =>{
    toast("this is my first message",{
      position:"top-center" 
    });
    toast.success("Done",{
      position:"top-center"
    });
    toast.error("God",{
      position:"top-right"
    });
  }
  return (

    
    
    
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <Header name="Omkar" title="First Card" />
    //   <hr/>
    //   <Header name="Shivam" title="Second Card"/>
    //   <hr/>
    //   <h1>This is my react application</h1>
    //   <p>I am Omkar........</p>
    //   <p>123456 .....</p>
    //   <Header name="Siddhant" title="Third Card"/>
    // </div>

    

    <div>
      {/* <h1>Simple Application</h1>
      <h1>This is bootstrap component</h1>
      <Button color='success' outline>First React Button</Button>
      <hr/>
      <ToastContainer/>
        <h1>This is bootstrap component1</h1>
        <Button color='success' outline onClick={btnHandle}>Toast Button</Button> */}
        {/* <Home/>
        <Course course={{title:"Django",description:"This is a Django course"}}/>
        <Course course={{title:"C++",description:"This is a C++ course"}}/>
        <Allcourses/>
        <AddCourse/> */}
        <Router>
        <ToastContainer/>
        <Header/>
          <Container>
                  
            <Row>
              <Col md={4}>
                <Menus/>
              </Col>
              <Col md={8}>
                <Routes>
                <Route path='/' element={<Home/>} exact></Route>
                <Route path='/add-course' element={<AddCourse/>} exact></Route>
                <Route path='/view-courses' element={<AllCourse/>} exact></Route>
                <Route path='/about' element={<About/>} exact></Route>
                <Route path='/contact-us' element={<Contact/>} exact></Route>
                </Routes>
                
                

              </Col>
            </Row>
          </Container>
        </Router>
        
        

      
    </div>

  );
}
export default App;
