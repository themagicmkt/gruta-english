export type LeadRaw = {
  name: string;
  email: string;
  phone: string; // E.164 recomendado (+5511999999999)
  prayer: string;
};

export type LeadMasked = {
  name: string;   // pode manter real se quiser
  email: string;  // com homoglyphs (≥1 letra trocada)
  phone: string;  // com zero-width e ≥1 dígito fullwidth
  prayer: string; // idem
};

const KEY_RAW = "lv_lead_raw_v2";
const KEY_MASKED = "lv_lead_masked_v2";

export function saveLead(raw: LeadRaw, masked: LeadMasked) {
  sessionStorage.setItem(KEY_RAW, JSON.stringify(raw));
  sessionStorage.setItem(KEY_MASKED, JSON.stringify(masked));
}

export function loadLeadRaw(): LeadRaw | null {
  const raw = sessionStorage.getItem(KEY_RAW);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function loadLeadMasked(): LeadMasked | null {
  const raw = sessionStorage.getItem(KEY_MASKED);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function clearLead() {
  sessionStorage.removeItem(KEY_RAW);
  sessionStorage.removeItem(KEY_MASKED);
}
