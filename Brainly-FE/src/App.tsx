import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { ShareContents } from "./pages/ShareContents";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/share/:shareLink" element={<ShareContents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
