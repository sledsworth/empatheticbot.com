import React from "react"
import Moon from "../../static/Moon.svg"
import Sun from "../../static/Sun.svg"

class DarkModeSwitch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDarkMode: false,
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
    this.toggleDarkModeOn = this.toggleDarkModeOn.bind(this)
    this.toggleDarkModeOff = this.toggleDarkModeOff.bind(this)
  }

  componentDidMount() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addListener(this.toggleDarkModeOn)

    window
      .matchMedia("(prefers-color-scheme: light)")
      .addListener(this.toggleDarkModeOff)
  }

  toggleDarkModeOn(e) {
    if (e.matches) {
      this.setState({ isDarkMode: true })
      document.querySelector("body").classList.remove("light")
      document.querySelector("body").classList.add("dark")
    }
  }

  toggleDarkModeOff(e) {
    if (e.matches) {
      this.setState({ isDarkMode: false })
      document.querySelector("body").classList.remove("dark")
      document.querySelector("body").classList.add("light")
    }
  }

  toggleDarkMode() {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }))
    document.querySelector("body").classList.toggle("dark")
    document.querySelector("body").classList.toggle("light")
  }

  componentWillUnmount() {
    window
      .matchMedia("(prefers-color-scheme: light)")
      .removeListener(this.toggleDarkModeOff)
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeListener(this.toggleDarkModeOn)
  }

  render() {
    return (
      <button
        className="dark-mode-toggle--button"
        onClick={this.toggleDarkMode}
      >
        {this.state.isDarkMode ? <Sun /> : <Moon />}
      </button>
    )
  }
}

export default DarkModeSwitch
