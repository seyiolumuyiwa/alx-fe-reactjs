import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Blog Post ID: {id}</h2>
      <p>This is a dynamically loaded blog post with ID {id}.</p>
    </div>
  );
}
