import AccountCard from "../components/AccountCard";

export default function AccountsPage() {
  const accounts = [
    "Checkings",
    "Roth IRA Savings",
    "529 College Plan"
  ];

  return (
    <div className="min-h-screen bg-[#BFD9C8] p-8">
      <h1 className="text-2xl font-bold mb-6">Accounts</h1>
      <div className="flex flex-col gap-4 max-w-md">
        {accounts.map((name, index) => (
          <AccountCard key={index} name={name} />
        ))}

        <button className="bg-[#467A55] text-white px-4 py-2 rounded-md mt-4 w-fit hover:bg-[#386446]">
          Add Account +
        </button>
      </div>
    </div>
  );
}
