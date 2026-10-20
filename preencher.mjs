// Uso: node preencher.mjs "email@exemplo.com" "Nome 1, Nome 2" "20/10/2026"
import { readFileSync, writeFileSync } from 'node:fs';
const [email, equipe, data] = process.argv.slice(2);
if (!email || !equipe || !data) { console.error('Uso: node preencher.mjs "e-mail" "equipe" "data"'); process.exit(1); }
for (const f of ['index.html', 'privacidade.html', 'termos.html']) {
  let t = readFileSync(f, 'utf8');
  t = t.replaceAll('[E-MAIL]', email).replaceAll('[EQUIPE]', equipe).replaceAll('[DATA]', data);
  writeFileSync(f, t);
  console.log(f, /\[(E-MAIL|EQUIPE|DATA)\]/.test(t) ? 'AINDA TEM MARCADOR' : 'ok');
}
