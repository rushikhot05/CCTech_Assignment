import './App.css';
import Post from './components/Post';
import Upload from "./components/Upload"
import Header from "./components/Header"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Upload />
      <Post/>
      <Footer />
    </div>
  );
}

export default App;