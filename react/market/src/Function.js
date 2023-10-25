// import React from "react";
import React, { useState } from "react";

export const Function = () => {
  return <div>Function</div>;
};

export default function Functional(props) {
  console.log(props);
  const [name, setName] = useState(props.hx.name);
  setName("luffy");
  return <div>Functional {name}</div>;
}
