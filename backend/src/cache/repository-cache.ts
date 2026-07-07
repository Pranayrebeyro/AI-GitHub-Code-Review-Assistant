interface CacheEntry {
  expires: number;
  files: any[];
}

const repositoryCache = new Map<
  string,
  CacheEntry
>();

const CACHE_TIME =
  1000 * 60 * 10;

export function getRepositoryCache(
  key: string
) {
  const cached =
    repositoryCache.get(key);

  if (!cached) {
    return null;
  }

  if (Date.now() > cached.expires) {
    repositoryCache.delete(key);
    return null;
  }

  return cached.files;
}

export function saveRepositoryCache(
  key: string,
  files: any[]
) {
  repositoryCache.set(key, {
    expires:
      Date.now() + CACHE_TIME,
    files,
  });
}