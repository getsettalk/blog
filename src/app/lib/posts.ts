import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define a type for the blog post
export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), "src/app/posts");

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    content,
  };
}

// Get all posts
export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .map((filename) => getPostBySlug(filename.replace(".md", "")))
    .filter((post): post is Post => post !== null);
}
