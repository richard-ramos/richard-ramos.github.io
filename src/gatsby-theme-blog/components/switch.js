import React from "react"
import { Styled } from "theme-ui"

export const Switch = (props) => {
  const { checked, checkedIcon, uncheckedIcon, onChange } = props
  const onClick = () => {
    console.log("A")
    onChange()
  }
  return (
    <Styled.a onClick={onClick} href="#">
      {checked ? uncheckedIcon : checkedIcon}
    </Styled.a>
  )
}

Switch.defaultProps = {
  checked: false,
  uncheckedIcon: false,
  checkedIcon: false,
  onChange: () => {},
}

export default Switch
