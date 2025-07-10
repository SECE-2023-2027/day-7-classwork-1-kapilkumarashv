export const metadata = {
  title: "Multi User Auth (No JSON)",
  description: "Register/login multiple users using localStorage keys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: 20 }}>{children}</body>
    </html>
  );
}
