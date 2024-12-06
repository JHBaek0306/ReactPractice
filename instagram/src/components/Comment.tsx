import React from 'react';

type CommentProps = {
  username: string;
  content: string;
};

const Comment = ({ username, content }: CommentProps) => {
  return (
    <div className="comment">
      <strong>{username}</strong> {content}
    </div>
  );
};

export default Comment;