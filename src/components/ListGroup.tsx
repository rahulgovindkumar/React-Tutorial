function ListGroup() {
  let items = ["New york", "London", "Paris", "Tokyo", "Moscow"];
  items = []; // uncomment this line to see the empty list message

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
