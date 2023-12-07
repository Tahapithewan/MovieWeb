import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/Details/Details";
import SearchResult from "./pages/SearchResult/SearchResult";
const AllRoutes = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer />
    </>
  )
};

export default AllRoutes;
