import React from 'react';

interface BookingItem {
  id: string;
  name: string;
  type: 'lab' | 'equipment';
  date?: string;
  time?: string;
  price: number;
  quantity?: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: BookingItem[];
  onRemoveItem: (id: string) => void;
  darkMode?: boolean;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  darkMode = false
}) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-4xl w-full rounded-xl p-6 max-h-[90vh] overflow-y-auto ${
        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <svg 
              className="mx-auto mb-4 w-16 h-16 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="m1 1 4 4.5 5.5 11h8.5a2 2 0 0 0 2-1.8L21 8H7"></path>
            </svg>
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`border rounded-lg p-4 ${
                    darkMode ? 'border-slate-600 bg-slate-700' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <div className="text-sm text-gray-500 mt-1">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          item.type === 'lab' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {item.type === 'lab' ? 'Lab Booking' : 'Equipment Rental'}
                        </span>
                      </div>
                      
                      {item.date && item.time && (
                        <div className="mt-2 text-sm">
                          <div className="flex items-center gap-4">
                            <span>
                              <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              {item.date}
                            </span>
                            <span>
                              <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12,6 12,12 16,14"></polyline>
                              </svg>
                              {item.time}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {item.quantity && (
                        <div className="mt-2 text-sm">
                          <span>Quantity: {item.quantity}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        ₹{item.price}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className={`border-t pt-6 ${darkMode ? 'border-slate-600' : 'border-gray-200'}`}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-2xl font-bold text-green-600">₹{totalPrice}</span>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className={`flex-1 py-3 px-6 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;