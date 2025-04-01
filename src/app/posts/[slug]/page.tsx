// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/app/lib/posts";

type BlogPostProps = {
  params: Promise<{ slug: string }>; // ✅ Fix: Define as a Promise
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ Corrected usage of `params`
export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params; // ✅ Await the params

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
