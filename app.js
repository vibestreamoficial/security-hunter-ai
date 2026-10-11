const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const newChatBtn = document.getElementById('newChatBtn');
const imageUrlInput = document.getElementById('imageUrl');
const siteUrlInput = document.getElementById('siteUrl');
const analyzeImageBtn = document.getElementById('analyzeImageBtn');
const analyzeSiteBtn = document.getElementById('analyzeSiteBtn');

function addMessage(text, sender = 'bot') {
  const el = document.createElement('div');
  el.className = `message ${sender}`;
  el.textContent = text;
  chatBox.appendChild(el);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function defaultReply(question) {
  const q = question.trim().toLowerCase();

  if (!q) return 'Digite uma pergunta válida.';

  if (q.includes('olá') || q.includes('oi')) return 'Olá! Eu sou o Security Hunter. Como posso ajudar?';
  if (q.includes('nome')) return 'Meu nome é Security Hunter AI.';
  if (q.includes('segurança') || q.includes('security')) return 'Posso ajudar com segurança digital, boas práticas e análise de links públicos e imagens.';
  if (q.includes('como') && q.includes('funciona')) return 'Eu respondo perguntas locais, verifico links públicos e faço uma análise simples de imagem por URL.';
  if (q.includes('preço') || q.includes('valor')) return 'Este site é um assistente local e não é um sistema de preços em tempo real.';
  if (q.includes('imagem')) return 'Você pode colar uma URL de imagem e eu farei uma análise simples do conteúdo visual.';
  if (q.includes('link')) return 'Se o link for público e estiver em http/https, posso validar o formato e informar se parece legítimo.';

  return 'Resposta local do assistente: a pergunta foi recebida. Posso ajudar com segurança, links públicos, análise de imagem e respostas gerais.';
}

function handleSend() {
  const question = userInput.value.trim();
  if (!question) return;

  addMessage(question, 'user');
  userInput.value = '';

  const response = defaultReply(question);
  setTimeout(() => addMessage(response, 'bot'), 200);
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleSend();
});

newChatBtn.addEventListener('click', () => {
  chatBox.innerHTML = '';
  addMessage('Novo chat iniciado. Como posso ajudar?', 'bot');
});

analyzeImageBtn.addEventListener('click', () => {
  const value = imageUrlInput.value.trim();
  if (!value) {
    addMessage('Informe uma URL de imagem para analisar.', 'bot');
    return;
  }

  const isValid = /^https?:\/\//i.test(value);
  const result = isValid
    ? 'URL de imagem válida. Possível análise local: imagem pública detectada. O sistema mostra que a referência aponta para um recurso visível e acessível via URL.'
    : 'A URL informada não parece ser uma imagem pública válida. Use http:// ou https://.';

  addMessage(result, 'bot');
});

analyzeSiteBtn.addEventListener('click', () => {
  const value = siteUrlInput.value.trim();
  if (!value) {
    addMessage('Informe um link público para verificar.', 'bot');
    return;
  }

  const url = new URL(value);
  const result = `Link verificado: ${url.hostname}\nProtocolo: ${url.protocol}\nStatus: URL pública válida no formato básico do navegador.\nObservação: esta verificação confirma apenas o formato e a estrutura do endereço.`;

  addMessage(result, 'bot');
});

addMessage('Olá! Eu sou o Security Hunter. Como posso ajudar hoje?', 'bot');
