import NavBar from './components/NavBar';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <div className="h-screen w-128 px-20 overflow-x-hidden">
      <NavBar />
      <div className="z-30 sticky top-0 w-128 h-30 overflow-hidden mx-1 bg-white bg-opacity-100">
        <SearchBar />
        <CategoryFilter />
      </div>
      <PostContainer />
    </div>
  );
}

export default App;