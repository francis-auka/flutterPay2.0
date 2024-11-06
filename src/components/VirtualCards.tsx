import React, { useState } from 'react';
import { Plus, Copy, Eye, EyeOff } from 'lucide-react';

const VirtualCards: React.FC = () => {
  const [showCardNumber, setShowCardNumber] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Cards</h1>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Card</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Card */}
        <div className="relative h-48 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 flex flex-col justify-between text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Virtual Debit Card</p>
              <p className="font-medium mt-1">John Doe</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
              alt="Mastercard"
              className="h-8"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="font-mono text-xl tracking-wider">
                {showCardNumber ? '4532 •••• •••• 7895' : '•••• •••• •••• 7895'}
              </div>
              <button
                onClick={() => setShowCardNumber(!showCardNumber)}
                className="p-1 hover:bg-white/10 rounded"
              >
                {showCardNumber ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="opacity-80">Valid Thru</p>
                <p>12/25</p>
              </div>
              <div>
                <p className="opacity-80">CVV</p>
                <p>•••</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Details & Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Card Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Status</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Card Type</span>
                <span>Virtual Debit</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Monthly Limit</span>
                <span>$10,000</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Used This Month</span>
                <span>$2,458</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors">
              <Copy className="w-4 h-4" />
              <span>Copy Card Details</span>
            </button>
            <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-lg transition-colors">
              Freeze Card
            </button>
          </div>
        </div>
      </div>

      {/* Recent Card Transactions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Card Transactions</h2>
        <div className="space-y-4">
          {[
            { name: 'Amazon.com', amount: 79.99, date: 'Today, 2:34 PM' },
            { name: 'Netflix', amount: 12.99, date: 'Yesterday, 11:28 AM' },
            { name: 'Spotify', amount: 9.99, date: 'Mar 15, 9:15 AM' },
          ].map((transaction, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <div className="font-medium">{transaction.name}</div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className="font-semibold">
                -${transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualCards;