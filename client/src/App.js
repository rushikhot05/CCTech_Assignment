import './App.css';
import Post from './components/Post';
import Upload from "./components/Upload"
import Topbar from "./components/TopBar"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Topbar />
      <Upload />
      <Post/>
      <Footer />
    </div>
  );
}

export default App;