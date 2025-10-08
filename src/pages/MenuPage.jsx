// src/pages/MenuPage.jsx
import { useState, useMemo, useRef, useEffect } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

// --- MENU DATA ---
const menuData = [
  { category: 'Meals (Thali)', name: 'Fish Thali' }, { category: 'Meals (Thali)', name: 'Special Fish Thali' }, { category: 'Meals (Thali)', name: 'Chicken Thali' }, { category: 'Meals (Thali)', name: 'Veg. North Indian Thali' }, { category: 'Meals (Thali)', name: 'Egg Thali' },
  { category: 'Goan Food', name: 'Rechado Bangda' }, { category: 'Goan Food', name: 'Chicken Xacuti' }, { category: 'Goan Food', name: 'Mutton Xacuti' }, { category: 'Goan Food', name: 'Egg Xacuti' }, { category: 'Goan Food', name: 'Chicken Cafrial' }, { category: 'Goan Food', name: 'Chicken Chilly Goan' }, { category: 'Goan Food', name: 'Squid Chilly' }, { category: 'Goan Food', name: 'Prawns Chilly (small)' }, { category: 'Goan Food', name: 'Veg. Cafrial' }, { category: 'Goan Food', name: 'Paneer Cafrial' }, { category: 'Goan Food', name: 'Mutton Chilly Goan' }, { category: 'Goan Food', name: 'Crab Sukka' },
  { category: 'Seasonal Seafood', name: 'King Fish Rawa Fry' }, { category: 'Seasonal Seafood', name: 'King Fish Curry' }, { category: 'Seasonal Seafood', name: 'King Fish Masala Fry' }, { category: 'Seasonal Seafood', name: 'Pomfret Rawa Fry' }, { category: 'Seasonal Seafood', name: 'Pomfret Curry' }, { category: 'Seasonal Seafood', name: 'Pomfret Masala Fry' }, { category: 'Seasonal Seafood', name: 'Bangda Rawa Fry' }, { category: 'Seasonal Seafood', name: 'Prawns Chilly' }, { category: 'Seasonal Seafood', name: 'Prawns Kolhapuri' }, { category: 'Seasonal Seafood', name: 'Prawns Rawa Fry' }, { category: 'Seasonal Seafood', name: 'Squid Chilly' }, { category: 'Seasonal Seafood', name: 'Squid Sukha' }, { category: 'Seasonal Seafood', name: 'Squid Butter Garlic' },
  { category: 'Veg. Starters', name: 'Veg. Finger (10 pcs)' }, { category: 'Veg. Starters', name: 'Green Kabab' }, { category: 'Veg. Starters', name: 'Cheese (2 pcs)' }, { category: 'Veg. Starters', name: 'Finger Chips' }, { category: 'Veg. Starters', name: 'Veg Manchurian' }, { category: 'Veg. Starters', name: 'Paneer Tikka Dry' }, { category: 'Veg. Starters', name: 'Masala Papad' }, { category: 'Veg. Starters', name: 'Peanuts Masala' }, { category: 'Veg. Starters', name: 'Paneer 65' },
  { category: 'Non-Veg. Starters', name: 'Chicken Chilly' }, { category: 'Non-Veg. Starters', name: 'Chicken Lollipop' }, { category: 'Non-Veg. Starters', name: 'Crispy Chicken' }, { category: 'Non-Veg. Starters', name: 'Pepper Chicken' }, { category: 'Non-Veg. Starters', name: 'Liver Chilly' }, { category: 'Non-Veg. Starters', name: 'Egg Chilly' }, { category: 'Non-Veg. Starters', name: 'Egg Pakoda' },
  { category: 'Tandoori', name: 'Chicken Banjara Kabab' }, { category: 'Tandoori', name: 'Chicken Pahadi Kabab' }, { category: 'Tandoori', name: 'Chicken Seekh Kabab' }, { category: 'Tandoori', name: 'Chicken Tandoori Full' }, { category: 'Tandoori', name: 'Chicken Tandoori Half' }, { category: 'Tandoori', name: 'Chicken Tikka' }, { category: 'Tandoori', name: 'Tandoori Fish - Bangda' },
  { category: 'Tandoori Roti', name: 'Roti' }, { category: 'Tandoori Roti', name: 'Butter Roti' }, { category: 'Tandoori Roti', name: 'Naan / Paratha' }, { category: 'Tandoori Roti', name: 'Butter Naan / Parotha' }, { category: 'Tandoori Roti', name: 'Pudina Parotha' }, { category: 'Tandoori Roti', name: 'Cheese Naan' }, { category: 'Tandoori Roti', name: 'Garlic Cheese Naan' },
  { category: 'Biryani & Rice', name: 'Steam Rice' }, { category: 'Biryani & Rice', name: 'Veg. Biryani' }, { category: 'Biryani & Rice', name: 'Jeera Rice' }, { category: 'Biryani & Rice', name: 'Dal Khichdi' }, { category: 'Biryani & Rice', name: 'Chicken Biryani' }, { category: 'Biryani & Rice', name: 'Special Chicken Biryani' }, { category: 'Biryani & Rice', name: 'Mutton Biryani' }, { category: 'Biryani & Rice', name: 'Special Mutton Biryani' }, { category: 'Biryani & Rice', name: 'Prawns Biryani' }, { category: 'Biryani & Rice', name: 'Egg Biryani' },
  { category: 'Chinese', name: 'Veg Fried Rice' }, { category: 'Chinese', name: 'Chicken Fried Rice' }, { category: 'Chinese', name: 'Egg Fried Rice' }, { category: 'Chinese', name: 'Prawns Fried Rice' }, { category: 'Chinese', name: 'Mix Fried Rice Veg/Non Veg' }, { category: 'Chinese', name: 'Veg. Hakka Noodles' }, { category: 'Chinese', name: 'Chicken Hakka Noodles' },
  { category: 'Veg. Main Course', name: 'Mix Veg.' }, { category: 'Veg. Main Course', name: 'Aloo Gobi' }, { category: 'Veg. Main Course', name: 'Dal Fry' }, { category: 'Veg. Main Course', name: 'Dal Tadka' }, { category: 'Veg. Main Course', name: 'Palak Paneer' }, { category: 'Veg. Main Course', name: 'Paneer Tikka Masala' }, { category: 'Veg. Main Course', name: 'Kaju Masala' },
  { category: 'Chicken Main Course', name: 'Butter Chicken' }, { category: 'Chicken Main Course', name: 'Chicken Tikka Masala' }, { category: 'Chicken Main Course', name: 'Chicken Kadai' }, { category: 'Chicken Main Course', name: 'Chicken Sukka' }, { category: 'Chicken Main Course', name: 'Chicken Hyderabadi' },
  { category: 'Mutton Main Course', name: 'Mutton Masala' }, { category: 'Mutton Main Course', name: 'Mutton Kadai' }, { category: 'Mutton Main Course', name: 'Mutton Sukka' }, { category: 'Mutton Main Course', name: 'Mutton Kolhapuri' },
  { category: 'Egg Items', name: 'Egg Masala' }, { category: 'Egg Items', name: 'Egg Bhurji' }, { category: 'Egg Items', name: 'Omlet' }, { category: 'Egg Items', name: 'Egg Half Fry' },
  { category: 'Soups', name: 'Veg. Hot & Sour Soup' }, { category: 'Soups', name: 'Chicken Manchow Soup' }, { category: 'Soups', name: 'Chicken Hot & Sour Soup' },
  { category: 'Salad & Raitha', name: 'Green Salad' }, { category: 'Salad & Raitha', name: 'Raitha' }, { category: 'Salad & Raitha', name: 'Curd' },
];
const categories = ["All", ...new Set(menuData.map(item => item.category))];


const SearchBar = ({ searchTerm, setSearchTerm, activeCategory, onClear, menuData, categories, setActiveCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef();

  useClickOutside(searchRef, () => setIsDropdownOpen(false));
  useEffect(() => {
    const handleScroll = () => setIsDropdownOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const recommendations = useMemo(() => {
    if (!searchTerm) return [];
    return menuData
      .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5);
  }, [searchTerm, menuData]);

  const isFilterActive = searchTerm || activeCategory !== 'All';
  const placeholderText = activeCategory !== 'All' ? `Search in ${activeCategory}...` : 'Search dishes or categories...';

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholderText}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsDropdownOpen(true)}
          className="w-full p-3 pl-4 pr-10 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-deep-blue-gray dark:text-off-white focus:ring-2 focus:ring-azure-blue focus:border-transparent transition"
        />
        {isFilterActive && (
          <button onClick={onClear} className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          {searchTerm === '' ? (
            <div>
              <p className="px-4 py-2 text-sm font-bold text-gray-500 dark:text-gray-400">Categories</p>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => { setActiveCategory(category); setIsDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 text-deep-blue-gray dark:text-off-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {category}
                </button>
              ))}
            </div>
          ) : (
            recommendations.length > 0 && (
              <div>
                {recommendations.map(item => (
                  <button
                    key={item.name}
                    onClick={() => { setSearchTerm(item.name); setIsDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-deep-blue-gray dark:text-off-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};


const MenuItem = ({ name }) => ( <div className="py-2"><h4 className="font-sans text-lg text-deep-blue-gray dark:text-off-white">{name}</h4></div> );
const MenuCategory = ({ title, children }) => (
  <div className="mb-12 break-inside-avoid">
    <h3 className="font-serif text-3xl text-azure-blue dark:text-sandy-beige border-b-2 border-azure-blue/50 dark:border-sandy-beige/50 pb-2 mb-6">{title}</h3>
    <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">{children}</div>
  </div>
);

export const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClearFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
  };

  // --- THIS IS THE FIX ---
  // The filtering logic is now corrected to chain the filters properly.
  const filteredMenu = useMemo(() => {
    let results = menuData;

    // 1. Filter by the active category first (if it's not "All")
    if (activeCategory !== 'All') {
        results = results.filter(item => item.category === activeCategory);
    }

    // 2. Then, filter the result by the search term (if there is one)
    if (searchTerm) {
        results = results.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return results;
  }, [searchTerm, activeCategory]);

  const groupedMenu = filteredMenu.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="py-24 md:py-32 bg-off-white dark:bg-dark-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-blue-gray dark:text-off-white">Our Menu</h1>
          <p className="mt-4 text-lg text-deep-blue-gray/80 dark:text-off-white/80">Authentic Goan, Tandoori, and Chinese Delights</p>
        </div>
        <div className="sticky top-20 z-10 bg-off-white/80 dark:bg-dark-blue/80 backdrop-blur-sm p-4 rounded-lg mb-12">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onClear={handleClearFilters}
            menuData={menuData} 
            categories={categories} 
          />
        </div>
        {Object.keys(groupedMenu).length > 0 ? (
          <div className="md:columns-2 md:gap-12">
            {Object.entries(groupedMenu).map(([category, items]) => (
              <MenuCategory key={category} title={category}>
                {items.map(item => <MenuItem key={item.name} name={item.name} />)}
              </MenuCategory>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-deep-blue-gray/80 dark:text-off-white/80">No dishes found. Try clearing the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};