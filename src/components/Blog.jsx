import { motion } from "framer-motion";
import data from "../data/data.json";

export default function Blog() {
  const { blogPosts } = data;

  return (
    <article className="blog" data-page="blog">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="h2 article-title">Blog</h2>
      </motion.header>

      <motion.section
        className="blog-posts"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <ul className="blog-posts-list">
          {blogPosts.map((post, i) => (
            <motion.li
              className="blog-post-item"
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a target="_blank" rel="noopener noreferrer" href={post.url}>
                <figure className="blog-banner-box">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time>{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </article>
  );
}