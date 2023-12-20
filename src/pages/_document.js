import { Box } from '@mui/material'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Box sx={{ color: "primary.text", bgcolor: 'primary.main' }}>
        <body>
          <Main />
          <NextScript />
        </body>
      </Box>
    </Html>
  )
}
