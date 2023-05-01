import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./AppPage/Section";
import { useSelector } from "react-redux";
import { selectedFormData } from "../../Features/loginSlice";
function App() {
  const formData = useSelector(selectedFormData);
  return (
    <>
      {!!formData.length && (
        <>
          <Header />
          <div className="flex justify-center mt-2">
            <Section />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
