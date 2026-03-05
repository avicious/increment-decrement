import IncrementDecrement from "./components/IncrementDecrement";

const App = () => {
  return (
    <div className="container">
      <IncrementDecrement minVal={2} maxVal={8} />
    </div>
  );
};

export default App;
