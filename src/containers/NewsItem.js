import React from "react";
import { connect } from "react-redux";

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
};
let NewsItem = ({ article }) =>
  article ? (
    <article style={articleStyle}>
      <div>
        <h1>{article.nameCar}</h1>
      </div>
    </article>
  ) : null;
const mapStateToProps = (state) => ({
  article: state.news,
});
NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
