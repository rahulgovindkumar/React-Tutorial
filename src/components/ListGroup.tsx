import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
