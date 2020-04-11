import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui"
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "deepmerge"
import "typeface-fira-code"

const theme = merge(blogTheme, wavesTheme)


export default merge(theme, {
  fonts: {
    heading: "'Fira Code', monospace",
    monospace: "'Fira Code', monospace",
    body: "'Fira Code', monospace",
  },

  styles: {
    h2: {
      variant: 'text.heading',
      fontSize: 20,
      mt: 4
    },
    pre: {
      color: 'text',
      fontSize: 11,
      p: 0 
    },

    waves: {
    default: {
      StickerContainer: {
        width: ["100vw", "60%"],

      },
      Sticker: {
        position: ["static", "sticky"],
        width: "100%",
        height: ["100%", "60vh"],
        top: ["auto", "20vh"],
        border: ["none", "0px solid"],
        borderColor: "secondary",
      },
    }
  }
  
  }

})
