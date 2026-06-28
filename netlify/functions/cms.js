const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO = 'somoslang/elias-regules-web';
const IDENTITY_URL = 'https://eliasregules.lang.uy/.netlify/identity';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
};

exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: cors, body: '' };
  }

  // Verificar token de Netlify Identity
  const auth = (event.headers.authorization || event.headers.Authorization || '').replace(/^Bearer\s+/, '');
  if (!auth) return { statusCode: 401, headers: cors, body: JSON.stringify({ error: 'No token' }) };

  try {
    const check = await fetch(`${IDENTITY_URL}/user`, { headers: { Authorization: `Bearer ${auth}` } });
    if (!check.ok) return { statusCode: 401, headers: cors, body: JSON.stringify({ error: 'Token inválido' }) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: 'Auth error: ' + e.message }) };
  }

  if (!GITHUB_TOKEN) return { statusCode: 500, headers: cors, body: JSON.stringify({ error: 'GITHUB_TOKEN no configurado' }) };

  const filePath = (event.queryStringParameters || {}).path || '';
  if (!filePath) return { statusCode: 400, headers: cors, body: JSON.stringify({ error: 'Falta path' }) };

  const url = `https://api.github.com/repos/${REPO}/contents/${filePath}`;
  const ghHeaders = {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'User-Agent': 'Elias-Regules-Admin',
  };

  try {
    const res = await fetch(url, {
      method: event.httpMethod,
      headers: ghHeaders,
      body: ['PUT', 'POST'].includes(event.httpMethod) ? event.body : undefined,
    });
    const body = await res.text();
    return { statusCode: res.status, headers: { ...cors, 'Content-Type': 'application/json' }, body };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: e.message }) };
  }
};
