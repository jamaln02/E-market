import MainLayout from "./MainLayout";
import "./globals.css";

export const metadata = {
  title: "E Market",
  description: "E Market Shopping Fast And Easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
