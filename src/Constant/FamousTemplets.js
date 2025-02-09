const famousIndianTemples = [
  {
    id: 1,
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    location: "Kedarnath",
    Description:
      "The Kedarnath Temple is a Hindu temple in the Rudraprayag district of Uttarakhand, India. It is one of the 12 Jyotirlingas of Lord Shiva and a sacred pilgrimage site.",
    Images: "https://i.pinimg.com/736x/29/42/63/2942638ab619295ead09eb7f2c8e52fb.jpg",
  },
  {
    id: 2,
    name: "Badrinath Temple",
    state: "Uttarakhand",
    location: "Badrinath",
    Description:
      "The Badrinath Temple is a Hindu temple dedicated to Lord Vishnu, a major deity in Hinduism. It is located in the town of Badrinath in Uttarakhand, India.",
    Images: "https://i.pinimg.com/736x/99/99/0c/99990cd430ebc54c4e34dcebb26f4684.jpg",
  },
  {
    id: 3,
    name: "Vaishno Devi Temple",
    state: "Jammu and Kashmir",
    location: "Katra",
    Description:
      "This temple is popular worldwide as it is believed that “Moonh Maangi Muradein Poori Karne Wali Mata”, the deity here, fulfills whatever her believers wish for. This holy cave is located at an altitude of 5,200 feet, and the pilgrims have to undertake a trek of almost 12 km starting from Katra.",
    Images: "https://i.pinimg.com/736x/39/5d/0f/395d0f390ef51dd970a3dc1470bcc2d3.jpg",
  },
  {
    id: 4,
    name: "Golden Temple",
    state: "Punjab",
    location: "Amritsar",
    Description:
      "It has a square plan with four entrances and a circumambulation path around the pool. The four entrances to the gurudwara symbolize the Sikh belief in equality and the Sikh view that all people are welcome into their holy place.",
    Images: "https://i.pinimg.com/736x/e3/14/dc/e314dc526f0558163b93f88221a547d0.jpg",
  },
  {
    id: 5,
    name: "Kashi Vishwanath Temple",
    state: "Uttar Pradesh",
    location: "Varanasi",
    Description:
      "Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India.",
    Images: "https://i.pinimg.com/736x/58/f2/e5/58f2e5965356a002dd90e8ce15a447de.jpg",
  },
  {
    id: 6,
    name: "Sankat Mochan Hanuman Temple",
    state: "Uttar Pradesh",
    location: "Varanasi",
    Description: "Sankat Mochan Hanuman Temple is a Hindu temple in Varanasi, Uttar Pradesh, India. It is dedicated to the monkey god Hanuman.",
    Images: "https://i.pinimg.com/736x/90/8a/f6/908af622530a15e3bc5bda3325e23206.jpg",
  },
  {
    id: 7,
    name: "Somnath Temple",
    state: "Gujarat",
    location: "Prabhas Patan, Veraval",
    Description:
      "Somnath is a magnificent temple along the coastline in Prabhas Patan, Veraval, Gujarat. One of the 12 holy Jyotirlingas of Lord Shiva is here.",
    Images: "https://i.pinimg.com/736x/77/74/f9/7774f9646e1b520a68de2dcd8f83bde2.jpg",
  },
  {
    id: 8,
    name: "Dwarkadhish Temple",
    state: "Gujarat",
    location: "Dwarka",
    Description: "Dwarkadhish Temple is one of the holiest temples dedicated to Lord Krishna in Dwarka, Gujarat.",
    Images: "https://i.pinimg.com/736x/bc/1b/49/bc1b49f9f3b748a534fe40f584fcb617.jpg",
  },
  {
    id: 9,
    name: "Ramanathaswamy Temple",
    state: "Tamil Nadu",
    location: "Rameshwaram",
    Description: "The Ramanathaswamy Temple is a Hindu temple in Rameshwaram, Tamil Nadu, India.",
    Images: "https://i.pinimg.com/736x/92/fa/f0/92faf0e672ca53df59586acf72b9eae1.jpg",
  },
  {
    id: 10,
    name: "Meenakshi Temple",
    state: "Tamil Nadu",
    location: "Madurai",
    Description: "The Meenakshi Amman Temple in Madurai, Tamil Nadu, India, is a famous Hindu temple complex.",
    Images: "https://i.pinimg.com/736x/98/1a/b4/981ab40a84d6c0ca2df596a1b993db38.jpg",
  },
  {
    id: 11,
    name: "Brihadeeswarar Temple",
    state: "Tamil Nadu",
    location: "Thanjavur",
    Description: "One of the largest temples in India, the Brihadeeswara Temple is in Thanjavur.",
    Images: "https://i.pinimg.com/736x/35/a3/43/35a3437ef3ae73d2a7390e88e23a08aa.jpg",
  },
  {
    id: 12,
    name: "Jagannath Temple",
    state: "Odisha",
    location: "Puri",
    Description: "The Jagannath Temple in Puri, Odisha, is one of the oldest and most sacred temples in India.",
    Images: "https://i.pinimg.com/736x/19/c7/6a/19c76ae74a475086e7f065d882f7ce33.jpg",
  },
  {
    id: 13,
    name: "Kamakhya Temple",
    state: "Assam",
    location: "Guwahati",
    Description: "The Kamakhya Temple is a Hindu temple in Guwahati, Assam, India.",
    Images: "https://i.pinimg.com/736x/25/e8/9e/25e89ea09023a71a947fe02ae6eda0d6.jpg",
  },
  {
    id: 14,
    name: "Mahabodhi Temple",
    state: "Bihar",
    location: "Bodh Gaya",
    Description: "The Mahabodhi Temple is a Buddhist temple in Bodh Gaya, India.",
    Images: "https://i.pinimg.com/736x/ed/dd/62/eddd623fe2942f6000804a97e65db612.jpg",
  },
  {
    id: 15,
    name: "Tirupati Balaji Temple",
    state: "Andhra Pradesh",
    location: "Tirupati",
    Description: "The temple is one of the world's most visited religious sites.",
    Images: "https://i.pinimg.com/736x/3d/99/dd/3d99dd96229f6efe7311d2fb286be711.jpg",
  },
  {
    id: 16,
    name: "Virupaksha Temple",
    state: "Karnataka",
    location: "Hampi",
    Description: "The Virupaksha Temple is a Hindu temple in Hampi, Karnataka, India.",
    Images: "https://karnatakatourism.org/wp-content/uploads/2020/11/virupaksha-temple-hampi.jpg",
  },
  {
    id: 17,
    name: "Padmanabhaswamy Temple",
    state: "Kerala",
    location: "Thiruvananthapuram",
    Description: "The Sree Padmanabhaswamy Temple is one of the wealthiest shrines in the world.",
    Images: "https://i.pinimg.com/736x/17/57/94/175794de1d8e6ccff98f10fc594aa73a.jpg",
  },
];
export { famousIndianTemples };
