import { jsPDF } from 'jspdf';
import { DivPDF } from '../../styles';

interface Props {
    problemaProps: string[]; // Declaração do tipo para o array de strings
  }
  
  export default function LaudoRevisao({ problemaProps }: Props) {

  // Função para converter a imagem para base64
  const getImageData = (url: string, callback: (dataURL: string) => void) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Permite carregar imagens de outros domínios
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

  // Função para gerar o PDF
  const gerarPDF = () => {
    const doc = new jsPDF();
    const imageUrl = '../../../public/rodapeLaudo.png'; // Ajuste o caminho conforme necessário

    getImageData(imageUrl, (imageData) => {
      doc.addImage(imageData, 'PNG', 0, 195, 212, 105);

        doc.text("PROBLEMAS IDENTIFICADOS", 65, 5)

      problemaProps.forEach((prob, index) => {
        doc.text(prob, 15, 30 + index * 10); 
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
