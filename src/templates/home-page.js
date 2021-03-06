import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      campaign={frontmatter.campaign}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        campaign {
          image
          heading
          text
          slug
        }
        offerings {
          blurbs {
            image
            text
            slug
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
