import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card title="API Data">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {filtered.map((post) => (
          <li key={post.id} className="p-3 border rounded dark:border-gray-700">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{post.body}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ApiData;
