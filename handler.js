const AWS = require('aws-sdk'); // Importa o SDK da AWS para interagir com os serviços (ex.: S3).

// Cria uma instância do serviço S3 para realizar operações no bucket.
const s3 = new AWS.S3();

// Função Lambda para realizar o upload de arquivos no S3.
module.exports.upload = async (event) => {
  // Parseia o corpo da requisição (JSON enviado pelo cliente).
  const body = JSON.parse(event.body);

  // Configura os parâmetros necessários para o upload no S3.
  const params = {
    Bucket: 'video-upload-bucket', // Nome do bucket S3 onde o arquivo será armazenado.
    Key: `videos/${body.fileName}`, // Caminho e nome do arquivo no bucket.
    Body: Buffer.from(body.fileContent, 'base64'), // Converte o conteúdo do arquivo (em base64) para binário.
    ContentType: body.contentType, // Define o tipo de conteúdo do arquivo (ex.: 'video/mp4').
  };

  try {
    // Faz o upload do arquivo no bucket S3 de forma assíncrona.
    await s3.upload(params).promise();

    // Retorna uma resposta de sucesso ao cliente.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Upload realizado com sucesso!' }),
    };
  } catch (error) {
    // Caso ocorra um erro, loga o erro no console.
    console.error(error);

    // Retorna uma resposta de erro ao cliente.
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro no upload' }),
    };
  }
};
// Função Lambda para processar eventos de novos arquivos no bucket S3.
module.exports.generateThumbnail = async (event) => {
    // Loga no console os detalhes do evento recebido.
    // O evento contém informações do objeto recém-criado no bucket.
    console.log('Novo arquivo recebido:', event);
  
    // Placeholder: Neste ponto, você integraria o processamento real (ex.: gerar miniatura com FFmpeg).
  
    // Retorna uma resposta de sucesso indicando que o processamento foi iniciado.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Processamento iniciado!' }),
    };
  };
  