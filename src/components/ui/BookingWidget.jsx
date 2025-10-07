// src/components/ui/BookingWidget.jsx
export const BookingWidget = () => {
  return (
    <div className="bg-cloud-white p-4 md:p-6 rounded-lg shadow-2xl mt-8 w-full max-w-4xl">
      {/* On mobile, it's 1 column. On md screens, it's 4 columns. */}
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label htmlFor="checkin" className="block text-sm font-bold text-charcoal-grey mb-1">Check-in</label>
          <input type="date" id="checkin" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="checkout" className="block text-sm font-bold text-charcoal-grey mb-1">Check-out</label>
          <input type="date" id="checkout" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-bold text-charcoal-grey mb-1">Guests</label>
          <select id="guests" className="w-full p-2 border border-gray-300 rounded-md">
            <option>1 Guest</option>
            <option>2 Guests</option>
          </select>
        </div>
        <button type="submit" className="bg-burnt-coral text-white font-bold w-full p-2 rounded-md hover:bg-opacity-90 transition-all h-10">
          Check Availability
        </button>
      </form>
    </div>
  );
};