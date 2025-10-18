import React from 'react'
import { useQuery } from '@tanstack/react-query'

// Fetch function
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export default function PostsComponent() {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, 
  })

  if (isLoading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Posts'}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
