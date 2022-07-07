import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [inputValue, setInputvlaue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputvlaue(event.target.value)}
        value={inputValue}
      />

      <h1>Count is : {count.current}</h1>
    </div>
  );
};

export default UseRefHook;
