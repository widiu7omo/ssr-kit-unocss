import React, { useState } from "react";

export { Counter };

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        bg-red-200
        b-rd
        px-3
        py-1
        text-lg
        text-gray-900
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        Counter <span text-2xl>{count}</span>
      </button>
    </>
  );
}
