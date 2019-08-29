import React from "react"
import PropTypes from "prop-types"

import Link from "../../static/link.svg"
import Article from "../../static/article.svg"
import Video from "../../static/video.svg"
import Podcast from "../../static/podcast.svg"
import External from "../../static/external.svg"
import Download from "../../static/download.svg"

const icons = {
  Link: Link,
  Article: Article,
  Video: Video,
  Podcast: Podcast,
  External: External,
  Download: Download,
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
