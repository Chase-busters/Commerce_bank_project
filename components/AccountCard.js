import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { PiNotepadLight } from "react-icons/pi";

export default function AccountCard({ name, balance, change, positiveChange }) {
  return (
    <div className="bg-white rounded-lg border shadow-md w-[440px] min-h-[500px] flex flex-col">
      {/* Top Section */}
      <div className="border-b px-4 pt-4 pb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>

      {/* Balance Info */}
      <div className="px-4 pt-2 pb-6">
        <p className="text-2xl font-semibold">${balance}</p>
        <p className={`text-sm ${positiveChange ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      </div>


      {/* View Section */}
      <div className="bg-[#467A55] text-white px-4 py-2 font-medium text-center">
        Account Information
      </div>

      {/* Bottom Button Icons */}
      <div className="px-4 pt-4 pb-4">
        {/* Top Padding */}
        <div className="h-10" />

        {/* Icon Rows Spaced Evenly */}
        <div className="flex flex-col justify-between h-[180px]">
          {/* Row 1 */}
          <div className="flex items-center gap-3">
            <PiNotepadLight size={28} className="text-gray-700" />
            <button className="text-left text-sm hover:underline focus:outline-none">
              Transactions History
            </button>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-3">
            <FaChartLine size={28} className="text-gray-700" />
            <button className="text-left text-sm hover:underline focus:outline-none">
              Graph Projection
            </button>
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-3">
            <FaDollarSign size={28} className="text-gray-700" />
            <button className="text-left text-sm hover:underline focus:outline-none">
              Budgeting
            </button>
          </div>
        </div>

        {/* Bottom Padding */}
        <div className="h-2" />
      </div>




    </div>
  );
}
