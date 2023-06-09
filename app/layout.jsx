import "./globals.css";
import Navegation from "@/components/Navegation";

export const metadata = {
  title: "My First Next App",
  description: "Generated by create next app",
  keywoard: "nextjs, react, typescript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css"></link>
      </head>
      <body>
        <Navegation /> 
        <div className="container p-4">
        {children}

        </div>
      </body>
    </html>
  );
}
