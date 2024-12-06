import React from 'react';
import Post from './Post';
import feedImage from "../assets/images/feedImage.jpg";

const posts = [
  { id: 1, imageUrl: feedImage, description: '멀리서 보아야 예쁘다 너도 그렇다', likes: 120 },
  ];

const Feed = () => {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} imageUrl={post.imageUrl} description={post.description} likes={post.likes} />
      ))}
    </div>
  );
};

export default Feed;