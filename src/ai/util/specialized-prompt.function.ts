import { AI_CONFIG } from '../config/ai.conf';

export function formattedPrompt(text = 'sobre que puedo preguntar') {
  return `${AI_CONFIG.SYSTEM_PROMPT}

Usuario: ${text}

Asistente:`;
}
