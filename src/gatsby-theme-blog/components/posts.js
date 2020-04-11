import React from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <main css={css({flex: "1 0 auto"})}>
      <ul className="post-list" css={css({ p: 0 })}>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <li key={node.slug} css={css({ mb: 1, p: 0, ml: 0 })}>
              <SEO title="Home" keywords={keywords} />
              <span
                css={css({
                  minWidth: 60,
                  display: "inline-block",
                })}
              >
                {node.date}
              </span>

              <Styled.a
                className="black-link post-link-layout"
                css={css({
                  ml: "10%",
                  display: "inline",
                  textDecoration: "none"
                })}
                as={Link}
                to={node.slug}
              >
                {title}
              </Styled.a>
            </li>
          )
        })}
      </ul>
    </main>
    <Footer socialLinks={socialLinks} />
  </Layout>
)

export default Posts
