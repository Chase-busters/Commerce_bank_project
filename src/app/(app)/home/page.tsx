"use client";

import { AddTransactionButton } from "@/components/AddTransactionButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data - replace with real data later
const accounts = [
  { id: 1, name: "checkings 1", balance: 1000 },
  { id: 2, name: "savings 1", balance: 5000 },
];

const transactions = [
  { id: 1, name: "grocery run", status: "scheduled", date: "2024-03-15" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Yellow section at top */}
      <div className="bg-yellow-100 rounded-lg p-6 h-[200px] flex items-center justify-center text-gray-600">
        Don&apos;t implement yet
      </div>

      <div className="flex gap-6 flex-1">
        {/* Transactions section */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-gray-100">
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Accounts section */}
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Accounts</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
              >
                <span className="font-medium">{account.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    ${account.balance.toLocaleString()}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <AddTransactionButton />
    </div>
  );
}