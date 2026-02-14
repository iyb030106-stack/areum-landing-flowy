import { supabase } from './supabaseClient';

const SESSION_ID_KEY = 'areum_session_id_v1';

function generateSessionId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getSessionId(): string {
  try {
    const existing = localStorage.getItem(SESSION_ID_KEY);
    if (existing) return existing;

    const id = generateSessionId();
    localStorage.setItem(SESSION_ID_KEY, id);
    return id;
  } catch {
    return generateSessionId();
  }
}

export async function trackEvent(
  eventName: 'page_view' | 'cta_click' | 'email_submit',
  metadata?: Record<string, unknown>
): Promise<void> {
  if (!supabase) return;
  try {
    await supabase.from('events').insert({
      event_name: eventName,
      session_id: getSessionId(),
      path: typeof window !== 'undefined' ? window.location.pathname : null,
      metadata: metadata ?? null
    });
  } catch {
    // Intentionally swallow errors so analytics never blocks UX
  }
}

export async function saveLead(email: string): Promise<void> {
  if (!supabase) return;
  try {
    await supabase.from('leads').insert({
      email,
      session_id: getSessionId(),
      source: 'landing'
    });
  } catch {
    // Intentionally swallow errors so submit UX is smooth
  }
}
