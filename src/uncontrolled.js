import React, { useRef, useState } from "react";

const Uncontrolled = () => {
  // it is like useState and preserve the value and no rerender
  const [display, setDisplay] = useState(false);

  const Nickname = useRef(null);

  const Handle = (e) => {
    e.preventDefault();
    const name = Nickname.current.value;
    name === "" ? alert("Enter you nickname") : setDisplay(true);
  };
  return (
    <div>
      <h1>hi Uncontrolled</h1>
      <form onSubmit={Handle}>
        <div>
          <label>enter your nick name</label>
          <input type="text" ref={Nickname} />
        </div>
        <button>Submit</button>
        <p style={{ fontSize:" 50px "}}>
          {display ? `Your nickname is ${Nickname.current.value}` : "Please enter nickname in above input box"}
        </p>
      </form>
    </div>
  );
};
export default Uncontrolled;
