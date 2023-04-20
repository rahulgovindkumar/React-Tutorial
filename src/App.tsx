import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "London", "Paris", "Tokyo", "Moscow"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
