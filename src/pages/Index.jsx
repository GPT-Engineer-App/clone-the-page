import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Index = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [zip, setZip] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <header className="flex justify-between items-center p-4 bg-white bg-opacity-10 text-white">
        <div className="text-2xl font-bold">stripe</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Products</a>
          <a href="#" className="hover:text-gray-300">Solutions</a>
          <a href="#" className="hover:text-gray-300">Developers</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
        </nav>
        <div className="space-x-2">
          <Button variant="ghost" className="text-white hover:text-gray-300">Contact sales</Button>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100">Sign in</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <span className="bg-gray-700 bg-opacity-50 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">Invite only</span>
          <h1 className="text-5xl font-bold text-white mb-6">Financial infrastructure to grow your revenue</h1>
          <p className="text-white mb-6">Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
          <Button className="bg-blue-900 text-white hover:bg-blue-800">Request an invite</Button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Abstraction Magazine</h2>
            <p className="mb-4">₹19 per month</p>
            <Button className="w-full bg-black text-white mb-4">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 12.5c0-1.4-1.1-2.5-2.5-2.5h-6c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h6c1.4 0 2.5-1.1 2.5-2.5z"/>
              </svg>
              Pay
            </Button>
            <p className="text-center mb-4">Or pay with card</p>
            <form>
              <Input
                type="email"
                placeholder="Email"
                className="mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Card number"
                className="mb-4"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <div className="flex mb-4">
                <Input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/2 mr-2"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
              <Select>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="Country or region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="ZIP"
                className="mb-4"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
              <Button className="w-full bg-blue-600 text-white">Pay</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;