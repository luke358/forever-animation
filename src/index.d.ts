declare namespace JSX{
  interface IntrinsicElements {
    'css-doodle': {
      children?: string
      grid?: string
      ref?: React.Ref
      update?: () => void
    }
  }
}
