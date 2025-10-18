// Importa as imagens que você acabou de "commitar"
import banner from '../assets/imagens/banner.png';
import casa1 from '../assets/imagens/casa1.jpg';
import casa2 from '../assets/imagens/casa2.jpg';
import casa3 from '../assets/imagens/casa3.jpg';
import casa4 from '../assets/imagens/casa4.jpg';
import casa5 from '../assets/imagens/casa5.jpg';

export const bannerPrincipal = banner;

const dadosImoveis = [
  {
    id: '1',
    imagem: casa1,
    titulo: 'Casa Aconchegante no Centro',
    descricao: 'Uma bela casa localizada no coração da cidade, perfeita para quem busca conforto e conveniência. ',
    valor: 'R$ 550.000,00'
  },
  {
    id: '2',
    imagem: casa2,
    titulo: 'Apartamento Moderno com Vista',
    descricao: 'Apartamento com design moderno e uma vista deslumbrante. Ideal para solteiros ou casais.',
    valor: 'R$ 320.000,00'
  },
  {
    id: '3',
    imagem: casa3,
    titulo: 'Chácara para Finais de Semana',
    descricao: 'O refúgio perfeito para escapar da rotina da cidade. Ampla área verde, com piscina e churrasqueira.',
    valor: 'R$ 890.000,00'
  },
  {
    id: '4',
    imagem: casa4,
    titulo: 'Cobertura Duplex Luxuosa',
    descricao: 'Cobertura com acabamentos de alto padrão, jacuzzi privativa e vista panorâmica de 360 graus.',
    valor: 'R$ 1.200.000,00'
  },
  {
    id: '5',
    imagem: casa5,
    titulo: 'Casa Térrea em Condomínio',
    descricao: 'Casa térrea charmosa em condomínio fechado, com 3 suítes e área gourmet integrada à piscina.',
    valor: 'R$ 780.000,00'
  }
];

export default dadosImoveis;
