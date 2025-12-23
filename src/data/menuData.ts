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
        id: "traditional",
        name: "Traditional Veg Plan",
        icon: "👑",
        items: [
          {
             category: "Sweet (Choose Any One)",
      items: [
        { id: "sw1", name: "Ravva Kesari" },
        { id: "sw2", name: "Semya Kesari" },
        { id: "sw3", name: "Annam Payasam" },
        { id: "sw4", name: "Kheer" },
        { id: "sw5", name: "Badusha" },
        { id: "sw6", name: "Jilebi" }
      ]
    },

    {
      category: "Flavour Rice (Choose Any One)",
      items: [
        { id: "fr1", name: "Pulihora" },
        { id: "fr2", name: "Pudina Rice" },
        { id: "fr3", name: "Lemon Rice" },
        { id: "fr4", name: "Curd Rice" },
        { id: "fr5", name: "Bisi Bele Bath" }
      ]
    },

    {
      category: "Veg Curry (Choose Any One)",
      items: [
        { id: "vc1", name: "Alu Tomato Curry" },
        { id: "vc2", name: "Munakaya Tomato Curry" },
        { id: "vc3", name: "Mixed Veg Curry" },
        { id: "vc4", name: "Guthi Vankaya Curry" },
        { id: "vc5", name: "Chikkudu Tomato Curry" }
      ]
    },

    {
      category: "Common Items (All)",
      items: [
        { id: "ci1", name: "Dal" },
        { id: "ci2", name: "Sambar" },
        { id: "ci3", name: "Papad" },
        { id: "ci4", name: "Curd" },
        { id: "ci5", name: "Pickle" },
        { id: "ci6", name: "Plain Rice" }

            ],
          },
        ],
      },
      {
        id: "basic",
        name: "Basic Veg Plan",
        icon: "🥉",
        items: [
          {
            category: "Sweet(Choose Any One)",
            items: [
              { id: "v1", name: "Bobbatlu" },
              { id: "v2", name: "Gulab Jamun" },
              { id: "v3", name: "Kala Jamun" },
              { id: "v4", name: "Double Ka Meeta" },
              { id: "v5", name: "Jilebi " },
              { id: "v6", name: "Badusha" },
            ],
          },
          {
            category: "Hot item (Choose Any One)",
            items: [
              { id: "v7", name: "Mirchi Baji" },
              { id: "v8", name: "Aratikaya Baji" },
              { id: "v9", name: "Cut Mirchi" },
              { id: "v10", name: "Thamalapaku Baji" },
              { id: "v11", name: "Masala Wada" },

            ],
          },
          {
            category: "Common Masala (Choose Any One)",
            items: [
              { id: "v12", name: "Mix Veg Kurma" },
              { id: "v13", name: "Aloo Capsicum Masala" },
              { id: "v14", name: "Aloo Mutter Masala" },
              { id: "v15", name: "Bagara Baingan" },
              { id: "v16", name: "Mirchi Ka Salan" },

            ],
          },
          {
            category: "Flavored Rice (Choose Any One)",
            items: [
              { id: "v17", name: "Veg Biryani" },
              { id: "v18", name: "Bagara Rice" },
              { id: "v19", name: "Mutter Biryani" },
              { id: "v20", name: "Mealmaker Biryani" },
              { id: "v21", name: "Veg Fried Rice" },

            ],
          },
          {
            category: "Fry's  (Choose Any One)",
            items: [
              { id: "v22", name: "Bendi Cocunt Fry" },
              { id: "v23", name: "Donda Coconut Fry" },
              { id: "v24", name: "Aloo Fry" },
              { id: "v25", name: "Cabbage Fry" },


            ],
          },
          {
            category: "Common Items (Choose Any One)",
            items: [
              { id: "v26", name: "White Rice " },
              { id: "v27", name: "Curd" },
              { id: "v28", name: "Chutney" },
              { id: "v29", name: "Dall" },
              { id: "v30", name: "Pickle" },
              { id: "v31", name: "Raitha" },
              { id: "v32", name: "Papad" },
              { id: "v33", name: "Sambar Mouth Freshner" },
              { id: "v34", name: "Mineral Water (Loose)" },

            ],
          },
          {
            category: "Additional Items (Extra Prices)",
            items: [
              { id: "v35", name: "Ice Cream -20Rs" },
              { id: "v36", name: "Pan -10Rs" },
              { id: "v37", name: "Sweet -20Rs" },
              { id: "v38", name: "Water Bottle -6Rs" },


            ],
          },

        ],
      },
     
      {
        id: "standard",
        name: "Standard Veg Plan",
        icon: "⭐",
        items: [
    {
      category: "Sweet (Choose Any One)",
      items: [
        { id: "sw1", name: "Poornam" },
        { id: "sw2", name: "Bobbatlu" },
        { id: "sw3", name: "Gulab Jamun" },
        { id: "sw4", name: "Kala Jamun" },
        { id: "sw5", name: "Double Ka Meeta" },
        { id: "sw6", name: "Jilebi" },
        { id: "sw7", name: "Badusha" }
      ]
    },

    {
      category: "Hot Item (Choose Any One)",
      items: [
        { id: "ht1", name: "Mirchi Baji" },
        { id: "ht2", name: "Aratikaya Baji" },
        { id: "ht3", name: "Cut Mirchi" },
        { id: "ht4", name: "Thamalapaku Baji" },
        { id: "ht5", name: "Masala Wada" }
      ]
    },

    {
      category: "Roti's (Choose Any One)",
      items: [
        { id: "rt1", name: "Pulka" },
        { id: "rt2", name: "Rumali Roti" },
        { id: "rt3", name: "Chapathi" }
      ]
    },

    {
      category: "Masala Curries (Choose Any One)",
      items: [
        { id: "mc1", name: "Paneer Butter Masala" },
        { id: "mc2", name: "Mixed Veg Kurma" },
        { id: "mc3", name: "Chole Masala" },
        { id: "mc4", name: "Kadai Veg" },
        { id: "mc5", name: "Palak Paneer" }
      ]
    },

    {
      category: "Common Masala Curry (Choose Any One)",
      items: [
        { id: "cm1", name: "Mixed Veg Kurma" },
        { id: "cm2", name: "Aloo Capsicum Masala" },
        { id: "cm3", name: "Aloo Mutter Masala" },
        { id: "cm4", name: "Bagara Baingan" },
        { id: "cm5", name: "Mirchi Ka Salan" }
      ]
    },

    {
      category: "Colour Rice (Choose Any One)",
      items: [
        { id: "cr1", name: "Veg Biryani" },
        { id: "cr2", name: "Bagara Rice" },
        { id: "cr3", name: "Mutter Biryani" },
        { id: "cr4", name: "Mealmaker Biryani" },
        { id: "cr5", name: "Veg Fried Rice" }
      ]
    },

    {
      category: "Fry's (Choose Any One)",
      items: [
        { id: "fr1", name: "Bendi Coconut Fry" },
        { id: "fr2", name: "Donda Coconut Fry" },
        { id: "fr3", name: "Aloo Fry" },
        { id: "fr4", name: "Cabbage Fry" }
      ]
    },

    {
      category: "Common Items (All)",
      items: [
        { id: "ci1", name: "White Rice" },
        { id: "ci2", name: "Curd" },
        { id: "ci3", name: "Chutney" },
        { id: "ci4", name: "Dal" },
        { id: "ci5", name: "Pickle" },
        { id: "ci6", name: "Raitha" },
        { id: "ci7", name: "Papad" },
        { id: "ci8", name: "Sambar" },
        { id: "ci9", name: "Mouth Freshner" },
        { id: "ci10", name: "Mineral Water (Loose)" }
      ]
    },
    {
            category: "Additional Items (Extra Prices)",
            items: [
              { id: "v325", name: "Ice Cream -20Rs" },
              { id: "v326", name: "Pan -10Rs" },
              { id: "v327", name: "Sweet -20Rs" },
              { id: "v328", name: "Water Bottle -6Rs" },


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
            category: "Sweet (Choose Any 2)",
            items: [
              { id: "s1", name: "Gulab Jamun" },
              { id: "s2", name: "Kala Jamoon" },
              { id: "s3", name: "Double Ka Mitha" },
              { id: "s4", name: "Bobbatlu" },
              { id: "s5", name: "Badusha" },
              { id: "s6", name: "Jilebi" },
              { id: "s7", name: "Carrot Halwa" },
              { id: "s8", name: "Poornam" },
              { id: "s9", name: "Rasmalai" },
               { id: "s10", name: "kadhu Keer" },
              { id: "s11", name: "Kaju Katli" },
              { id: "s12", name: "Kaju Brafi" },
            ]
          },

          {
            category: "Hot (Choose Any 1)",
            items: [
              { id: "h1", name: "Mirchi Bajji" },
              { id: "h2", name: "Aratikay Bajji" },
              { id: "h3", name: "Cut Mirchi" },
              { id: "h4", name: "Thamalapaku Bajji" },
              { id: "h5", name: "Masala Wada" },
            
            ]
          },

          {
            category: "Roti's (Choose Any 1)",
            items: [
              { id: "r1", name: "Poori" },
              { id: "r2", name: "Pulka" },
              { id: "r3", name: "Rumali Roti" },
             
            ]
          },

          {
            category: "Special Curry (Choose Any 1)",
            items: [
              { id: "sc1", name: "Paneer Butter Masala" },
              { id: "sc2", name: "Mixed Veg Kurma" },
               { id: "sc3", name: "chole Masala,Kadai veg" },
              { id: "sc4", name: "Palak Paneer" }
            
            
            ]
          },

          {
            category: "Common Curry (Choose Any 1)",
            items: [
              { id: "cc1", name: "Bagara Baingan" },
              { id: "cc2", name: "Alu Capsicum Masala" },
              { id: "cc3", name: "Alu Mutter Masala" },
              { id: "cc5", name: "Mixed Veg Kurma" },
              { id: "cc6", name: "Mirchi Ka Salan" }
            ]
          },

          {
            category: "Veg Fry (Choose Any 1)",
            items: [
              { id: "vf1", name: "Bendi Coconut Fry" },
              { id: "vf2", name: "Donda Coconut Fry" },
              { id: "vf3", name: "Alu Fry" },
              { id: "vf4", name: "Cabbage 65" },
             
            ]
          },

          {
            category: "Liquids (Choose Any 1)",
            items: [
              { id: "fr1", name: "Sambar" },
              { id: "fr2", name: "Tamato Rasam" },
              { id: "fr3", name: "Pachi Pulusu" },
              { id: "fr4", name: "Pappucharu" },
              
            ]
          },

          {
            category: "Common Items",
            items: [
              { id: "c1", name: "White Rice" },
              { id: "c2", name: "Dal" },            
              { id: "c5", name: "Curd" },
              { id: "c6", name: "Chutney" },
              { id: "c7", name: "Pickle" },
              { id: "c8", name: "Raitha" },
              { id: "c9", name: "Mouth Freshner" },           
              { id: "c11", name: "Water Bottle" }
            ]
          } ,{
            category: "Additional Items (Extra Prices)",
            items: [
              { id: "v315", name: "Ice Cream " },
              { id: "v361", name: "Sweet Pan " },         
              { id: "v381", name: "Water Bottle " },


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
             category: "Sweet (Choose Any One)",
      items: [
        { id: "sw1", name: "Gulab Jamun" },
        { id: "sw2", name: "Kala Jamun" },
        { id: "sw3", name: "Double Ka Mitha" },
        { id: "sw4", name: "Jilebi" },
        { id: "sw5", name: "Bobbatlu" }
      ]
    },

    {
      category: "Veg Snacks (Choose Any One)",
      items: [
        { id: "vs1", name: "Cut Mirchi" },
        { id: "vs2", name: "Masala Gare" },
        { id: "vs3", name: "Veg Manchurian" }
      ]
    },

    {
      category: "Chicken Item (Choose Any One)",
      items: [
        { id: "ch1", name: "Chicken Dum Biryani" },
        { id: "ch2", name: "Chicken Pulao" },
        { id: "ch3", name: "Chicken Curry" },
        { id: "ch4", name: "Chicken Fry" }
      ]
    },

    {
      category: "Common Items (All)",
      items: [
        { id: "ci1", name: "Veg Biryani or Bagara Rice" },
        { id: "ci2", name: "Plain Rice" },
        { id: "ci3", name: "Dal" },
        { id: "ci4", name: "Sambar" },
        { id: "ci5", name: "Papad" },
        { id: "ci6", name: "Curd" },
        { id: "ci7", name: "Raitha" },
        { id: "ci8", name: "Chutney" },
        { id: "ci9", name: "Salad" },
        { id: "ci10", name: "Mouth Freshener" }
],
          },
        ],
      },
      {
        id: "silver",
        name: "Silver Non-Veg Plan",
        icon: "🥈",
        items: [
          {
              category: "Sweet (Choose Any One)",
      items: [
        { id: "sw1", name: "Gulab Jamun" },
        { id: "sw2", name: "Kala Jamoon" },
        { id: "sw3", name: "Double Ka Mitha" },
        { id: "sw4", name: "Bobbatlu" },
        { id: "sw5", name: "Badusha" },
        { id: "sw6", name: "Jilebi" },
        { id: "sw7", name: "Carrot Halwa" },
        { id: "sw8", name: "Kaddu Ka Kheer" },
        { id: "sw9", name: "Poornam" },
        { id: "sw10", name: "Rasmalai  ExtraPrice: 10" }
      ]
    },

    {
      category: "Hot (Choose Any One)",
      items: [
        { id: "ht1", name: "Mirchi Bajji" },
        { id: "ht2", name: "Veg Spring Roll" },
        { id: "ht3", name: "Cut Mirchi" },
        { id: "ht4", name: "Corn Samosa" },
        { id: "ht5", name: "Veg Manchurian" }
      ]
    },

    {
      category: "Roti's (Choose Any One)",
      items: [
        { id: "rt1", name: "Rumali Roti" },
        { id: "rt2", name: "Pulka" },
        { id: "rt3", name: "Chapathi" },
        { id: "rt4", name: "Butter Roti" }
      ]
    },

    {
      category: "Masala Curry (Choose Any Two)",
      items: [
        { id: "mc1", name: "Paneer Butter Masala" },
        { id: "mc2", name: "Mirchi Ka Salan" }
      ]
    },

    {
      category: "Chicken Item (Choose Any One)",
      items: [
        { id: "ch1", name: "Chicken Curry" },
        { id: "ch2", name: "Chicken Fry" },
        { id: "ch3", name: "Dum Ka Chicken" }
      ]
    },

    {
      category: "Biryani (Choose Any One)",
      items: [
        { id: "br1", name: "Mutton Biryani" },
        { id: "br2", name: "Chicken Biryani" },
        { id: "br3", name: "Mutton Pulao" },
        { id: "br4", name: "Chicken Pulao" },
        { id: "br5", name: "Prawns Pulao" }
      ]
    },

    {
      category: "Non-Veg Starter (Choose Any One)",
      items: [
        { id: "ns1", name: "Chilli Chicken" },
        { id: "ns2", name: "Chicken Manchurian" },
        { id: "ns3", name: "Chicken 65" },
        { id: "ns4", name: "Apollo Fish" },
        { id: "ns5", name: "Chicken Majestic" }
      ]
    },

    {
      category: "Common Items (All)",
      items: [
        { id: "ci1", name: "Plain Rice" },
        { id: "ci2", name: "Dal" },
        { id: "ci3", name: "Sambar" },
        { id: "ci4", name: "Papad" },
        { id: "ci5", name: "Curd" },
        { id: "ci6", name: "Chutney" },
        { id: "ci7", name: "Mouth Freshener" },
        { id: "ci8", name: "Raitha" },
        { id: "ci9", name: "Ice Cream" },
        { id: "ci10", name: "Sweet Pan" },
        { id: "ci11", name: "Water Bottle" },
        { id: "ci12", name: "Non Veg Starter  ExtraPrice: 40" },

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
            category: "Sweet (Choose Any One)",
      items: [
        { id: "sw1", name: "Gulab Jamun" },
        { id: "sw2", name: "Kala Jamoon" },
        { id: "sw3", name: "Double Ka Mitha" },
        { id: "sw4", name: "Bobbatlu" },
        { id: "sw5", name: "Badusha" },
        { id: "sw6", name: "Jilebi" },
        { id: "sw7", name: "Carrot Halwa" },
        { id: "sw8", name: "Poornam ExtraPrice: 10" },
        { id: "sw9", name: "Rasmalai ExtraPrice: 10" }
      ]
    },

    {
      category: "Hot (Choose Any One)",
      items: [
        { id: "ht1", name: "Mirchi Bajji" },
        { id: "ht2", name: "Veg Spring Roll" },
        { id: "ht3", name: "Cut Mirchi" },
        { id: "ht4", name: "Corn Samosa" },
        { id: "ht5", name: "Veg Manchurian" }
      ]
    },

    {
      category: "Roti's (Choose Any One)",
      items: [
        { id: "rt1", name: "Rumali Roti" },
        { id: "rt2", name: "Pulka" },
        { id: "rt3", name: "Chapathi" },
        { id: "rt4", name: "Butter Roti" }
      ]
    },

    {
      category: "Masala Curry (Choose Any Two)",
      items: [
        { id: "mc1", name: "Paneer Butter Masala" },
        { id: "mc2", name: "Chole Masala" },
        { id: "mc3", name: "Mirchi Ka Salan" },
        { id: "mc4", name: "Vonkaya Masala" }
      ]
    },

    {
      category: "Chicken Item (Choose Any One)",
      items: [
        { id: "ch1", name: "Chicken Curry" },
        { id: "ch2", name: "Chicken Fry" },
        { id: "ch3", name: "Dum Ka Chicken" }
      ]
    },

    {
      category: "Biryani (Choose Any One)",
      items: [
        { id: "br1", name: "Mutton Biryani" },
        { id: "br2", name: "Chicken Biryani" },
        { id: "br3", name: "Mutton Pulao" },
        { id: "br4", name: "Chicken Pulao" },
        { id: "br5", name: "Prawns Pulao" }
      ]
    },

    {
      category: "Common Items (All)",
      items: [
        { id: "ci1", name: "Plain Rice" },
        { id: "ci2", name: "Dal" },
        { id: "ci3", name: "Sambar" },
        { id: "ci4", name: "Papad" },
        { id: "ci5", name: "Curd" },
        { id: "ci6", name: "Chutney" },
        { id: "ci7", name: "Raitha" },
        { id: "ci8", name: "Mouth Freshener" },
        { id: "ci9", name: "Ice Cream ExtraPrice: 20" },
        { id: "ci10", name: "Sweet Pan ExtraPrice: 15" },
        { id: "ci11", name: "Water Bottle ExtraPrice: 6" },
        { id: "ci12", name: "Non Veg Starter ExtraPrice: 40" }
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
