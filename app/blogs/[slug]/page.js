import { notFound } from "next/navigation";
import { getPost } from "../../../lib/posts";

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) return notFound();
  return (
    <article className="py-12 max-w-3xl">
      <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
      <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
      <div className="prose prose-gray max-w-none mt-6">
        {post.content.split("\n").map((p, i) => (
          <p key={i} className="text-gray-800 leading-7">{p}</p>
        ))}
      </div>
    </article>
  );
}
