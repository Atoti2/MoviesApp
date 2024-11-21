import { Trendings } from "./pages/Trendings"
import { Movies } from "./pages/Movies"
import { TVSeries } from "./pages/TVSeries"
import { createBrowserRouter } from "react-router-dom"
import NotFound from "./pages/NotFound"
import { RouterProvider } from "react-router-dom"
import { SearchPage } from "./pages/SearchPage"
import NavBar from "./components/NavBar"
function App() {

  const router = createBrowserRouter(
    [{
      element: <NavBar/> ,
      children: [
        {
          path: "/",
          element: <Trendings/>,
        },
        {
          path: "/movies",
          element: <Movies/>,
        },
        {
          path: "/series",
          element: <TVSeries/>,
        },
        {
          path: "/search",
          element: <SearchPage/>,
        },
        {
          path: "*",
          element: <NotFound/>,
        }
        
      ],
    }],
     {
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }
  })
  return (
    <RouterProvider router={router} future={{v7_startTransition: true}} />
  )
}

export default App
