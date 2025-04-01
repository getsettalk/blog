// src/app/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <ul className="mt-4 space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-500">
              {post.title} - {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
