import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/lib/posts";

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

