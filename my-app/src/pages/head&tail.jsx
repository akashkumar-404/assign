import React, { useState } from "react";
import Addheadtail from "../component/addheadtail";
import SelectItem from "../component/selectItem";

const Headtail = () => {
  const [items, setItem] = useState("");
  const handleItem = (text) => {
    setItem([text]);
  };

  return (
    <div>
      <Addheadtail handleItem={handleItem} />
      <ul>
        <SelectItem title={items[0]} />
      </ul>
    </div>
  );
};

export default Headtail;
