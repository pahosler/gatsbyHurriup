import React from 'react'
import PropTypes from 'prop-types'
import GalleryPageTemplate from '../../components/GalleryPageTemplate'

const GalleryPagePreview = ({ entry, getAsset }) => {
  const entryImage = entry.getIn(['data', 'images'])
  const images = entryImage ? entryImage.toJS() : []

  return (
    <GalleryPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      images={{ images }}
    />
  )
}

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GalleryPagePreview
