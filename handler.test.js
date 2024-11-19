// Mock do AWS SDK para evitar interações reais com o S3
jest.mock('aws-sdk', () => {
    const mockS3Instance = {
      upload: jest.fn().mockReturnThis(),
      promise: jest.fn().mockResolvedValue({}), // Simula uma resposta bem-sucedida.
    };
    return { S3: jest.fn(() => mockS3Instance) };
  });
  
  const { upload } = require('./handler'); // Importa a função que será testada.
  
  test('Deve retornar "Upload realizado com sucesso!"', async () => {
    // Simula o evento recebido pelo Lambda.
    const mockEvent = {
      body: JSON.stringify({
        fileName: 'video-teste.mp4',
        fileContent: Buffer.from('conteudo-teste').toString('base64'),
        contentType: 'video/mp4',
      }),
    };
  
    // Executa a função.
    const result = await upload(mockEvent);
  
    // Valida a resposta.
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe('Upload realizado com sucesso!');
  }, 10000); // Ajusta o timeout para 10 segundos.
  
