import React, { useState } from 'react';
import { Plus, PieChart, TrendingUp, DollarSign, Calendar } from 'lucide-react';

const ExpenseTracker: React.FC = () => {
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const categories = [
    { id: 'food', name: 'Food & Dining', color: 'bg-blue-500' },
    { id: 'transport', name: 'Transportation', color: 'bg-green-500' },
    { id: 'shopping', name: 'Shopping', color: 'bg-purple-500' },
    { id: 'entertainment', name: 'Entertainment', color: 'bg-yellow-500' },
    { id: 'utilities', name: 'Utilities', color: 'bg-red-500' },
    { id: 'health', name: 'Healthcare', color: 'bg-indigo-500' }
  ];

  const monthlyExpenses = [
    { category: 'Food & Dining', amount: 450 },
    { category: 'Transportation', amount: 200 },
    { category: 'Shopping', amount: 350 },
    { category: 'Entertainment', amount: 150 },
    { category: 'Utilities', amount: 280 },
    { category: 'Healthcare', amount: 120 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle expense submission
    console.log('New expense:', newExpense);
    setNewExpense({
      category: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      description: ''
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Monthly Overview</h2>
            <select className="px-3 py-2 border rounded-lg">
              <option>March 2024</option>
              <option>February 2024</option>
              <option>January 2024</option>
            </select>
          </div>

          <div className="space-y-4">
            {monthlyExpenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${categories[index].color}`} />
                  <span>{expense.category}</span>
                </div>
                <span className="font-semibold">${expense.amount}</span>
              </div>
            ))}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Expenses</span>
                <span className="text-xl font-bold text-blue-600">
                  ${monthlyExpenses.reduce((acc, curr) => acc + curr.amount, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Add New Expense */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Add New Expense</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  className="w-full pl-7 pr-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={newExpense.date}
                onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                placeholder="Add a note..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Expense</span>
            </button>
          </form>
        </div>
      </div>

      {/* Expense Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold">Monthly Average</h3>
          </div>
          <p className="text-2xl font-bold">$1,550</p>
          <p className="text-sm text-gray-500">Last 6 months</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold">Highest Expense</h3>
          </div>
          <p className="text-2xl font-bold">$450</p>
          <p className="text-sm text-gray-500">Food & Dining</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">This Month</h3>
          </div>
          <p className="text-2xl font-bold">$1,550</p>
          <p className="text-sm text-gray-500">15 transactions</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;