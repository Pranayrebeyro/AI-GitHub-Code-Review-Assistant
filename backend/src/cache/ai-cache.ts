interface CacheEntry {
  expires: number;
  response: string;
}

const aiCache = new Map<
  string,
  CacheEntry
>();

const CACHE_TIME =
  1000 * 60 * 30;

export function getAICache(
  key: string
) {
  const cached = aiCache.get(key);

  if (!cached) {
    return null;
  }

  if (Date.now() > cached.expires) {
    aiCache.delete(key);
    return null;
  }

  return cached.response;
}

export function saveAICache(
  key: string,
  response: string
) {
  aiCache.set(key, {
    expires:
      Date.now() + CACHE_TIME,
    response,
  });
}