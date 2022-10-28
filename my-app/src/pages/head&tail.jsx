import React, { useState } from 'react'
import Addheadtail from '../component/addheadtail';
import SelectItem from '../component/selectItem';

const Headtail = () => {
    const [items, setItem] = useState([]);

    const handleItem = (text) => {
      const newItem = {
        title: text,
        status: false,
        id: new Date().getMilliseconds() + text
      };
      setItem([...items, newItem]);
    };

    
    return (
      <div>
        <Addheadtail handleItem={handleItem} />
        <ul>
          {items.map((item) => (
            <SelectItem key={item.id} title={item.title} />
          ))}
        </ul>
      </div>
    );
}

export default Headtail