// Mapa de homoglyphs visualmente similares (latino -> cirílico)
const CONFUSABLES: Record<string, string> = {
  'A':'А','a':'а','B':'В','E':'Е','e':'е','K':'К','k':'к','M':'М','m':'м',
  'H':'Н','O':'О','o':'о','P':'Р','p':'р','C':'С','c':'с','T':'Т','X':'Х','x':'х',
  'Y':'У','y':'у','I':'І','i':'і'
};

// Dígitos "fullwidth" (U+FF10 … U+FF19) para parecerem iguais visualmente
const FULLWIDTH_DIGITS = ['０','１','２','３','４','５','６','７','８','９'];

// Insere U+200B entre grupos para atrapalhar scrapers simples
function insertZeroWidthBetweenGroups(s: string, groups = [2,2,5,4]) {
  const clean = s;
  const out: string[] = [];
  let i = 0, gi = 0;
  while (i < clean.length) {
    const size = groups[gi] ?? 4;
    out.push(clean.slice(i, i + size));
    i += size; gi++;
  }
  return out.join('\u200B');
}

/** Garante que ao menos 1 char seja trocado por homoglyph no email (parte local). */
export function obfuscateEmail(email: string): string {
  const [local, domain = ""] = email.split("@");
  let changed = false;
  const chars = Array.from(local);
  for (let idx = 0; idx < chars.length; idx++) {
    const ch = chars[idx];
    if (CONFUSABLES[ch]) {
      // 50% de chance por caractere
      if (Math.random() < 0.5) {
        chars[idx] = CONFUSABLES[ch];
        changed = true;
      }
    }
  }
  // Se nada mudou, força a primeira ocorrência possível
  if (!changed) {
    for (let idx = 0; idx < chars.length; idx++) {
      const ch = chars[idx];
      if (CONFUSABLES[ch]) { chars[idx] = CONFUSABLES[ch]; changed = true; break; }
    }
  }
  return domain ? `${chars.join("")}@${domain}` : chars.join("");
}

/** 
 * Obfusca telefone:
 * - Normaliza para exibição (remove espaços/traços)
 * - Insere zero-widths entre blocos
 * - Troca ≥1 dígito por versão fullwidth
 * Retorna APENAS para exibição/armazenamento mascarado (não usar no checkout).
 */
export function obfuscatePhoneForDisplay(phone: string): string {
  const clean = phone.replace(/[^\d+]/g, ""); // mantém + e dígitos
  const parts = clean.split(""); // char array
  let swapped = false;
  for (let i = 0; i < parts.length; i++) {
    const d = parts[i];
    if (/\d/.test(d)) {
      if (Math.random() < 0.3) {
        parts[i] = FULLWIDTH_DIGITS[Number(d)];
        swapped = true;
      }
    }
  }
  if (!swapped) {
    // força ao menos 1 troca (procura primeiro dígito)
    for (let i = 0; i < parts.length; i++) {
      if (/\d/.test(parts[i])) { parts[i] = FULLWIDTH_DIGITS[Number(parts[i])]; break; }
    }
  }
  const rejoined = parts.join("");
  return insertZeroWidthBetweenGroups(rejoined);
}

/** Normaliza telefone para E.164 simples (best-effort). Ajuste se precisar. */
export function normalizePhoneE164(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (input.trim().startsWith("+")) return "+" + digits; // já tinha +
  // Se for Brasil e você quiser forçar +55 quando faltar:
  // if (digits.length >= 11) return "+55" + digits;
  return "+" + digits; // genérico
}
