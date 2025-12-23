/* ================= TYPES ================= */
export interface MenuItem {
  id: string;
  name: string;
}

export interface Plan {
  id: "basic" | "silver" | "standard" | "traditional";
  name: string;
  icon: string;
  items: {
    category: string;
    items: MenuItem[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  plans: Plan[];
}

/* ================= DATA ================= */
export const categoriesData: Category[] = [
  /* =====================================================
     VEGETARIAN
  ===================================================== */
  {
    id: "veg",
    name: "Vegetarian",
    icon: "🌿",
    plans: [
      {
        id: "basic",
        name: "Basic Veg Plan",
        icon: "🥉",
        items: [
          {
            category: "Rice & Breads",
            items: [
              { id: "v1", name: "White Rice" },
              { id: "v2", name: "Chapati" },
            ],
          },
          {
            category: "Curries",
            items: [
              { id: "v3", name: "Dal Fry" },
              { id: "v4", name: "Aloo Curry" },
            ],
          },
        ],
      },
      {
        id: "silver",
        name: "Silver Veg Plan",
        icon: "🥈",
        items: [
          {
            category: "Starters",
            items: [
              { id: "v5", name: "Veg Cutlet" },
              { id: "v6", name: "Gobi Manchurian" },
            ],
          },
          {
            category: "Curries",
            items: [
              { id: "v7", name: "Paneer Butter Masala" },
              { id: "v8", name: "Mix Veg Curry" },
            ],
          },
          {
            category: "Rice",
            items: [{ id: "v9", name: "Veg Pulao" }],
          },
        ],
      },
      {
        id: "standard",
        name: "Standard Veg Plan",
        icon: "⭐",
        items: [
          {
            category: "Starters",
            items: [
              { id: "v10", name: "Paneer Tikka" },
              { id: "v11", name: "Baby Corn Manchurian" },
            ],
          },
          {
            category: "Main Course",
            items: [
              { id: "v12", name: "Veg Biryani" },
              { id: "v13", name: "Veg Kurma" },
            ],
          },
          {
            category: "Sweets",
            items: [{ id: "v14", name: "Gulab Jamun" }],
          },
        ],
      },
      {
        id: "traditional",
        name: "Traditional Veg Plan",
        icon: "👑",
        items: [
          {
            category: "Traditional Items",
            items: [
              { id: "v15", name: "Sambar" },
              { id: "v16", name: "Rasam" },
              { id: "v17", name: "Avial" },
              { id: "v18", name: "Curd Rice" },
            ],
          },
          {
            category: "Sweets",
            items: [
              { id: "v19", name: "Payasam" },
              { id: "v20", name: "Boorelu" },
            ],
          },
        ],
      },
    ],
  },

  /* =====================================================
     NON-VEGETARIAN
  ===================================================== */
  {
    id: "nonveg",
    name: "Non-Vegetarian",
    icon: "🍗",
    plans: [
      {
        id: "basic",
        name: "Basic Non-Veg Plan",
        icon: "🥉",
        items: [
          {
            category: "Curries",
            items: [
              { id: "n1", name: "Egg Curry" },
              { id: "n2", name: "Chicken Curry" },
            ],
          },
          {
            category: "Rice",
            items: [{ id: "n3", name: "White Rice" }],
          },
        ],
      },
      {
        id: "silver",
        name: "Silver Non-Veg Plan",
        icon: "🥈",
        items: [
          {
            category: "Starters",
            items: [
              { id: "n4", name: "Chicken 65" },
              { id: "n5", name: "Chilli Chicken" },
            ],
          },
          {
            category: "Curries",
            items: [
              { id: "n6", name: "Butter Chicken" },
              { id: "n7", name: "Egg Masala" },
            ],
          },
        ],
      },
      {
        id: "standard",
        name: "Standard Non-Veg Plan",
        icon: "⭐",
        items: [
          {
            category: "Biryani",
            items: [
              { id: "n8", name: "Chicken Dum Biryani" },
              { id: "n9", name: "Mutton Biryani" },
            ],
          },
          {
            category: "Sides",
            items: [{ id: "n10", name: "Raita" }],
          },
        ],
      },
      {
        id: "traditional",
        name: "Traditional Non-Veg Plan",
        icon: "👑",
        items: [
          {
            category: "Royal Feast",
            items: [
              { id: "n11", name: "Mutton Curry" },
              { id: "n12", name: "Chicken Fry" },
              { id: "n13", name: "Mutton Biryani" },
            ],
          },
        ],
      },
    ],
  },

  /* =====================================================
     WEDDING SPECIAL
  ===================================================== */
  {
    id: "wedding",
    name: "Wedding Special",
    icon: "💍",
    plans: [
      {
        id: "basic",
        name: "Basic Wedding Plan",
        icon: "🥉",
        items: [
          {
            category: "Starters",
            items: [{ id: "w1", name: "Veg Cutlet" }],
          },
          {
            category: "Main Course",
            items: [{ id: "w2", name: "Veg Biryani" }],
          },
        ],
      },
      {
        id: "silver",
        name: "Silver Wedding Plan",
        icon: "🥈",
        items: [
          {
            category: "Starters",
            items: [
              { id: "w3", name: "Paneer Tikka" },
              { id: "w4", name: "Chicken Tikka" },
            ],
          },
          {
            category: "Main Course",
            items: [{ id: "w5", name: "Chicken Biryani" }],
          },
        ],
      },
      {
        id: "standard",
        name: "Standard Wedding Plan",
        icon: "⭐",
        items: [
          {
            category: "Starters",
            items: [
              { id: "w6", name: "Paneer Malai Tikka" },
              { id: "w7", name: "Fish Fry" },
            ],
          },
          {
            category: "Main Course",
            items: [
              { id: "w8", name: "Mutton Biryani" },
              { id: "w9", name: "Veg Pulav" },
            ],
          },
          {
            category: "Sweets",
            items: [{ id: "w10", name: "Double Ka Meetha" }],
          },
        ],
      },
      {
        id: "traditional",
        name: "Traditional Wedding Feast",
        icon: "👑",
        items: [
          {
            category: "Grand Feast",
            items: [
              { id: "w11", name: "Full Veg Thali" },
              { id: "w12", name: "Mutton Biryani" },
              { id: "w13", name: "Assorted Sweets" },
            ],
          },
        ],
      },
    ],
  },
];
