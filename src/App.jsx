import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Page/Home";
import SignIn from "./Page/SignIn";
import Register from "./Page/Register";
import PostForm from "./Page/PostForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/post"
          element={
            <Layout>
              <PostForm />
            </Layout>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
