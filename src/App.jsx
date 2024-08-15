import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { Ah } from "./components/Ah";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Ah />}>
            {routes.map(({ id, path, Element, props }) => {
              return (
                <Route key={id} path={path} element={<Element {...props} />} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
