import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/posts" element={<PostList posts={[]} />} />
        <Route path="/post/:postId" element={<PostDetail post={{}} />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default App;
