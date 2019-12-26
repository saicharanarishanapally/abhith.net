import Layout from "@components/Layout";
import PageHero from "@components/PageHero";
import SEO from "@components/SEO";
import TopicImage from "@components/TopicImage";
import { ITopic } from "@types";
import { graphql, Link } from "gatsby";
import React from "react";
import { FaBookOpen, FaFileAlt, FaGlobe, FaVideo } from "react-icons/fa";

function TopicsPage({ pageContext }) {
  const { topics }: { topics: ITopic[] } = pageContext;

  return (
    <Layout>
      <SEO
        title="Topics"
        description={`Summary of all the ${topics.length} topics in abhith.net`}
        slug="/topics"
      />
      <PageHero
        title={`All Topics`}
        subtitle={`Summary of all the ${topics.length} topics in abhith.net`}
        className={`position-relative page-hero`}
      />
      <section className="section">
        <div className="container is-fluid" id="topics-block">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="columns is-centered is-multiline">
                {topics.map(topic => (
                  <div className="column is-3" key={topic.slug}>
                    <div className="block">
                      <div className="inner-block position-relative">
                        <div className="media-left">
                          <figure className="image is-64x64">
                            <TopicImage slug={topic.slug} />
                          </figure>
                        </div>
                        <h2 className="mt-2 title is-4">{topic.title}</h2>

                        <div className="buttons has-addons mb-2">
                          {topic.totalPosts > 0 && (
                            <Link
                              className="button is-outlined"
                              to={`/topics/${topic.slug}/`}
                            >
                              <FaFileAlt />
                              <span>&nbsp;{topic.totalPosts}</span>
                            </Link>
                          )}
                          {topic.totalVideos > 0 && (
                            <Link
                              className="button is-primary is-outlined"
                              to={`/topics/${topic.slug}/`}
                            >
                              <FaVideo /> <span>&nbsp;{topic.totalVideos}</span>
                            </Link>
                          )}

                          {topic.totalStories > 0 && (
                            <Link
                              className="button is-link is-outlined"
                              to={`/topics/${topic.slug}/`}
                            >
                              <FaBookOpen />
                              <span>&nbsp;{topic.totalStories}</span>
                            </Link>
                          )}
                          {topic.totalServices > 0 && (
                            <Link
                              className="button is-success is-outlined"
                              to={`/topics/${topic.slug}/`}
                            >
                              <FaGlobe />
                              <span>&nbsp;{topic.totalServices}</span>
                            </Link>
                          )}
                        </div>
                        <p className="position-absolute guide">
                          <Link
                            className="is-bold"
                            to={`/topics/${topic.slug}/`}
                          >
                            View details{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#007bff"
                              style={{ verticalAlign: "middle" }}
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path>
                            </svg>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default TopicsPage;