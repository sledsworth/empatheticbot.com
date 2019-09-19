function changeTheme() {
  document.querySelector("body").classList.toggle("dark")
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener(
    e => e.matches && document.querySelector("body").classList.add("dark")
  )

window
  .matchMedia("(prefers-color-scheme: light)")
  .addListener(
    e => e.matches && document.querySelector("body").classList.remove("dark")
  )

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  changeTheme()
}
