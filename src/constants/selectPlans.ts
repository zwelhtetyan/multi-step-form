import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

export default [
  {
    title: 'Arcade',
    pricing: {
      monthly: '$9/mo',
      yearly: '$90/yr',
    },
    logo: arcade,
  },
  {
    title: 'Advanced',
    pricing: {
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    logo: advanced,
  },
  {
    title: 'Pro',
    pricing: {
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
    logo: pro,
  },
];
