import UserProfile from './UserProfile';

function ProfileGallery() {
  const users = [
    {
      name: "John Doe",
      title: "Developer at Example Co.",
      bio: "Loves to write code and explore new technologies.",
      image: "https://via.placeholder.com/150/0000FF/808080"
    },
    {
      name: "Jane Smith",
      title: "Designer at Creative Studio",
      bio: "Passionate about creating beautiful and functional designs.",
      image: "https://via.placeholder.com/150/FF0000/FFFFFF"
    },
    {
      name: "Mike Johnson",
      title: "Product Manager at Tech Corp",
      bio: "Dedicated to building products that users love.",
      image: "https://via.placeholder.com/150/00FF00/000000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          👥 Team Profiles
        </h1>
        <p className="text-white text-xl">
          Meet our amazing team members!
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {users.map((user, index) => (
          <div key={index} className="user-profile bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
            <img 
              src={user.image} 
              alt={user.name}
              className="rounded-full w-36 h-36 mx-auto border-4 border-white shadow-md"
            />
            <h2 className="text-xl text-blue-800 my-4 text-center font-bold">
              {user.name}
            </h2>
            <p className="text-gray-700 text-sm text-center font-semibold mb-2">
              {user.title}
            </p>
            <p className="text-gray-600 text-base text-center">
              {user.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGallery;
