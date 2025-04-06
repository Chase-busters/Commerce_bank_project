import AccountCard from "../components/AccountCard";

export default function AccountsPage() {
  const accounts = [
    {
      name: "Checkings",
      balance: "9,042.00",
      change: "-$1,090 (10.76%) this month",
      positiveChange: false
    },
    {
      name: "Roth IRA Savings",
      balance: "29,022.00",
      change: "+$820 (2.83%) this month",
      positiveChange: true
    },
    {
      name: "529 College Plan",
      balance: "17,084.00",
      change: "-$5,000 (22.64%) this month",
      positiveChange: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#BFD9C8] flex flex-col">
      {/* Top Bar */}
      <header className="bg-[#2e4d3b] text-white px-6 py-4 text-xl font-semibold shadow-md">
        Placeholder Top Bar
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold mb-8">Accounts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <AccountCard
              key={index}
              name={account.name}
              balance={account.balance}
              change={account.change}
              positiveChange={account.positiveChange}
            />
          ))}
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-[#2e4d3b] text-white px-6 py-4 text-center text-sm shadow-md">
        Placeholder Bottom Bar
      </footer>
    </div>
  );
}
