import React from 'react'
import 'css-doodle'

interface DoodleProps {
  rule: string
}

const Doodle = React.forwardRef((props: DoodleProps, ref) => (
  <css-doodle ref={ref} grid="15">
    {props.rule}
  </css-doodle>
))
Doodle.displayName = 'Doodle'

export default Doodle
