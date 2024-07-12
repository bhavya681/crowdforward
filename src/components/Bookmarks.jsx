import React, { useState, useEffect } from "react";
import { MdBookmarkRemove } from "react-icons/md";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = () => {
      const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(storedBookmarks);
    };

    fetchBookmarks();
  }, []);

  const handleRemoveBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <section id="bookmarks" className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Bookmarked Campaigns
        </h2>
        {bookmarks.length === 0 ? (
          <p className="text-center text-white">No bookmarks yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={bookmark.image}
                  alt={bookmark.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {bookmark.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{bookmark.description}</p>
                  <button
                    onClick={() => handleRemoveBookmark(bookmark.id)}
                    className="block text-center bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
                  >
                   <MdBookmarkRemove/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Bookmarks;
