import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Mcq from './Routes/Mcq/Mcq';
import Index from './Routes/Index/Index';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
      <Route index element={<Index></Index>}></Route>
       <Route path='/:number' element={<Mcq></Mcq>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
