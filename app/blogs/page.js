import Link from "next/link";
import { posts } from "../../lib/posts";

export const metadata = { title: "Blogs" };

export default function BlogsPage() {
  return (
    <section className="py-12 max-w-3xl">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <p className="mt-2 text-gray-700">Thoughts on technology and the AI era.</p>
      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border border-gray-800 bg-gray-900 p-5 hover:bg-gray-800 transition">
            <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
            <h2 className="mt-1 text-xl font-semibold">
              <Link href={`/blogs/${post.slug}`} className="hover:text-brand">{post.title}</Link>
            </h2>
            <p className="mt-1 text-gray-300">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand">Read more →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
