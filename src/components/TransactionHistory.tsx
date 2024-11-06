import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const TransactionHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const transactions = [
    { id: 1, name: 'Salary Deposit', amount: 5000.00, type: 'income', platform: 'Bank Transfer', date: '2024-03-15', status: 'completed' },
    { id: 2, name: 'Netflix Subscription', amount: -12.99, type: 'expense', platform: 'Virtual Card', date: '2024-03-14', status: 'completed' },
    { id: 3, name: 'Freelance Payment', amount: 850.00, type: 'income', platform: 'PayPal', date: '2024-03-13', status: 'completed' },
    { id: 4, name: 'Amazon Purchase', amount: -59.99, type: 'expense', platform: 'Virtual Card', date: '2024-03-12', status: 'completed' },
    { id: 5, name: 'Money Transfer to John', amount: -200.00, type: 'transfer', platform: 'Wise', date: '2024-03-11', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search transactions..."
            />
          </div>
          <div className="flex space-x-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
              <option value="transfer">Transfer</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-4 font-semibold">Transaction</th>
                <th className="pb-4 font-semibold">Amount</th>
                <th className="pb-4 font-semibold">Platform</th>
                <th className="pb-4 font-semibold">Date</th>
                <th className="pb-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b last:border-0">
                  <td className="py-4">
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-gray-500">{transaction.type}</div>
                  </td>
                  <td className={`py-4 font-medium ${
                    transaction.type === 'income' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                  <td className="py-4">{transaction.platform}</td>
                  <td className="py-4">{transaction.date}</td>
                  <td className="py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;