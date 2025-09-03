/**
 * Aplica uma "mascaração" leve no email:
 * - Altera somente o prefixo (parte antes do @).
 * - Faz 1 ou 2 modificações discretas (ponto extra, troca de letra, duplicação).
 * - Não altera o domínio.
 */
export function maskEmailPrefix(email: string): string {
  const trimmed = email.trim();
  const at = trimmed.indexOf("@");
  if (at <= 0) return email;

  let local = trimmed.slice(0, at);
  const domain = trimmed.slice(at); // inclui o @

  if (local.length < 2) {
    return local + "." + domain; // se for muito curto, só insere um ponto
  }

  // decide aleatoriamente entre 3 tipos de alteração
  const rand = Math.random();

  if (rand < 0.33) {
    // Inserir um ponto em uma posição aleatória
    const pos = Math.floor(Math.random() * (local.length - 1)) + 1;
    local = local.slice(0, pos) + "." + local.slice(pos);
  } else if (rand < 0.66) {
    // Trocar uma letra por outra vizinha no alfabeto
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const pos = Math.floor(Math.random() * local.length);
    const ch = local[pos].toLowerCase();
    const idx = letters.indexOf(ch);
    const newCh = idx >= 0 ? letters[(idx + 1) % letters.length] : "x";
    local = local.slice(0, pos) + newCh + local.slice(pos + 1);
  } else {
    // Duplicar um caractere qualquer
    const pos = Math.floor(Math.random() * local.length);
    local = local.slice(0, pos + 1) + local[pos] + local.slice(pos + 1);
  }

  return local + domain;
}
