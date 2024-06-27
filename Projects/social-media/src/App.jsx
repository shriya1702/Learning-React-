import "/src/App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Sidebar from "./components/Sidebar.jsx"
import CreatePost from "./components/CreatePost.jsx";
import Post from "./components/Post.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";


function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <>
    <div className = "app-container">
    <Sidebar selectedTab= {selectedTab}></Sidebar>
    <div className="content">
      <Header/>
      {selectedTab === "Home" ? (
              <PostList></PostList>)
            :(
              <CreatePost></CreatePost>

            )}
      <Footer></Footer>
    </div>
   
    </div>
    

    </>






  )
}

export default App
