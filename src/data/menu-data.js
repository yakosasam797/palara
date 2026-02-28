// Menu data for Padival's Palara
export const categories = [
    { id: 'popular', name: 'Popular', icon: '🔥' },
    { id: 'south-indian', name: 'South Indian', icon: '🥘' },
    { id: 'north-indian', name: 'North Indian', icon: '🍛' },
    { id: 'chinese', name: 'Chinese', icon: '🥡' },
    { id: 'mangalorean', name: 'Mangalorean', icon: '🌶️' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'desserts', name: 'Desserts', icon: '🍨' },
];

export const menuItems = [
    // Popular
    { id: 1, name: 'Masala Dosa', desc: 'Crispy golden dosa filled with spiced potato masala, served with sambar & chutneys', price: 120, category: 'south-indian', tags: ['popular', 'chef-special'], img: 'masala-dosa' },
    { id: 2, name: 'Paneer Butter Masala', desc: 'Creamy tomato-cashew gravy with soft paneer cubes, mildly spiced', price: 220, category: 'north-indian', tags: ['popular'], img: 'paneer-butter' },
    { id: 3, name: 'Veg Manchurian', desc: 'Crispy vegetable balls tossed in tangy Indo-Chinese sauce with spring onions', price: 180, category: 'chinese', tags: ['popular'], img: 'veg-manchurian' },
    { id: 4, name: 'Filter Coffee', desc: 'Traditional South Indian filter coffee brewed to perfection', price: 50, category: 'beverages', tags: ['popular'], img: 'filter-coffee' },
    // South Indian
    { id: 5, name: 'Plain Dosa', desc: 'Paper-thin crispy dosa served with sambar & fresh coconut chutney', price: 80, category: 'south-indian', tags: [], img: 'plain-dosa' },
    { id: 6, name: 'Idli Vada Combo', desc: 'Soft steamed idlis with crispy medu vada, sambar & chutneys', price: 100, category: 'south-indian', tags: [], img: 'idli-vada' },
    { id: 7, name: 'Rava Idli', desc: 'Semolina idlis tempered with cashews, mustard & curry leaves', price: 90, category: 'south-indian', tags: [], img: 'rava-idli' },
    { id: 8, name: 'Uttapam', desc: 'Thick rice pancake topped with onions, tomatoes & green chillies', price: 110, category: 'south-indian', tags: [], img: 'uttapam' },
    { id: 9, name: 'Bisi Bele Bath', desc: 'Traditional Karnataka rice, lentil & vegetable one-pot dish', price: 140, category: 'south-indian', tags: ['chef-special'], img: 'bisi-bele' },
    // North Indian
    { id: 10, name: 'Dal Makhani', desc: 'Slow-cooked black lentils in rich buttery tomato gravy', price: 200, category: 'north-indian', tags: [], img: 'dal-makhani' },
    { id: 11, name: 'Chole Bhature', desc: 'Spiced chickpea curry with fluffy deep-fried bread', price: 160, category: 'north-indian', tags: ['popular'], img: 'chole-bhature' },
    { id: 12, name: 'Veg Biryani', desc: 'Aromatic basmati rice layered with seasonal vegetables & saffron', price: 240, category: 'north-indian', tags: ['chef-special'], img: 'veg-biryani' },
    { id: 13, name: 'Malai Kofta', desc: 'Paneer-potato dumplings in a creamy cashew-tomato sauce', price: 230, category: 'north-indian', tags: [], img: 'malai-kofta' },
    { id: 14, name: 'Naan Basket', desc: 'Assorted naans – butter, garlic & plain, baked in tandoor', price: 120, category: 'north-indian', tags: [], img: 'naan-basket' },
    // Chinese
    { id: 15, name: 'Veg Fried Rice', desc: 'Wok-tossed rice with crunchy vegetables & soy sauce', price: 160, category: 'chinese', tags: [], img: 'fried-rice' },
    { id: 16, name: 'Hakka Noodles', desc: 'Stir-fried noodles with vegetables in Indo-Chinese spices', price: 150, category: 'chinese', tags: [], img: 'hakka-noodles' },
    { id: 17, name: 'Gobi Manchurian', desc: 'Crispy cauliflower florets in spicy Manchurian sauce', price: 170, category: 'chinese', tags: ['spicy'], img: 'gobi-manchurian' },
    { id: 18, name: 'Spring Rolls', desc: 'Crispy rolls stuffed with seasoned vegetables, served with chilli sauce', price: 140, category: 'chinese', tags: [], img: 'spring-rolls' },
    // Mangalorean
    { id: 19, name: 'Goli Baje', desc: 'Crispy Mangalorean fritters made with fermented batter & spices', price: 100, category: 'mangalorean', tags: ['popular', 'chef-special'], img: 'goli-baje' },
    { id: 20, name: 'Neer Dosa', desc: 'Delicate rice crepes, light as a feather, with coconut chutney', price: 90, category: 'mangalorean', tags: [], img: 'neer-dosa' },
    { id: 21, name: 'Kadubu', desc: 'Steamed rice dumplings with jaggery-coconut filling', price: 80, category: 'mangalorean', tags: [], img: 'kadubu' },
    { id: 22, name: 'Mangalore Buns', desc: 'Sweet banana puri, soft inside and golden outside', price: 70, category: 'mangalorean', tags: ['popular'], img: 'mangalore-buns' },
    // Beverages
    { id: 23, name: 'Masala Chai', desc: 'Spiced Indian tea brewed with cardamom, ginger & cinnamon', price: 40, category: 'beverages', tags: [], img: 'masala-chai' },
    { id: 24, name: 'Fresh Lime Soda', desc: 'Refreshing lemon soda with mint — sweet or salted', price: 60, category: 'beverages', tags: [], img: 'lime-soda' },
    { id: 25, name: 'Mango Lassi', desc: 'Thick creamy yogurt drink blended with Alphonso mango', price: 90, category: 'beverages', tags: ['popular'], img: 'mango-lassi' },
    { id: 26, name: 'Buttermilk', desc: 'Refreshing spiced buttermilk with curry leaves & ginger', price: 40, category: 'beverages', tags: [], img: 'buttermilk' },
    // Desserts
    { id: 27, name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings soaked in rose-cardamom syrup', price: 80, category: 'desserts', tags: ['popular'], img: 'gulab-jamun' },
    { id: 28, name: 'Ras Malai', desc: 'Delicate milk cakes in chilled saffron-pistachio cream', price: 100, category: 'desserts', tags: ['chef-special'], img: 'ras-malai' },
    { id: 29, name: 'Payasam', desc: 'Traditional South Indian kheer with vermicelli, nuts & cardamom', price: 90, category: 'desserts', tags: [], img: 'payasam' },
    { id: 30, name: 'Ice Cream Sundae', desc: 'Three scoops with chocolate sauce, nuts & cherry on top', price: 120, category: 'desserts', tags: [], img: 'ice-cream' },
];

export const outlets = [
    { id: 1, name: 'Mahaveer Mall', address: 'Basement, Mahaveer Mall, Main Road, Puttur - 574201', hours: '8:00 AM – 10:00 PM', phone: '+91 98765 43210' },
    { id: 2, name: 'Bolwar', address: 'Bolwar Junction, Near Bus Stand, Puttur - 574201', hours: '8:00 AM – 9:30 PM', phone: '+91 98765 43211' },
    { id: 3, name: 'Ujirpade', address: 'Ujirpade Main Road, Puttur - 574201', hours: '9:00 AM – 9:00 PM', phone: '+91 98765 43212' },
];
