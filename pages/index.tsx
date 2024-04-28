import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="container mx-auto px-4 py-20 ">
          <div className="justify-center text-center">
           <h1 className="text-3xl font-bold mb-4">Welcome to NewsNook!</h1>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </main>
    </div> // Added closing tag for the div element
  );
}

export default HomePage;