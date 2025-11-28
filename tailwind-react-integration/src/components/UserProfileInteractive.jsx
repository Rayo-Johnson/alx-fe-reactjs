function UserProfileInteractive() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
      {/* Image Container with Multiple Effects */}
      <div className="relative group mb-6">
        {/* Main Image */}
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto border-4 border-blue-500 group-hover:border-purple-500 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-md group-hover:shadow-xl"
        />
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out blur-xl"></div>
        
        {/* Online Status Badge */}
        <div className="absolute bottom-2 right-1/3 w-5 h-5 bg-green-500 rounded-full border-4 border-gray-100 animate-pulse"></div>
      </div>
      
      {/* Interactive Heading with Multiple Effects */}
      <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 hover:text-blue-500 my-3 sm:my-4 text-center font-bold transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 transform">
        John Doe
      </h1>
      
      {/* Job Title with Fade In */}
      <p className="text-xs sm:text-sm text-gray-500 text-center font-semibold mb-3 opacity-80 hover:opacity-100 transition-opacity duration-300">
        Senior Full Stack Developer
      </p>
      
      {/* Bio Paragraph */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center leading-relaxed mb-6">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
      
      {/* Interactive Buttons */}
      <div className="flex gap-3 justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:scale-95">
          Follow
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg active:scale-95">
          Message
        </button>
      </div>
      
      {/* Stats with Hover Effects */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-300">
        <div className="text-center group cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <p className="text-xl sm:text-2xl font-bold text-blue-800 group-hover:text-blue-500 transition-colors duration-300">127</p>
          <p className="text-xs text-gray-600">Posts</p>
        </div>
        <div className="text-center group cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <p className="text-xl sm:text-2xl font-bold text-blue-800 group-hover:text-blue-500 transition-colors duration-300">2.5K</p>
          <p className="text-xs text-gray-600">Followers</p>
        </div>
        <div className="text-center group cursor-pointer transform hover:scale-110 transition-transform duration-300">
          <p className="text-xl sm:text-2xl font-bold text-blue-800 group-hover:text-blue-500 transition-colors duration-300">340</p>
          <p className="text-xs text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfileInteractive;
