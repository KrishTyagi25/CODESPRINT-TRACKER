import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import Analytics from "./pages/Analytics";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route 
        path="/"
        element = {
          <Layout>
            <Dashboard/>
          </Layout>
        }/>
      <Route 
        path="/analytics"
        element={
          <Layout>
            <Analytics/>
          </Layout>
        } />
    </Routes>
    </BrowserRouter>

  )
}

export default App;