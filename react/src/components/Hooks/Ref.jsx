import React, { useRef, useEffect, useState } from 'react';

const Ref = () => {
  const [count, setCount] = useState(0);
  const [forceRender, setForceRender] = useState(false);
  const value = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      value.current = value.current + 1;
      setForceRender(prev => !prev);
    }, 200);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{value.current}</h1>
    </div>
  );
};

export default Ref;
