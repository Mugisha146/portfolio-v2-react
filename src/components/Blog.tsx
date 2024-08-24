// src/components/Blog.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/slices/blogSlice"; // Update the import path if necessary
import { RootState, AppDispatch } from "../redux/store"; // Import types
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  ); // Adjust according to your state structure

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs()); // Fetch blogs when the component mounts
    }
  }, [status, dispatch]);

  return (
    <section id="blogs" className="py-10">
      <h1 className="text-center text-5xl font-bold text-black mb-10">
        Recently Blogs
      </h1>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" &&
          blogs.map((blog: any) => (
            <div key={blog.id} className="blog border-b-2 pb-5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 rounded-md mb-4"
              />
              <div className="blog-info">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 mb-4">
                  {blog.description.slice(0, 100)}...
                </p>
                <Link to={`/blog/${blog.id}`}>
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-between mt-6">
        <button id="prevBtn" className="py-2 px-4 border rounded">
          Previous
        </button>
        <button id="nextBtn" className="py-2 px-4 border rounded">
          Next
        </button>
      </div>
    </section>
  );
};

export default Blog;
