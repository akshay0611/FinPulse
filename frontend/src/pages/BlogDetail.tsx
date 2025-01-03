import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'; // Import icons

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState<any>(null);
  const [allBlogs, setAllBlogs] = useState<any[]>([]); // Store all blogs
  const [prevBlogId, setPrevBlogId] = useState<string | null>(null);
  const [nextBlogId, setNextBlogId] = useState<string | null>(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch the current blog by ID
        const response = await axios.get(`https://finpulsebackend.vercel.app/api/blog?id=${id}`);
        const blogData = response.data.blog;
        
        if (blogData) {
          setBlog(blogData);
          // Set IDs for previous and next blogs
          const currentIndex = allBlogs.findIndex(b => b._id === id);
          setPrevBlogId(allBlogs[currentIndex - 1]?._id || null); // Set previous blog ID
          setNextBlogId(allBlogs[currentIndex + 1]?._id || null); // Set next blog ID
        } else {
          console.error('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    const fetchAllBlogs = async () => {
      try {
        // Fetch all blogs to determine the next/previous blog
        const response = await axios.get('https://finpulsebackend.vercel.app/api/blog');
        setAllBlogs(response.data.blogs); // Store all blogs
      } catch (error) {
        console.error('Error fetching all blogs:', error);
      }
    };

    fetchAllBlogs();
    if (id) {
      fetchBlog();
    }
  }, [id, allBlogs]); // Re-run when allBlogs changes

  const handleNavigation = (blogId: string | null) => {
    if (blogId) {
      navigate(`/blog/${blogId}`);
    }
  };

  return (
    <div className="bg-[#f8f9fa]">
      <Navbar />

      <section className="py-16 px-0 mt-20 w-full">
        {blog ? (
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-xl">
            {/* Image */}
            <img
              src={blog.image}
              alt="Blog post"
              className="w-[940px] h-[400px] object-cover rounded-xl mb-8 shadow-md mx-auto"
            />

            {/* Title */}
            <h1 className="text-4xl font-extrabold text-[rgb(52,211,153)] mb-8 text-left tracking-tight leading-tight mt-8">
              {blog.title}
            </h1>

            {/* Date */}
            <p className="text-sm text-black-600 text-left mb-10 italic">
              {blog.date}
            </p>

            {/* Content */}
            <div className="text-xl text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
              {blog.content}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleNavigation(prevBlogId)}
                disabled={!prevBlogId}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-white ${
                  prevBlogId ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                <BiLeftArrow className="text-xl" />
                Previous Blog
              </button>

              <button
                onClick={() => handleNavigation(nextBlogId)}
                disabled={!nextBlogId}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-white ${
                  nextBlogId ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Next Blog
                <BiRightArrow className="text-xl" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-500">Loading blog details...</div>
        )}
      </section>
    </div>
  );
};

export default BlogDetail;
