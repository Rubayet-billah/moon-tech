import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
