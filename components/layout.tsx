import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='container flex flex-wrap items-center justify-between mx-auto'>
        {children}
      </main>
      <Footer />
    </>
  );
}
