import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

export default [
  {
    title: 'Arcade',
    pricing: {
      monthly: 9,
      yearly: 90,
    },
    logo: arcade,
  },
  {
    title: 'Advanced',
    pricing: {
      monthly: 12,
      yearly: 120,
    },
    logo: advanced,
  },
  {
    title: 'Pro',
    pricing: {
      monthly: 15,
      yearly: 150,
    },
    logo: pro,
  },
];
