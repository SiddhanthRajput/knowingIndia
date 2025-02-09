import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layouts";
import Destination from "./Pages/Destination";
import Error from "./Pages/Error";


function App() {


  const route = createBrowserRouter(createRoutesFromElements(
    <>


      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="destination/:name" element={<Destination />} />



      </Route>



      <Route path='*' element={<Error />}></Route>

    </>

  ))

  return (
    <>

      <RouterProvider router={route}>


      </RouterProvider>
    </>

  );
}

export default App;