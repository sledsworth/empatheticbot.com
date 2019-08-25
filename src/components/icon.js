import React from "react"
import PropTypes from "prop-types"

import Link from "../../content/assets/link.svg"
import Article from "../../content/assets/article.svg"
import Video from "../../content/assets/video.svg"
import Podcast from "../../content/assets/podcast.svg"
import External from "../../content/assets/external.svg"

const icons = {
  link: Link,
  article: Article,
  video: Video,
  podcast: Podcast,
  external: External,
}

function Icon({ type }) {
  let Icon = icons[type]
  if (!Icon) {
    Icon = icons.article
  }
  return <Icon />
}

Icon.propTypes = {
  type: PropTypes.string,
}

export default Icon
