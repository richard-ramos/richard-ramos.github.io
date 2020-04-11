import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = ({ socialLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: { email },
    },
  } = data

  return (
    <footer className="site-footer h-card">
      <div className="wrapper">
        <div className="footer-col-wrapper">
          <div className="footer-col">
            <ul
              className="contact-list"
              css={css({ listStyle: "none", p: 0, mt: 5 })}
            >
              <li className="p-name">
                <Styled.a
                  className="black-link"
                  as={Link}
                  to="notes/about"
                  css={css({ textDecoration: "none", fontSize: 20 })}
                >
                  About
                </Styled.a>
              </li>
              <li>
                <Styled.a
                  className="black-link u-email"
                  href={"mailto:" + email}
                  to="notes/about"
                >
                  {email}
                </Styled.a>
                {` `}&bull;{` `}
                {socialLinks.map((platform, i, arr) => (
                  <Fragment key={platform.url}>
                    <Styled.a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      css={css({ textDecoration: "none" })}
                    >
                      {platform.name}
                    </Styled.a>
                    {arr.length - 1 !== i && (
                      <Fragment>
                        {` `}&bull;{` `}
                      </Fragment>
                    )}
                  </Fragment>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
