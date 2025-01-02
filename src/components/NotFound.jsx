import image from "/notfound.png";
import { useNavigate } from "react-router";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center max-w-full h-screen bg-gray-100">
      <img
        src={image}
        alt="No image found"
        className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
      />
      <button
        className="bg-blue-600 p-3 font-semibold text-white rounded-sm"
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
}
