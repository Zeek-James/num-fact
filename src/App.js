import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Information } from "./components/Information";

function App() {
  const [item, setItem] = useState("");
  const [param, setParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
    fetchItem();
  }, [param]);

  const base_URL = `http://numbersapi.com/${param}/${type}`;

  const fetchItem = async () => {
    const res = await axios(base_URL);
    setIsLoading(true);
    setItem(res.data);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h2>Num-Fact</h2>
      <Form getNumber={(n) => setParam(n)} getType={(t) => setType(t)} />
      <Information isLoading={isLoading} item={item} />
    </div>
  );
}

export default App;
