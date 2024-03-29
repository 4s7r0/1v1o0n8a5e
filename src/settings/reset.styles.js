import { css } from 'styled-components'

// global styles
export default css`
  * {
    box-sizing: border-box;
  }
  :link,
  :visited {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code {
    font-size: 1.6em;
  }
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  body,
  html,
  p,
  blockquote,
  fieldset,
  input {
    margin: 0;
    padding: 0;
  }
  a img,
  :link img,
  :visited img {
    border: none;
  }
  address {
    font-style: normal;
  }
  :focus {
    outline: none;
  }
`
