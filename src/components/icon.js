import React from "react"
import PropTypes from "prop-types"

import Link from "../../content/assets/link.svg"
import Article from "../../content/assets/article.svg"
import Video from "../../content/assets/video.svg"
import Podcast from "../../content/assets/podcast.svg"
import External from "../../content/assets/external.svg"

const icons = {
  Link: Link,
  Article: Article,
  Video: Video,
  Podcast: Podcast,
  External: External,
}

function Icon({ type }) {
  let Icon = icons[type]
  if (!Icon) {
    Icon = icons.Article
  }
  return <Icon />
}

Icon.propTypes = {
  type: PropTypes.string,
}

export default Icon
