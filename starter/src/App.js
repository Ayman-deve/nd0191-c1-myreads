import "./App.css";
import { useEffect } from "react";
import { Route,Routes } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import MyReadsPage from "./MyReadsPage";
import SearchPage from "./SearchPage";


function App() {


  useEffect(()=>{
     BooksAPI.getAll().then((books) => {
      console.log('My Books are', books)
     })
  })
  return (
    <div className="app">
      {/* Define our main routes */}
      <Routes>
        <Route exact path="/" element={ <MyReadsPage/> }/>
        <Route path="/search" element={ <SearchPage/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
