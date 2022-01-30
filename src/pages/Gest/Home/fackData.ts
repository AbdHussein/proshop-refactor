const data = [
  {
    price: 599.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 12 Pro 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
  {
    price: 599.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 10 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
  {
    price: 800.99,
    _id: '60df749a5027923750d7972f',
    name: 'iPhone 20 256GB Memory',
    image: 'https://proshop-ms.herokuapp.com/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
  },
];

const top = Array(3).fill({
  rating: 3.5384615384615383,
  price: 89.99,
  _id: '60df749a5027923750d7972e',
  name: 'Airpods Wireless Bluetooth Headphones',
  image: '/images/airpods.jpg',
  description:
    'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  discount: 20,
});

export default {
  data,
  top,
};
