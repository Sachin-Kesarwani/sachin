import React, { useState } from "react";

const Todolist = () => {
  const Biodata = [
    { id: 0, myName: "Sachin kesarwani", profession: "Developer" },
    { id: 1, myName: "Shobhit kesarwani", profession: "Developer" },
    { id: 2, myName: "Rupesh kesarwani", profession: "Government Teacher " },
    { id: 3, myName: "Ashish kesarwani", profession: "Bussiness man" },
  ];
  const [data, setdata] = useState(Biodata);
  const Clear = () => {
    setdata([]);
  };
  const remove = (id) => {
    const newdata = data.filter((element) => {
      return element.id !== id;
    });
    setdata(newdata);
  };
  return (
    <>
      {data.map((element) => {
        return (
          <>
          <h3 key={element.id}>
            MyName:{element.myName} and Profession :{element.profession}
            <button onClick={() => remove(element.id)}>remove</button>
          </h3>
          </>
        );
      })}
      <button onClick={Clear}>Click me to clear data</button>
    </>
  );
};

export default Todolist;
