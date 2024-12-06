import React, { useState } from 'react';
import Comment from './Comment';
import "./PostStyle.css";

interface PostProps {
  imageUrl: string;
  description: string;
  likes: number;
};

interface CommentType {
  username: string;
  content: string;
};

const Post = ({ imageUrl, description, likes }: PostProps) => {
  const [comments, setComments] = useState<CommentType[]>([
    { username: 'user1', content: '따봉' },
    { username: 'user2', content: '헉' }
  ]);

  const [newComment, setNewComment] = useState<string>('');
  const [cnt, setCnt] = useState(1);
  const [like, setLike] = useState(likes);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { username: `user${cnt}`, content: newComment }]);
      setNewComment('');
      setCnt(cnt + 1);
    }
  };

  const handleAddLike = () => {
    setLike(like + 1);
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="post">
      <img src={imageUrl} alt={description} />
      <div className="post-info">
        <p>{description}</p>

        <div className="icon">
          <div className="like-icon" onClick={handleAddLike}></div>
          <div className='like'>{like}</div>
          <div className="comment-icon" onClick={toggleOpen}></div>
        </div>
        {isOpen && (
          <div className="comment-box" >
          <div className="comments">
            {comments.map((comment, index) => (
              <Comment key={index} username={comment.username} content={comment.content} />
            ))}
          </div>

          {/* 댓글 입력 */}
          <div className="add-comment">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button onClick={handleAddComment}>Post</button>
          </div>
        </div>
        )}  
      </div>
    </div>
  );
};

export default Post;