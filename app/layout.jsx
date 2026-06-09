export const metadata = {
  title: "Wedding Album",
  description: "Album fotografico del matrimonio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
