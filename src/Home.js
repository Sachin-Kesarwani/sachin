import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div id="Home">
        <h1>SK info web</h1>
      </div>
      <header>
        <div id="Navbar">
          <Link to="/About" className="Link" style={{ color: "white" }}>
            About us
          </Link>
          <Link to="/News" className="Link" style={{ color: "white" }}>
            News
          </Link>
          <Link to="/Contact" className="Link" style={{ color: "white" }}>
            Contact us
          </Link>
        </div>
      </header>
      <aside>
        <div className="Sidebar1">
          <h2>What's my story</h2>
          <p>
            This is sachin keasrwani from murka chitrakoot up.I have recently
            passout class 12 from GIC prayagraj where I got 72.2 % . This is
            very proud for me that got this grade just because if someone get
            this grade from GIC then this is very good for them for their
            upcoming future. But now I want to become full stalk development
            after class 12 from masai school.And now I staeted my own industry.
          </p>
        </div>
      </aside>
      <h1>Currently we are working with two languages.</h1>
      <div className="Sidebar2">
        <h3>JavaScript</h3>
        <p>
          JavaScript is a scripting or programming language that allows you to
          implement complex features on web pages — every time a web page does
          more than just sit there and display static information for you to
          look at — displaying timely content updates, interactive maps,
          animated 2D/3D graphics, scrolling video jukeboxes
        </p>
        <Link to="/Applyjs">
          <button className="apply">Apply </button>
        </Link>
      </div>
      <div className="Sidebar2">
        <h3>Python</h3>
        <p>
          Python is a computer programming language often used to build websites
          and software, automate tasks, and conduct data analysis. Python is a
          general-purpose language, meaning it can be used to create a variety
          of different programs and isn't specialized for any specific problems.
        </p>
        <Link to="/Applypy">
          <button className="apply">Apply</button>
        </Link>
      </div>
      <p>This is timer</p>
      <Link to="/Timer">
        <button>Start timer</button>
      </Link>
      <h2>Length calculator</h2>
      <Link to="/Increment">
        <button>Click me </button>
      </Link> 
      <h1>Rules of react </h1>
      <p>1: Always write it inside the component or function </p><br></br><br></br>
      <p>2:Component name must be PascalCase(first letter should be uppercase)</p><br></br><br></br>
      <p>3: We can directly import or we can directly write it using React hookName </p><br></br><br></br>
      <p>4: Dont call Hooks inside loops,conditions ,or nested functions .</p><br></br> 
      <h1>Use of array in react</h1>
      <Link to="/UsestateArray">
        <button>Click me to go profiles  </button>
      </Link> <br></br><br></br>
      <h1>Use of spreadOperator</h1>
      <Link to="/SpreadOperator">
        <button>Click me to update  </button>
      </Link>
      <h1>Use of useState</h1>
      <Link to="/UseState">
        <button>Click me to go usestate page </button>
      </Link>
      <h1>Todo list page</h1><br></br>
      <Link to="/Todolist">
        <button>Click to go Todolist  </button>
      </Link>
      <h1> Logical operator</h1>
      <Link to="/ShortcirEval">
        <button>Click to go ShortcirEval( Logical & and || operator)  </button>
      </Link>
      <h1>Use of useEffect</h1>
      <Link to="/UseEffect">
        <button> click me to go</button>

        </Link>
        <h1>Uncontrolled inputs page(use of useRef)</h1>
        <Link to="/Uncontrolled">
          <button>Click to go uncontrolled input page</button>
        </Link>

        <h1>Go to practice page</h1>
        <Link to="/Practive">
          <button>Click to go uncontrolled input page</button>
        </Link>
    </div>
  );
};
export default Home;
