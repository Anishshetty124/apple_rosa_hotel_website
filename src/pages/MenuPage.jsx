// src/pages/MenuPage.jsx

const MenuItem = ({ name, price }) => (
  <div className="flex justify-between items-baseline gap-2 py-2">
    <h4 className="font-sans text-deep-blue-gray dark:text-off-white">{name}</h4>
    <div className="flex-grow border-b-2 border-dotted border-gray-300 dark:border-gray-600 mx-2"></div>
    <p className="flex-shrink-0 text-deep-blue-gray dark:text-off-white font-bold">{price ? `₹${price}` : 'Seasonal'}</p>
  </div>
);

const MenuCategory = ({ title, children }) => (
  <div className="mb-12 break-inside-avoid">
    <h3 className="font-serif text-3xl text-azure-blue dark:text-sandy-beige border-b-2 border-azure-blue/50 dark:border-sandy-beige/50 pb-2 mb-6">{title}</h3>
    <div className="space-y-1">{children}</div>
  </div>
);

export const MenuPage = () => (
  <div className="py-24 md:py-32 bg-off-white dark:bg-dark-blue">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-deep-blue-gray dark:text-off-white">Our Menu</h1>
        <p className="mt-4 text-lg text-deep-blue-gray/80 dark:text-off-white/80">Authentic Goan, Tandoori, and Chinese Delights</p>
      </div>
      <div className="md:columns-2 md:gap-12">
        <MenuCategory title="Meals (Thali)"><MenuItem name="Fish Thali" price="140" /><MenuItem name="Special Fish Thali" price="240" /><MenuItem name="Chicken Thali" price="180" /><MenuItem name="Veg. North Indian Thali" price="190" /><MenuItem name="Egg Thali" price="130" /></MenuCategory>
        <MenuCategory title="Goan Food"><MenuItem name="Rechado Bangda" price="130" /><MenuItem name="Chicken Xacuti" price="200" /><MenuItem name="Mutton Xacuti" price="250" /><MenuItem name="Egg Xacuti" price="150" /><MenuItem name="Chicken Cafrial" price="200" /><MenuItem name="Chicken Chilly Goan" price="190" /><MenuItem name="Squid Chilly" price="260" /><MenuItem name="Prawns Chilly (small)" price="220" /><MenuItem name="Veg. Cafrial" price="170" /><MenuItem name="Paneer Cafrial" price="210" /><MenuItem name="Mutton Chilly Goan" price="230" /><MenuItem name="Crab Sukka" price="190" /></MenuCategory>
        <MenuCategory title="Seasonal Seafood"><MenuItem name="King Fish Rawa Fry" /><MenuItem name="King Fish Curry" /><MenuItem name="King Fish Masala Fry" /><MenuItem name="Pomfret Rawa Fry" /><MenuItem name="Pomfret Curry" /><MenuItem name="Pomfret Masala Fry" /><MenuItem name="Bangda Rawa Fry" /><MenuItem name="Prawns Chilly" /><MenuItem name="Prawns Kolhapuri" /><MenuItem name="Prawns Rawa Fry" /><MenuItem name="Squid Chilly" /><MenuItem name="Squid Sukha" /><MenuItem name="Squid Butter Garlic" /></MenuCategory>
        <MenuCategory title="Veg. Starters"><MenuItem name="Veg. Finger (10 pcs)" price="190" /><MenuItem name="Green Kabab" price="210" /><MenuItem name="Cheese (2 pcs)" price="60" /><MenuItem name="Finger Chips" price="90" /><MenuItem name="Veg Manchurian" price="160" /><MenuItem name="Paneer Tikka Dry" price="250" /><MenuItem name="Masala Papad" price="50" /><MenuItem name="Peanuts Masala" price="90" /><MenuItem name="Paneer 65" price="220" /></MenuCategory>
        <MenuCategory title="Non-Veg. Starters"><MenuItem name="Chicken Chilly" price="180" /><MenuItem name="Chicken Lollipop" price="160" /><MenuItem name="Crispy Chicken" price="200" /><MenuItem name="Pepper Chicken" price="180" /><MenuItem name="Liver Chilly" price="160" /><MenuItem name="Egg Chilly" price="150" /><MenuItem name="Egg Pakoda" price="120" /></MenuCategory>
        <MenuCategory title="Tandoori"><MenuItem name="Chicken Banjara Kabab" price="280" /><MenuItem name="Chicken Pahadi Kabab" price="280" /><MenuItem name="Chicken Seekh Kabab" price="280" /><MenuItem name="Chicken Tandoori Full" price="370" /><MenuItem name="Chicken Tandoori Half" price="190" /><MenuItem name="Chicken Tikka" price="220" /><MenuItem name="Tandoori Fish - Bangda" price="150" /></MenuCategory>
        <MenuCategory title="Tandoori Roti"><MenuItem name="Roti" price="25" /><MenuItem name="Butter Roti" price="30" /><MenuItem name="Naan / Paratha" price="30" /><MenuItem name="Butter Naan / Parotha" price="40" /><MenuItem name="Pudina Parotha" price="50" /><MenuItem name="Cheese Naan" price="80" /><MenuItem name="Garlic Cheese Naan" price="120" /></MenuCategory>
        <MenuCategory title="Biryani & Rice"><MenuItem name="Steam Rice" price="100" /><MenuItem name="Veg. Biryani" price="170" /><MenuItem name="Jeera Rice" price="120" /><MenuItem name="Dal Khichdi" price="150" /><MenuItem name="Chicken Biryani" price="210" /><MenuItem name="Special Chicken Biryani" price="240" /><MenuItem name="Mutton Biryani" price="240" /><MenuItem name="Special Mutton Biryani" price="260" /><MenuItem name="Prawns Biryani" price="220" /><MenuItem name="Egg Biryani" price="160" /></MenuCategory>
        <MenuCategory title="Chinese"><MenuItem name="Veg Fried Rice" price="160" /><MenuItem name="Chicken Fried Rice" price="190" /><MenuItem name="Egg Fried Rice" price="150" /><MenuItem name="Prawns Fried Rice" price="210" /><MenuItem name="Mix Fried Rice Veg/Non Veg" price="230" /><MenuItem name="Veg. Hakka Noodles" price="150" /><MenuItem name="Chicken Hakka Noodles" price="170" /></MenuCategory>
        <MenuCategory title="Veg. Main Course"><MenuItem name="Mix Veg." price="170" /><MenuItem name="Aloo Gobi" price="160" /><MenuItem name="Dal Fry" price="130" /><MenuItem name="Dal Tadka" price="140" /><MenuItem name="Palak Paneer" price="190" /><MenuItem name="Paneer Tikka Masala" price="240" /><MenuItem name="Kaju Masala" price="220" /></MenuCategory>
        <MenuCategory title="Chicken Main Course"><MenuItem name="Butter Chicken" price="230" /><MenuItem name="Chicken Tikka Masala" price="230" /><MenuItem name="Chicken Kadai" price="210" /><MenuItem name="Chicken Sukka" price="200" /><MenuItem name="Chicken Hyderabadi" price="200" /></MenuCategory>
        <MenuCategory title="Mutton Main Course"><MenuItem name="Mutton Masala" price="250" /><MenuItem name="Mutton Kadai" price="250" /><MenuItem name="Mutton Sukka" price="240" /><MenuItem name="Mutton Kolhapuri" price="250" /></MenuCategory>
        <MenuCategory title="Egg Items"><MenuItem name="Egg Masala" price="140" /><MenuItem name="Egg Bhurji" price="80" /><MenuItem name="Omlet" price="60" /><MenuItem name="Egg Half Fry" price="50" /></MenuCategory>
        <MenuCategory title="Soups"><MenuItem name="Veg. Hot & Sour Soup" price="80" /><MenuItem name="Chicken Manchow Soup" price="100" /><MenuItem name="Chicken Hot & Sour Soup" price="100" /></MenuCategory>
        <MenuCategory title="Salad & Raitha"><MenuItem name="Green Salad" price="80" /><MenuItem name="Raitha" price="80" /><MenuItem name="Curd" price="60" /></MenuCategory>
      </div>
    </div>
  </div>
);