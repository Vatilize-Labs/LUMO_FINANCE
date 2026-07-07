'use client'

import { WalletCard } from '@/components/wallet-card'
import { Card } from '@/components/ui/card'
import ChatInterface from '@/components/chat/chat-interface'

export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row h-full max-w-7xl mx-auto w-full p-4 md:p-6 gap-6">
      
      {/* Right Panel for Mobile (Stacks above chat) / Right Panel for Desktop */}
      <div className="w-full md:w-[40%] md:order-2 flex flex-col gap-6">
        <WalletCard />
        
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-semibold text-cream">Recent Transactions</h3>
            <button className="text-sm text-ember hover:text-ember-hover transition-colors">
              View all &rarr;
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { id: 1, title: 'Sent to David', date: 'Today, 14:30', amount: '-₦10,000' },
              { id: 2, title: 'Airtime Recharge', date: 'Yesterday, 09:15', amount: '-₦1,000' },
              { id: 3, title: 'DSTV Subscription', date: 'Jun 28, 18:45', amount: '-₦3,500' },
            ].map((txn) => (
              <div key={txn.id} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
                <div>
                  <p className="font-medium text-cream text-sm">{txn.title}</p>
                  <p className="text-xs text-cream/50 mt-1">{txn.date}</p>
                </div>
                <span className="font-medium text-cream">{txn.amount}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Spending Insights MVP */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-heading font-semibold text-cream">Spending Insights</h3>
            <select className="bg-transparent text-sm text-cream/70 outline-none cursor-pointer">
              <option className="bg-brown">This Month</option>
              <option className="bg-brown">Last Month</option>
            </select>
          </div>
          
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-cream">Transfers</span>
                <span className="font-medium text-cream">₦120,000</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-ember rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-cream">Bills & Utilities</span>
                <span className="font-medium text-cream">₦45,000</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#4285F4] rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-cream">Airtime & Data</span>
                <span className="font-medium text-cream">₦15,000</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Chat Column (Left on Desktop, Bottom on Mobile) */}
      <div className="w-full md:w-[60%] md:order-1 flex flex-col h-[600px] md:h-[calc(100vh-6rem)]">
        <ChatInterface />
      </div>
      
    </div>
  )
}
