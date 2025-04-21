import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ROOTLayout from "./layout/ROOTLayout";
import Place from "./pages/Place";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ROOTLayout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Place />} />
      </Route>
    )
  );

  return (
    <div className="h-max overflow-y-scroll">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
