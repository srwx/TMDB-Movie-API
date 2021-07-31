// Session storage
export const isPresistedState = (state) => {
  const sessionState = sessionStorage.getItem(state) // return ค่าที่เก็บอยู่ใน sesssion, return null ถ้าไม่มีค่าใน session

  // return a && b จะ return a เมื่อ a เป็น falsy, หาก a เป็น truly จะ return b
  // falsy คือ false, สตริงว่าง, เลข 0, undefined, null, NaN
  // ค่าที่เหลือนอกจากด้านบนคือ truly
  // -------------------------------------------------------------------------------------
  // sessionStorage จะเก็บค่าได้เฉพาะ string เท่านั้น ดังนั้น ถ้าเราจะส่งค่าออกไปจาก sessionStorge เราต้องแปลงค่าจาก string เป็น JSON ด้วย JSON.parse()
  return sessionState && JSON.parse(sessionState)
  // จาก return ด้านบน ฟังก์ชันนี้จะ return sessionState เมื่อ sessionState เป็น falsy ตรงกันข้าม จะ return JSON.parse(sessionState)
}
