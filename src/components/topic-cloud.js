import { Link } from "gatsby";
import React from "react";

function TopicCloud({ topics, section, title }) {
  if (!title) {
    title = `All Topics`;
  }
  if (section) {
    section = `${section}/`;
  } else {
    section = "";
  }

  return (
    <div className="column is-3 is-2-widescreen is-hidden-mobile">
      <div className="tags-widget">
        <h4 className="title is-4 spanborder has-text-weight-bold">
          <span>{title}</span>
        </h4>
        <div className="tags">
          {topics.map((topic) => (
            <Link to={`/topics/${topic.slug}/${section}`} key={topic.slug}>
              <span className="tag">{topic.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicCloud;
