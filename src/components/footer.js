import React from "react"
import styled from "styled-components"

const CopyRef = styled.b`
  color: #151515;
  font-weight: 900;
`

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {/*<img src={signature} alt="Alexandre Reis"/><br/>*/}
        <h2 className="title">Alexandre</h2><br/>
        <CopyRef>COPYRIGHT © 2020, ALEXANDRE REIS</CopyRef>
      </div>
    </footer>
  )
}

export default Footer
