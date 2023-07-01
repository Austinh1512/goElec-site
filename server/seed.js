require("dotenv").config();
const connectDB = require("./config/connectDB")();
const Product = require("./models/Product");

const eSkates = [
  {
    name: "BACKFIRE G2 BLACK ELECTRIC SKATEBOARD",
    description: [
      "Range: 11-12.5miles / 18-20km (Range could vary by many different factors, this was based 165 lbs. rider, flat road)",
      "Top Speed: 24mph / 38kph",
      "Battery: 18650 42V 180Wh",
      "Motors: 400W X2 Super High Power Hobbywing Motors",
      "Deck: Maple",
      "Wheels: 96mm Replaceable",
      "Trucks: 7 inch MD Front truck & 7 inch MD Rear Truck.",
      "Charging Time: 3.5 Hours",
    ].join("\n"),
    price: 429.0,
    category: "electric_skateboards",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F2_1024x1024_8179dd79-d5bc-49a4-944f-12a621a11784_720x.webp?alt=media&token=b2d26119-6e06-4f2f-a4ac-d91249711518",
        filename: "2_1024x1024_8179dd79-d5bc-49a4-944f-12a621a11784_720x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F3_1024x1024_4144c678-9da4-4f5a-94a4-4bd654eca65d_720x.webp?alt=media&token=45c4814a-862f-4b3d-8dfc-089a081ba267",
        filename: "3_1024x1024_4144c678-9da4-4f5a-94a4-4bd654eca65d_720x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F4_1024x1024_2d0b8d2f-3ae3-4ab4-8f9d-86b5a3df166b_1800x1800.webp?alt=media&token=8607ea3b-0e77-47c8-9571-740113083b5c",
        filename:
          "4_1024x1024_2d0b8d2f-3ae3-4ab4-8f9d-86b5a3df166b_1800x1800.webp",
      },
    ],
  },
  {
    name: "BACKFIRE ZEALOT X BELT DRIVE ELECTRIC SKATEBOARD",
    description: [
      "Range: 25 ~ 34 Miles (Range could vary by many different factors, this was based 165 lbs. rider, flat road)",
      "Top Speed: 31 MPH",
      "Battery:	14S2P, Samsung50S, 504Wh, Smart BMS",
      "Motors: Two 1500W Belt Motors",
      "Deck: Composite",
      "Wheels: 96mm PU Wheels",
      "Trucks: 8 inch Forged CNC Trucks",
      "Charging Time: 3 Hours",
    ].join("\n"),
    price: 1199.0,
    category: "electric_skateboards",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE%20ZEALOT%20X%20BELT%20DRIVE%20ELECTRIC%20SKATEBOARD%2FZEALOTX_1_1800x1800.webp?alt=media&token=e71a8b37-f2c6-442b-9e91-410e9013ef8b",
        filename: "ZEALOTX_1_1800x1800.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE%20ZEALOT%20X%20BELT%20DRIVE%20ELECTRIC%20SKATEBOARD%2FZEALOTX_4_1800x1800.webp?alt=media&token=838fd54d-0c60-4fcb-9b4e-0020a97bac1c",
        filename: "ZEALOTX_4_1800x1800.webp",
      },
    ],
  },
  {
    name: "MEEPO FLOW",
    description: [
      "Range: 24miles / 38km",
      "Top Speed: 32mph / 52kph",
      "Battery:	12S2P Molicel P42A 362Wh / 8.4AH",
      "Motors: 2519 Watts x 2",
      "Deck: 6-ply Canadian Maple +2-ply bamboo",
      "Wheels: 105mmX65mm wheels",
      "Trucks:  DKP",
      "Charging Time: 50.4V4.5A Charger: 2h",
    ].join("\n"),
    price: 729.0,
    category: "electric_skateboards",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_1.webp?alt=media&token=74acc971-117d-47c4-ba15-cd33081dce94",
        filename: "meepo_1.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_2.webp?alt=media&token=0ededafe-4db8-4b18-a076-fcf9346836ae",
        filename: "meepo_2.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_3.webp?alt=media&token=a050764b-ba96-4d6a-8313-bb80f3c2e812",
        filename: "meepo_3.webp",
      },
    ],
  },
  {
    name: "BACKFIRE G2 BLACK ELECTRIC SKATEBOARD",
    description: [
      "Range: 11-12.5miles / 18-20km (Range could vary by many different factors, this was based 165 lbs. rider, flat road)",
      "Top Speed: 24mph / 38kph",
      "Battery: 18650 42V 180Wh",
      "Motors: 400W X2 Super High Power Hobbywing Motors",
      "Deck: Maple",
      "Wheels: 96mm Replaceable",
      "Trucks: 7 inch MD Front truck & 7 inch MD Rear Truck.",
      "Charging Time: 3.5 Hours",
    ].join("\n"),
    price: 429.0,
    category: "electric_skateboards",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F2_1024x1024_8179dd79-d5bc-49a4-944f-12a621a11784_720x.webp?alt=media&token=b2d26119-6e06-4f2f-a4ac-d91249711518",
        filename: "2_1024x1024_8179dd79-d5bc-49a4-944f-12a621a11784_720x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F3_1024x1024_4144c678-9da4-4f5a-94a4-4bd654eca65d_720x.webp?alt=media&token=45c4814a-862f-4b3d-8dfc-089a081ba267",
        filename: "3_1024x1024_4144c678-9da4-4f5a-94a4-4bd654eca65d_720x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FBACKFIRE_G2_BLACK_ELETRIC_SKATEBOARD%2F4_1024x1024_2d0b8d2f-3ae3-4ab4-8f9d-86b5a3df166b_1800x1800.webp?alt=media&token=8607ea3b-0e77-47c8-9571-740113083b5c",
        filename:
          "4_1024x1024_2d0b8d2f-3ae3-4ab4-8f9d-86b5a3df166b_1800x1800.webp",
      },
    ],
  },
  {
    name: "MEEPO FLOW",
    description: [
      "Range: 24miles / 38km",
      "Top Speed: 32mph / 52kph",
      "Battery:	12S2P Molicel P42A 362Wh / 8.4AH",
      "Motors: 2519 Watts x 2",
      "Deck: 6-ply Canadian Maple +2-ply bamboo",
      "Wheels: 105mmX65mm wheels",
      "Trucks:  DKP",
      "Charging Time: 50.4V4.5A Charger: 2h",
    ].join("\n"),
    price: 729.0,
    category: "electric_skateboards",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_1.webp?alt=media&token=74acc971-117d-47c4-ba15-cd33081dce94",
        filename: "meepo_1.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_2.webp?alt=media&token=0ededafe-4db8-4b18-a076-fcf9346836ae",
        filename: "meepo_2.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_skateboards%2FMEEPO%20FLOW%2Fmeepo_3.webp?alt=media&token=a050764b-ba96-4d6a-8313-bb80f3c2e812",
        filename: "meepo_3.webp",
      },
    ],
  },
];

const eScooters = [
  {
    name: "GOTRAX G6 ELECTRIC SCOOTER",
    description:
      "An improved commute. The G6 was designed for to take on city streets for even the longest of commutes with a battery capable of up to 45 miles per charge. This escooter also features front wheel suspension, a powerful rear wheel motor and so much more.",
    price: 799.0,
    category: "electric_scooters",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-671729_900x.webp?alt=media&token=6e804e87-f6ab-4777-a812-93d10fb00f5b",
        filename: "g6-electric-scooter-671729_900x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-722741_900x.webp?alt=media&token=b12ed876-49d9-4f25-b103-a3c3046d364b",
        filename: "g6-electric-scooter-722741_900x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-175135_120x.webp?alt=media&token=b1a5c67d-e2ec-4d4e-87d4-8fb820ea4779",
        filename: "g6-electric-scooter-175135_120x.webp",
      },
    ],
  },
  {
    name: "TURBOANT V8 DUAL-BATTERY ELECTRIC SCOOTER",
    description: [
      "Range: 50mi",
      "Top Speed: 20mph",
      "Battery:	Dual 7.5 Ah",
      "Motors: 450W brushless motor",
      'Wheels: 9.3" Pneumatic Tires',
      "Folding Time: 3 sec",
      "Suspention: Rear dual-spring",
    ].join("\n"),
    price: 599.0,
    category: "electric_scooters",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_-39_1024x1024.webp?alt=media&token=ef5d39ed-d732-4faa-a1e0-5b41258224fa",
        filename: "V8_-39_1024x1024.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_11e7d0de-9269-44e6-8b63-e6ba07d5e259_1024x1024.webp?alt=media&token=acf1d9c3-1665-43f9-8dd6-c7e79175ec8d",
        filename: "V8_11e7d0de-9269-44e6-8b63-e6ba07d5e259_1024x1024.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_-v7_1024x1024.webp?alt=media&token=98c532d8-8304-43c2-920a-c5143bffea18",
        filename: "V8_-v7_1024x1024.webp",
      },
    ],
  },
  {
    name: "GOTRAX G6 ELECTRIC SCOOTER",
    description:
      "An improved commute. The G6 was designed for to take on city streets for even the longest of commutes with a battery capable of up to 45 miles per charge. This escooter also features front wheel suspension, a powerful rear wheel motor and so much more.",
    price: 799.0,
    category: "electric_scooters",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-671729_900x.webp?alt=media&token=6e804e87-f6ab-4777-a812-93d10fb00f5b",
        filename: "g6-electric-scooter-671729_900x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-722741_900x.webp?alt=media&token=b12ed876-49d9-4f25-b103-a3c3046d364b",
        filename: "g6-electric-scooter-722741_900x.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FGOTRAX%20G6%20ELECTRIC%20SCOOTER%2Fg6-electric-scooter-175135_120x.webp?alt=media&token=b1a5c67d-e2ec-4d4e-87d4-8fb820ea4779",
        filename: "g6-electric-scooter-175135_120x.webp",
      },
    ],
  },
  {
    name: "TURBOANT V8 DUAL-BATTERY ELECTRIC SCOOTER",
    description: [
      "Range: 50mi",
      "Top Speed: 20mph",
      "Battery:	Dual 7.5 Ah",
      "Motors: 450W brushless motor",
      'Wheels: 9.3" Pneumatic Tires',
      "Folding Time: 3 sec",
      "Suspention: Rear dual-spring",
    ].join("\n"),
    price: 599.0,
    category: "electric_scooters",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_-39_1024x1024.webp?alt=media&token=ef5d39ed-d732-4faa-a1e0-5b41258224fa",
        filename: "V8_-39_1024x1024.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_11e7d0de-9269-44e6-8b63-e6ba07d5e259_1024x1024.webp?alt=media&token=acf1d9c3-1665-43f9-8dd6-c7e79175ec8d",
        filename: "V8_11e7d0de-9269-44e6-8b63-e6ba07d5e259_1024x1024.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_scooters%2FTURBOANT%20V8%20DUAL-BATTERY%20ELECTRIC%20SCOOTER%2FV8_-v7_1024x1024.webp?alt=media&token=98c532d8-8304-43c2-920a-c5143bffea18",
        filename: "V8_-v7_1024x1024.webp",
      },
    ],
  },
];

const eBikes = [
  {
    name: "LECTRIC XP 3.0 BLACK EBIKE",
    description:
      "The Lectric XP™ 3.0 is your gateway to an elevated and powerful adventure! It takes our award-winning XP™ 2.0 design to the next level, providing our best ride to date. A quieter motor, increased torque, better brakes, longevity boosters, and added suspension are only a few of the many notable upgrades with this epic eBike design. Best of all, brand-new optimized gearing makes riding at higher speeds smoother than ever before! The XP™ 3.0 is also compatible with fan-favorite new accessory options including the Yepp Seat and a Passenger Package that can hold riders up to 150lbs.",
    price: 999.99,
    category: "electric_bikes",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FLECTRIC%20XP%203.0%20BLACK%20EBIKE%2FLectric-XP-3.0-Long-Range-768x607.jpg?alt=media&token=65450ece-5dfd-49fe-808d-aa7f2db51d31",
        filename: "Lectric-XP-3.0-Long-Range-768x607.jpg",
      },
    ],
  },
  {
    name: "AVENTON AVENTURE.2 EBIKE",
    description:
      "Choose your own adventure with Aventure.2, fully loaded with a torque sensor. Its torque sensor has intuitive technology that amplifies your pedaling cadence, promoting a more natural riding experience. Switch between 4 levels of pedal assist and throttle to bring you more of what’s out there without breaking a sweat. Go beyond the average dirt road with 4” fat tires, a suspension fork, and a powerful motor that will cover ground over sand, rock, or snow with ease.",
    price: 1999.0,
    category: "electric_bikes",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2FAventure2-traditional-slate-01_130x130.webp?alt=media&token=61143bbf-d0fd-4f0d-8adb-7b6627eb4282",
        filename: "Aventure2-traditional-slate-01_130x130.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2FAventure2-traditional-slate-03_130x130.webp?alt=media&token=c395c9db-c421-4686-a140-b840c6018ead",
        filename: "Aventure2-traditional-slate-03_130x130.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2Faventure2-ebike-lifestyle-1_130x130.webp?alt=media&token=c77c93a7-a039-4fe7-a68c-d50656ba0994",
        filename: "aventure2-ebike-lifestyle-1_130x130.webp",
      },
    ],
  },
  {
    name: "LECTRIC XP 3.0 BLACK EBIKE",
    description:
      "The Lectric XP™ 3.0 is your gateway to an elevated and powerful adventure! It takes our award-winning XP™ 2.0 design to the next level, providing our best ride to date. A quieter motor, increased torque, better brakes, longevity boosters, and added suspension are only a few of the many notable upgrades with this epic eBike design. Best of all, brand-new optimized gearing makes riding at higher speeds smoother than ever before! The XP™ 3.0 is also compatible with fan-favorite new accessory options including the Yepp Seat and a Passenger Package that can hold riders up to 150lbs.",
    price: 999.99,
    category: "electric_bikes",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FLECTRIC%20XP%203.0%20BLACK%20EBIKE%2FLectric-XP-3.0-Long-Range-768x607.jpg?alt=media&token=65450ece-5dfd-49fe-808d-aa7f2db51d31",
        filename: "Lectric-XP-3.0-Long-Range-768x607.jpg",
      },
    ],
  },
  {
    name: "AVENTON AVENTURE.2 EBIKE",
    description:
      "Choose your own adventure with Aventure.2, fully loaded with a torque sensor. Its torque sensor has intuitive technology that amplifies your pedaling cadence, promoting a more natural riding experience. Switch between 4 levels of pedal assist and throttle to bring you more of what’s out there without breaking a sweat. Go beyond the average dirt road with 4” fat tires, a suspension fork, and a powerful motor that will cover ground over sand, rock, or snow with ease.",
    price: 1999.0,
    category: "electric_bikes",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2FAventure2-traditional-slate-01_130x130.webp?alt=media&token=61143bbf-d0fd-4f0d-8adb-7b6627eb4282",
        filename: "Aventure2-traditional-slate-01_130x130.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2FAventure2-traditional-slate-03_130x130.webp?alt=media&token=c395c9db-c421-4686-a140-b840c6018ead",
        filename: "Aventure2-traditional-slate-03_130x130.webp",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/goelec-product-images.appspot.com/o/electric_bikes%2FAVENTON%20AVENTURE.2%20EBIKE%2Faventure2-ebike-lifestyle-1_130x130.webp?alt=media&token=c77c93a7-a039-4fe7-a68c-d50656ba0994",
        filename: "aventure2-ebike-lifestyle-1_130x130.webp",
      },
    ],
  },
];

const accessories = [{}];

const seedDB = async () => {
  await Product.deleteMany({});
  let product;

  try {
    eSkates.forEach(async (eSkate) => {
      product = new Product(eSkate);
      await product.save();
    });
    eScooters.forEach(async (eScooter) => {
      product = new Product(eScooter);
      await product.save();
    });
    eBikes.forEach(async (eBike) => {
      product = new Product(eBike);
      await product.save();
    });
    console.log("Seeding complete...");
  } catch (err) {
    console.error(err);
  }
};

seedDB();
