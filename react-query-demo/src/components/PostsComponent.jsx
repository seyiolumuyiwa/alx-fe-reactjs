import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p className="text-center text-blue-600">Loading posts...</p>;
  if (isError) return <p className="text-red-600 text-center">Error: {error.message}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>

      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-6"
      >
        Refetch Posts
      </button>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
