import fs from 'fs'
import path from 'path'

export default function Resilience() {
  return null
}

export async function getServerSideProps({ res }) {
  const filePath = path.join(process.cwd(), 'public', 'resilience.html')
  const html = fs.readFileSync(filePath, 'utf8')
  res.setHeader('Content-Type', 'text/html')
  res.write(html)
  res.end()
  return { props: {} }
}