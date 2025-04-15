export default function CartPage() {
    return (
      <main className="p-4 max-w-4xl mx-auto">
        <br />
        <h1 className="text-2xl font-bold mb-6 font-mono text-center">Your Cart</h1>
  
        <div className="border rounded-xl p-6 flex flex-col items-center justify-center text-center text-gray-500 bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 5.172a1 1 0 001.946.656L8.5 17h7l.447 1.828a1 1 0 001.946-.656L17 13M9 21h6" />
          </svg>
          <p className="text-lg font-medium">Your cart is empty</p>
          <p className="text-sm mt-1">Start adding some tech gear to your bag!</p>
        </div>
      </main>
    );
  }
  