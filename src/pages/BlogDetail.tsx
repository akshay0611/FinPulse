import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const BlogDetail = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/blog/${id}`);  // Fetch the specific blog using the ID
        if (response.data) {
          setBlog(response.data.blog);
        } else {
          console.error('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    if (id) {
      fetchBlogDetail();
    }
  }, [id]);

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
        </div>
        ) : (
          <div className="text-center text-lg text-gray-500">Loading blog details...</div>
        )}
      </section>
    </div>
  );
  
};

export default BlogDetail;
