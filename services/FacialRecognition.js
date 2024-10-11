import AWS from 'aws-sdk';
import { captureImage } from './doorbellService'; // Servicio para capturar imagen desde el timbre

// Configuración de AWS Rekognition
AWS.config.update({
  accessKeyId: 'YOUR_AWS_ACCESS_KEY',
  secretAccessKey: 'YOUR_AWS_SECRET_KEY',
  region: 'YOUR_AWS_REGION',
});

const rekognition = new AWS.Rekognition();

// Función para manejar el evento del timbre, captura y analiza la imagen
export const handleDoorbellAndAnalyze = async () => {
  try {
    // Captura de imagen desde el timbre
    const image = await captureImage();

    if (!image) {
      console.error('No se pudo capturar la imagen del timbre');
      return null;
    }

    // Análisis de la imagen con Rekognition
    const params = {
      Image: {
        Bytes: image, // Suponiendo que la imagen es binaria o base64
      },
      Attributes: ['ALL'],
    };

    const rekognitionResult = await rekognition.detectFaces(params).promise();
    console.log('Resultado de Rekognition:', rekognitionResult);

    // Aquí puedes añadir lógica adicional para priorizar usuarios frecuentes o conocidos
    return rekognitionResult;

  } catch (error) {
    console.error('Error en el análisis de la imagen:', error);
    return null;
  }
};
