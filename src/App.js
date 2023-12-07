import "./App.css";
import React, { useEffect } from "react";
import fetchDataFromAPI from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getConfigurations } from "./store/homeSlice";

// Routes File
import AllRoutes from "./AllRoutes";

const App = () => {
  const disp = useDispatch();
  // const { url } = useSelector((state) => state.home);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responseFromAPI = await fetchDataFromAPI("/configuration");
    const url = {
      backdrop : responseFromAPI.images.secure_base_url + "original",
      poster : responseFromAPI.images.secure_base_url + "original",
      profile : responseFromAPI.images.secure_base_url + "original"
    }
    disp(getConfigurations(url));

  };
  return (
    <>
      <AllRoutes />
    </>
  );
};

export default App;
