import React from 'react'
import PropTypes from 'prop-types'

function Header({ link, date, timeToRead }) {
	return (
		<div>
			{post.frontmatter.link && <a href={post.frontmatter.link}>{header}</a>}
			{!post.frontmatter.link && header}
		</div>
	)
}

Header.propTypes = {}

export default Header
