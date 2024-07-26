import React from "react";
import Link from "next/link";
import { getPosts } from "@/app/api/blog";
import PostCard from "./PostCard";

const BlogLoopServer = async () => {
  const posts = await getPosts("industry-news");

  return (
    <section className="blog-loop">
      <div className="_container">
        <div className="blog-loop__body">
          <div className="posts-row">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLoopServer;
