import { useState } from "react";

import classes from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.posts}>앱 시작 하기</div>
    </>
  );
}

export default App;
