import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigation } from "react-router-dom";
function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state == "loading";

  return (
    <main>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
      <Footer />
    </main>
  );
}

export default HomeLayout;
