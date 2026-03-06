import type { CountryQuestions, ChoiceQuestion } from '../types/data';

/**
 * Fisher-Yates shuffle. Returns a new shuffled array (does not mutate).
 */
export function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = out[i];
    const b = out[j];
    out[i] = b!;
    out[j] = a!;
  }
  return out;
}

function shuffleOptions(q: ChoiceQuestion): ChoiceQuestion {
  return { ...q, options: shuffle(q.options) };
}

/**
 * 옵션 순서·문항 순서를 랜덤화한 새 CountryQuestions 반환 (매 로드/진입 시 다른 순서).
 */
export function randomizeQuestions(q: CountryQuestions): CountryQuestions {
  return {
    flagFind: shuffleOptions(q.flagFind),
    foodFind: shuffle(q.foodFind).map(shuffleOptions),
    cultureFind: shuffleOptions(q.cultureFind),
    landmarkFind: shuffle(q.landmarkFind).map(shuffleOptions),
    oxQuiz: shuffle(q.oxQuiz),
  };
}
