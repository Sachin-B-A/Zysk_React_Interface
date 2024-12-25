import React from "react";

export default function BlogPosts() {
  const posts = [
    {
      image: "./uiimage.png",
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      authorImage: "https://randomuser.me/api/portraits/women/1.jpg", 
      date: "20 Jan 2024",
    },
    {
      image: "./linear.png",
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
      date: "19 Jan 2024",
    },
    {
      image: "./last.png",
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "18 Jan 2024",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h5 className="text-sm uppercase font-semibold text-purple-600">Our blog</h5>
          <h2 className="text-4xl font-bold mb-4">Latest blog posts</h2>
          <p className="text-gray-600">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{post.author}</span> | <span className="ml-2">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
}
