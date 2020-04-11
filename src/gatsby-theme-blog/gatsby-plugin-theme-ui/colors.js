import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const white1 = "#fdfdfd"
const black = "#111111"

export default merge(defaultThemeColors, {
  background: white1,
  text: black,
  primary: "#1B1F23",
  secondary: "#515151",
  heading: "#373737",
  highlight: '#eeeeee',
  prism: {
    color: "#f00",
    background: white1,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },

  modes: {
    dark: {
      primary: '#cdcdcd',
      highlight: '#44404e',
      prism: {
        background: defaultThemeColors.modes.dark.background,
      },
    },
  },
})
