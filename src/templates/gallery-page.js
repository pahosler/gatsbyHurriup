import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import GalleryPageTemplate from '../components/GalleryPageTemplate'

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <GalleryPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      images={frontmatter.images}
      note={frontmatter.note}
    />
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!){
    markdownRemark(id: { eq: $id }){
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        images {
          image
          note
        }
      }
    }
  }
  `
