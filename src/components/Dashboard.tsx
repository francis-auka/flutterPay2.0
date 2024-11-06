import React from 'react';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-blue-500/30 p-3 rounded-lg">
              <DollarSign className="h-6 w-6" />
            </div>
            <span className="text-sm">Main Balance</span>
          </div>
          <div className="text-3xl font-bold mb-2">$24,562.00</div>
          <div className="text-blue-100 text-sm">Available</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Income</span>
          </div>
          <div className="text-3xl font-bold mb-2">$8,942.00</div>
          <div className="text-green-600 text-sm flex items-center">
            <ArrowUpRight className="h-4 w-4 mr-1" /> +12.5%
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm text-gray-500">Expenses</span>
          </div>
          <div className="text-3xl font-bold mb-2">$3,242.00</div>
          <div className="text-red-600 text-sm flex items-center">
            <ArrowDownRight className="h-4 w-4 mr-1" /> -8.1%
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { name: 'Netflix Subscription', amount: -12.99, date: 'Today', type: 'expense' },
            { name: 'Salary Deposit', amount: 5000.00, date: 'Yesterday', type: 'income' },
            { name: 'Amazon Purchase', amount: -59.99, date: 'Mar 15', type: 'expense' },
            { name: 'Freelance Payment', amount: 850.00, date: 'Mar 14', type: 'income' },
          ].map((transaction, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className={`h-5 w-5 ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  ) : (
                    <ArrowDownRight className={`h-5 w-5 ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  )}
                </div>
                <div>
                  <div className="font-medium">{transaction.name}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
              </div>
              <div className={`font-semibold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;