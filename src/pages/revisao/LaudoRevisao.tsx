import { jsPDF } from 'jspdf';
import styled from 'styled-components';

interface Props {
  problemaProps: string[];
}

const DivPDF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #ffffff;
    border: none;
    margin: 30px;
    color: #051e67;

    &:hover {
      color: #092d96;
    }
  }
`;

export default function LaudoRevisao({ problemaProps }: Props) {
  const getImageData = (url: string, callback: (dataURL: string) => void) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        callback(dataURL);
      }
    };
    img.src = url;
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    const imageUrl = '../../../public/rodapeLaudo.png'; // Rodapé
    const imageUrl2 = '../../../public/linhaDiagnostico.png'; // Imagem do topo

    // Carregar a segunda imagem (topo)
    getImageData(imageUrl2, (imageData2) => {
      // Adiciona a imagem do topo na posição (x, y)
      doc.addImage(imageData2, 'PNG', 0, 0, 230, 20); // Ajuste a largura e altura conforme necessário

      // Carregar a primeira imagem (rodapé)
      getImageData(imageUrl, (imageData) => {
        doc.addImage(imageData, 'PNG', 0, 195, 212, 105); // Posição do rodapé

        // Margem superior e inferior
        const margemSuperior = 30;
        const margemInferior = 20;
        const alturaPagina = 297; // Altura da página A4
        const areaUtilizavel = alturaPagina - margemInferior - margemSuperior;

        // Gerando um número aleatório entre 1 e 100
        doc.setTextColor('#051e67');
        const numeroAleatorio = Math.floor(Math.random() * 9000) + 1001;

        doc.text(`ID: ${numeroAleatorio}`, 15, alturaPagina - margemInferior - 60);

        // Verifica a quantidade de problemas para calcular se cabe na página
        const espacoPorProblema = 10; // Altura ocupada por cada linha de problema
        const alturaTotalProblemas = problemaProps.length * espacoPorProblema;

        if (alturaTotalProblemas > areaUtilizavel) {
          console.warn('O conteúdo excede a altura da página!');
        }

        // Obtendo a data atual
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = dataAtual.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`; // Formato dd/mm/yyyy

        // Definindo a cor e aplicando a margem superior
        doc.setTextColor('#051e67');
        doc.text("PROBLEMAS IDENTIFICADOS", 65, margemSuperior + 5);

        // Adicionando a data no PDF
        doc.setTextColor('#051e67'); // Cor para a data
        doc.text(`Data: ${dataFormatada}`, 15, margemSuperior + 200); // Adiciona a data logo abaixo do título

        // Mudando a cor do texto dos problemas para a cor desejada
        doc.setTextColor('#0830a8'); // Cor do texto

        // Listando os problemas com margem superior aplicada
        problemaProps.forEach((prob, index) => {
          const posY = margemSuperior + 50 + index * espacoPorProblema;
          if (posY < alturaPagina - margemInferior) {
            doc.text(prob, 15, posY);
          }
        });

        doc.save('resultadoRevisao.pdf');
      });
    });
  };

  return (
    <DivPDF>
      <button onClick={gerarPDF}>Baixar pdf do resultado</button>
    </DivPDF>
  );
}
