import volvo from "../assets/imgCami/cami.jpeg"
import volvo1 from "../assets/imgCami/cami2.jpeg"
import volvo2 from "../assets/imgCami/cami3.jpeg"

import caminhaoAzul0 from "../assets/imgCami/caminhao1.jpg";
import caminhaoAzul1 from "../assets/imgCami/caminhao2.jpg";
import caminhaoAzul2 from "../assets/imgCami/caminhao3.jpg";
import caminhaoAzul3 from "../assets/imgCami/caminhao4.jpg";

export const db = [
  {
    id: "1",
    nome: "MB 2044",
    marca: "MERCEDES BENZ",
    ano: "2019",
    modelo: "2020",
    preco: "200000",
    tracao: "4x2",
    km: "800000",
    carroceria: "Cavalo Mecânico",
    cor: "AZUL",
    destaque: true,
    descricao: `MB AXOR 2544 2010 6X2
        UNICO DONO
        FORRADO DE PNEUS.
        MANUAL
        GARANTIA DE 90 DIAS
        
        Pego seu carro, moto ou caminhão como parte de pagamento
        
        Rossini Caminhões
        Av Maria Servidei Demarchi, 570
        Bairro Demarchi
        São Bernardo do Campo SP
        
        11 35936430
        
        Rodrigo 11 947337814 Whats
        
        Emilio 11989341677`,
    capa: `${caminhaoAzul0}`,
    fotos: [
      {
        url: `${caminhaoAzul1}`,
      },
      {
        url: `${caminhaoAzul2}`,
      },
      {
        url: `${caminhaoAzul3}`,
      },
    ],
  },
  {
    id: "2",
    nome: "VM 260",
    marca: "VOLVO",
    ano: "2019",
    modelo: "2020",
    preco: "200000",
    tracao: "4x2",
    km: "800000",
    carroceria: "Cavalo Mecânico",
    cor: "AZUL",
    destaque: false,
    descricao: `MB AXOR 2544 2010 6X2
        UNICO DONO
        FORRADO DE PNEUS.
        MANUAL
        GARANTIA DE 90 DIAS
        
        Pego seu carro, moto ou caminhão como parte de pagamento
        
        Rossini Caminhões
        Av Maria Servidei Demarchi, 570
        Bairro Demarchi
        São Bernardo do Campo SP
        
        11 35936430
        
        Rodrigo 11 947337814 Whats
        
        Emilio 11989341677`,
    capa: `${volvo}`,
    fotos: [
      {
        url: `${volvo1}`,
      },
      {
        url: `${volvo2}`,
      },
      {
        url: `${volvo2}`,
      },
    ],
  },
];
