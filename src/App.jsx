import React, { useState, useEffect } from "react";

const App = () => {
  const [nums, setNums] = useState(0);

  useEffect(() => {
    // alert("Hello Tarun");
    document.title = `You clicked ${nums} times`;
  });

  return (
    <>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        Click me {nums}
      </button>
    </>
  );
};

export default App;
