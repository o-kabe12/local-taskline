import Header from "./components/layout/Header";
import "./styles/globals.css";

export const metadata = {
  title: "Local Taskline | ローカルでタスク管理",
  description: "Local Taskline | ローカルでタスク管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
