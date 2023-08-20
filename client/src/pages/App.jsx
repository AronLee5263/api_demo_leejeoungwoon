import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./App.module.css";

function App() {
  let navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={classes.box}>
        <button
          className={classes.startBtn}
          onClick={() => {
            navigate("/library/content");
          }}
        >
          앱 시작 하기
        </button>
      </div>
    </>
  );
}

export default App;
