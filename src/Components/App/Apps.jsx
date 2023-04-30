import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./AppPage/Section";
function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center mt-2">
        <Section />
      </div>
      <Footer />
    </>
  );
}

export default App;
