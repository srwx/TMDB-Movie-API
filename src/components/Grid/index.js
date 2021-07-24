import React from "react"
// Styles
import { Wrapper, Content } from "./Grid.styles"

function Grid({ header, children }) {
  // children prop เป็น default prop ที่ไว้เข้าถึง component ลูกใน Grid (ดู component ลูกของ Grid ในไฟล์ Home.js)
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Grid
