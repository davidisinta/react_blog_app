import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (

    <BrowserRouter> 
    <div className="App">
      
      <h1> My awesome Blog!!!</h1>

      <div id="page-body">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
      

        </Routes>

        
      </div>
    </div>

    </BrowserRouter>

    
  );
}

export default App;
