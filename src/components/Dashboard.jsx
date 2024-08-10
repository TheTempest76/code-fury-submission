import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

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

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Welcome, {user.email.split("@")[0]}!
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card 1 */}
        <div className="bg-white p-4  rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 1</h2>
          <p className="mt-2 text-gray-600">
            This is a description of the card.
          </p>
        </div>
        {/* Example Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 2</h2>
          <p className="mt-2 text-gray-600">
            This is another description of the card.
          </p>
        </div>
        {/* Example Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 3</h2>
          <p className="mt-2 text-gray-600">
            This is yet another description of the card.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 3</h2>
          <p className="mt-2 text-gray-600">
            This is yet another description of the card.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 3</h2>
          <p className="mt-2 text-gray-600">
            This is yet another description of the card.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Card Title 3</h2>
          <p className="mt-2 text-gray-600">
            This is yet another description of the card.
          </p>
        </div>
      </div>
    </div>
  );
}