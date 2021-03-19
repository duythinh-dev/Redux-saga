import React from "react";
import NewsItem from "./containers/NewsItem";
import Loading from "./containers/Loading";
import Button from "./containers/Button";
let App = () => (
  <div>
    <Button />
    <Loading />
    <NewsItem />
  </div>
);
export default App;
