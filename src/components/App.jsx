import { getAllTrendingFilms, getAllSearchFilms } from "ServiceApi/AllApiFetch";
import Header from "./Heder/Heder";
import HomePage from "pages/Homepage";

const App = () => {

  return (
    <div>
      
      <Header/>
      <HomePage/>
    </div>
  );
};


export default App