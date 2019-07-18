import React from "react";
import ArrowIcon from "../../assets/img/arrow.png";
import "./list_styles.css";
import { Link } from "react-router-dom";

export const List = props => {
  const lists = props.data.map((cur, i) => (
    <div className="list" key={cur.id}>
      <h1>{cur.title}</h1>
      <p>{cur.content.substr(0, 800)}...</p>
      <div className="group">
        <Link className="btn" to={`/topics/${cur.title}`}>
          Insert
        </Link>
        <img className="arrowIcon" src={ArrowIcon} alt="arrowIcon" />
      </div>
      <hr />
    </div>
  ));

  return <div> {lists}</div>;
};
