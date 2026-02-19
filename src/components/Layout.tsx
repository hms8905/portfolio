import Header from "./layout/Header";
import Footer from "./layout/Footer";

type LayoutProps = {
  children: React.ReactNode;
  headerProps?: { activeId?: string };
};

export default function Layout({ children, headerProps }: LayoutProps) {
  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer />
    </>
  );
}