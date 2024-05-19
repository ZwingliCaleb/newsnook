import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-r from-slate-400 via-sky-300 to-sky-800 ">
        <div className="container mx-auto px-4 py-20">
          <div className="justify-center text-center">
           <h1 className="text-3xl pb-20 font-semibold mb-4"><span className="font-bold">N</span>ewsnook.</h1>
          </div>
          <div className="justify-center items-center pb-48 lg:pb-64">
            <SearchBar />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div> // Added closing tag for the div element
  );
}

export default HomePage;
