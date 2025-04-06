import { useState } from "react";
import { Search } from "lucide-react";

const VehicleSearch = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!vehicleNumber.trim()) return;

    setLoading(true);

    // Simulated API call (replace with real logic)
    setTimeout(() => {
      setVehicleDetails({
        owner: "Uma Bisht",
        model: "Hyundai Verna",
        registrationDate: "2021-08-20",
        fuelType: "Petrol",
        status: "Missing",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border dark:border-gray-700 transition-all">
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-white">
          Vehicle Lookup
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter Vehicle Number (e.g. DL3CAB1234)"
            className="w-full flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
          >
            <Search size={18} /> Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-600 dark:text-gray-300 animate-pulse">
            🔍 Fetching vehicle data...
          </p>
        )}

        {vehicleDetails && !loading && (
          <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-xl shadow-sm space-y-3 text-gray-800 dark:text-gray-200 transition-all border border-blue-200 dark:border-gray-600">
            <p><strong>🚗 Owner:</strong> {vehicleDetails.owner}</p>
            <p><strong>📄 Model:</strong> {vehicleDetails.model}</p>
            <p><strong>🗓️ Registration Date:</strong> {vehicleDetails.registrationDate}</p>
            <p><strong>⛽ Fuel Type:</strong> {vehicleDetails.fuelType}</p>
            <p><strong>⚠️ Status:</strong> <span className="text-red-500 font-semibold">{vehicleDetails.status}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleSearch;
