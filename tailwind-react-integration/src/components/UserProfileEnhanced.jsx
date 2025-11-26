function UserProfileEnhanced() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Profile Image with hover effect */}
      <div className="relative group">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-36 h-36 mx-auto border-4 border-blue-500 group-hover:border-purple-500 transition-colors duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Name */}
      <h1 className="text-xl text-blue-800 my-4 text-center font-bold hover:text-purple-600 transition-colors duration-300 cursor-pointer">
        John Doe
      </h1>

      {/* Job Title */}
      <p className="text-gray-700 text-sm text-center font-semibold mb-3">
        Senior Developer at Example Co.
      </p>

      {/* Bio */}
      <p className="text-gray-600 text-base text-center leading-relaxed">
        Loves to write code and explore new technologies. Passionate about building amazing user experiences.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm">
          Follow
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm">
          Message
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-300">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-800">127</p>
          <p className="text-xs text-gray-600">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-800">2.5K</p>
          <p className="text-xs text-gray-600">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-800">340</p>
          <p className="text-xs text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileEnhanced;
