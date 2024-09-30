import { jsPDF } from 'jspdf';
import styled from 'styled-components';

interface Props {
  problemaProps: string[];
}

const DivPDF = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    background-color: #ffffff;
    border: none;
    margin: 30px;
    color: #051e67;

    &:hover{
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
    const imageUrl = '../../../public/rodapeLaudo.png';

    getImageData(imageUrl, (imageData) => {
      doc.addImage(imageData, 'PNG', 0, 195, 212, 105);

      // Margem superior e inferior
      const margemSuperior = 20;
      const margemInferior = 20;
      const alturaPagina = 297;  // Altura da página A4
      const areaUtilizavel = alturaPagina - margemInferior - margemSuperior;

      // Verifica a quantidade de problemas para calcular se cabe na página
      const espacoPorProblema = 10;  // Altura ocupada por cada linha de problema
      const alturaTotalProblemas = problemaProps.length * espacoPorProblema;

      if (alturaTotalProblemas > areaUtilizavel) {
        console.warn('O conteúdo excede a altura da página!');
      }

      // Definindo a cor e aplicando a margem superior
      doc.setTextColor(0, 0, 255);  // Cor azul
      doc.text("PROBLEMAS IDENTIFICADOS", 65, margemSuperior + 5);

      // Mudando a cor do texto dos problemas para vermelho usando hexadecimal
      doc.setTextColor('#051e67');  // Cor vermelha

      // Listando os problemas com margem superior aplicada
      problemaProps.forEach((prob, index) => {
        const posY = margemSuperior + 30 + index * espacoPorProblema;
        if (posY < alturaPagina - margemInferior) {
          doc.text(prob, 15, posY);
        }
      });

      doc.save('resultadoRevisao.pdf');
    });
  };

  return (
    <DivPDF>
      <button onClick={gerarPDF}>Baixar pdf do resultado</button>
    </DivPDF>
  );
}
