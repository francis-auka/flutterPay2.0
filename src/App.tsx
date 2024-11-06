import React, { useState } from 'react';
import { CreditCard, ArrowLeftRight, History, Wallet, Bell, Settings, Menu, X, PieChart } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TransactionHistory from './components/TransactionHistory';
import VirtualCards from './components/VirtualCards';
import Transfer from './components/Transfer';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      <div className="flex">
        <div className={`fixed lg:static lg:flex-shrink-0 lg:w-64 bg-white h-screen shadow-lg transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('expenses')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'expenses' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <PieChart className="w-5 h-5" />
              <span>Expense Tracker</span>
            </button>
            <button
              onClick={() => setActiveTab('transfer')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'transfer' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <ArrowLeftRight className="w-5 h-5" />
              <span>Transfer</span>
            </button>
            <button
              onClick={() => setActiveTab('cards')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'cards' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>Virtual Cards</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'history' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <History className="w-5 h-5" />
              <span>History</span>
            </button>
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'expenses' && <ExpenseTracker />}
          {activeTab === 'transfer' && <Transfer />}
          {activeTab === 'cards' && <VirtualCards />}
          {activeTab === 'history' && <TransactionHistory />}
        </div>
      </div>
    </div>
  );
}

export default App;