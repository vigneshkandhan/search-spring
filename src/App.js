import "./App.scss";

//plugin css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-modal/styles.css";
import "react-tabs/style/react-tabs.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FreqentlyBoughtTogether } from "./pages/FreqentlyBoughtTogether";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FreqentlyBoughtTogether />} />
          <Route path="/frequent" element={<FreqentlyBoughtTogether />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
