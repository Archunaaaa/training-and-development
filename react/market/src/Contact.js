// import React from "react";
import Counter from "./Increment";
import ClassComponent from "./ClassComponent";
import ItemList from "./Itemlist";

//import Functional from "./Functional";

// export default function Contact() {
//   return (
//     <div className="text-center  home fw-bold pt-5">
//       {" "}
//       Laural Higher Secondary School, Pallikondan, Pattukottai, Thanjavur Dist,
//       Tamil Nadu Phone No: 04373-237800,235444, 235733,236273,248639,255861.
//       Mobile No: 9442420307,9443407068, 9842659789
//     </div>
//   );
// }

export const Contact = () => {  
  const head = { name: "Hello mick testing 1 2 3" };
  return (
    <div className="text-center home fw-bold pt-5">
      Laural Higher Secondary School, Pallikondan, Pattukottai, Thanjavur Dist,
      Tamil Nadu Phone No: 04373-237800,235444, 235733,236273,248639,255861.
      Mobile No: 9442420307,9443407068, 9842659789
      <ClassComponent head={head} />
      <Counter />
      <ItemList />
    </div>
  );
};
