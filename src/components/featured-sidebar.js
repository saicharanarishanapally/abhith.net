import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import TopicsBar from "./topics-bar";
import Button from "./button";
import TitleBar from "@components/title-bar";
import { domainFromURL } from "../utils/common";

const FeaturedSidebar = ({ items, totalCount }) => {
  return (
    <div className="sticky">
      <TitleBar title="Tools & Services" />
      <ol className="list-featured">
        {items &&
          items.map(({ node: item }) => (
            <li className="mb-4" key={item.id}>
              <span>
                <h6 className="has-text-weight-bold">
                  <OutboundLink
                    target="_blank"
                    className="has-text-dark"
                    href={item.url}
                  >
                    {item.title}
                  </OutboundLink>
                </h6>
                <small>{domainFromURL(item.url)}</small>
                <TopicsBar topics={item.tags} />
              </span>
            </li>
          ))}
      </ol>
      <Button
        text={`View All ${totalCount} Tools & Services`}
        path="/recommended/services/"
        align="left"
      ></Button>
    </div>
  );
};

FeaturedSidebar.propTypes = {
  items: PropTypes.array,
};

export default FeaturedSidebar;
