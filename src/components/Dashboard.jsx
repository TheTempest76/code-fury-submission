import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const images = [
    "/volunteerImages/img3.avif",
    "/volunteerImages/img4.avif",
    "/volunteerImages/img5.jpg",
    "/volunteerImages/img6.jpg",
    "/volunteerImages/img7.jpeg",
    "/volunteerImages/img8.jpg",
    "/volunteerImages/img9.jpg",
    "/volunteerImages/img10.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      redirect("/volunteer"); // Redirect to the volunteer page after logout
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  const previousImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const nextImageIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

    return (
      <div className="p-10 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome, {user.email.split("@")[0]}!
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
  
        <div className="w-full p-2 text-center text-2xl rounded-xl">
  <h1 className="text-gray-300 font-black">
    History is a series of events marked by challenges, including tragedies and natural disasters.
  </h1>
  <p className="text-white">
    Your contributions—whether financial, in the form of time, or resources—can make a significant difference for those in need. By uniting our efforts, we can uplift communities and offer vital support during challenging times. Learn more and make a difference by visiting{" "}
    <a className="underline" href="https://pmnrf.gov.in/en/">
      PMNRF
    </a> or supporting{" "}
    <a className="underline" href="https://www.gofundme.com/c/act/flood-relief">
      Flood Relief efforts
    </a>.
  </p>
</div>

  
        {/* Image Slider */}
        <div className="relative w-full h-90 overflow-hidden rounded-lg m-auto">
          <div className="flex items-center justify-center text-center space-x-4 transition-transform duration-700 ease-in-out">
            <img
              src={images[previousImageIndex]}
              alt={`Image ${previousImageIndex + 1}`}
              className="w-1/4 h-full object-cover opacity-15 transform scale-10 transition-transform duration-700 ease-in-out rounded-full inline-block"
            />
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-2/4 h-full object-cover transform scale-100 transition-transform duration-700 ease-in-out rounded-2xl inline-block"
            />
            <img
              src={images[nextImageIndex]}
              alt={`Image ${nextImageIndex + 1}`}
              className="w-1/4 h-full object-cover opacity-15 transform scale-10 transition-transform duration-700 ease-in-out rounded-full inline-block"
            />
          </div>
        </div>
  
        {/* Image navigation buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
  
        {/* Google Form Embed */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center text-white">
            Fill out this form and we'll connect you with those who need you
          </h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdeo4X_Uf_L7IEb5IBhnqxZrrOYzKkyIPAeszH5yzebyMm9Eg/viewform?embedded=true"
            width="100%"
            height="1000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="w-full rounded-xl shadow-lg mt-4"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
}