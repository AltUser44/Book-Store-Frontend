import React, { useContext } from "react";
import { FaBook, FaBullseye, FaTrophy } from "react-icons/fa";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import userImg from "../assets/John.jpg";


// Register ChartJS components
ChartJS.register(BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Books Read",
        data: [5, 8, 15, 10, 20, 25, 30],
        backgroundColor: "#4caf50",
      },
    ],
  };

  const doughnutData = {
    labels: ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#6C63FF", "#FFD700", "#03a9f4", "#e91e63"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const handleNavigate = () => {
    navigate("/user-profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 flex flex-col">
      <div className="flex-grow flex justify-center px-8">
        <div className="w-full max-w-7xl bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-xl rounded-3xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-white">
  Welcome Back, {user?.displayName || "Guest"}!
</h1>
<img
  src={user?.photoURL || userImg}
  alt="User Profile"
  className="w-16 h-16 rounded-full mx-auto mt-4"
/>

          <p className="text-center text-gray-300">Here's your reading summary:</p>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4">
              <FaBook className="text-4xl text-purple-300" />
              <div>
                <h2 className="text-2xl font-bold text-white">12 Books</h2>
                <p className="text-gray-300">Viewed last week</p>
              </div>
            </div>
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4">
              <FaBullseye className="text-4xl text-purple-300" />
              <div>
                <h2 className="text-2xl font-bold text-white">30 Books</h2>
                <p className="text-gray-300">Read this month</p>
              </div>
            </div>
            <div className="p-4 bg-gray-700 rounded-xl shadow-md flex items-center space-x-4">
              <FaTrophy className="text-4xl text-purple-300" />
              <div>
                <h2 className="text-2xl font-bold text-white">50 Milestones</h2>
                <p className="text-gray-300">Achieved this year</p>
              </div>
            </div>
          </div>

          {/* Graphs Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">Monthly Reading Progress</h3>
              <Bar data={barData} options={barOptions} />
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-white mb-4">Reading Preferences</h3>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>

          {/* Update Button */}
          <div className="flex justify-end">
            <button
              onClick={handleNavigate}
              className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Any Updates?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
