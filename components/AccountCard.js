// components/AccountCard.js

export default function AccountCard({ name }) {
    return (
      <div className="bg-[#F4EFEA] rounded-lg flex justify-between items-center px-4 py-3 shadow-sm">
        <span className="text-lg font-medium">{name}</span>
        <button className="text-sm text-green-700 font-semibold flex items-center space-x-1 hover:underline">
          <span>View</span>
          <span>▶</span>
        </button>
      </div>
    );
  }
  