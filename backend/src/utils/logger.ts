export function logInfo(message: string) {
  console.log(
    `[INFO] ${new Date().toISOString()} - ${message}`
  );
}

export function logError(
  message: string,
  error?: unknown
) {
  console.error(
    `[ERROR] ${new Date().toISOString()} - ${message}`
  );

  if (error) {
    console.error(error);
  }
}

export function logWarn(message: string) {
  console.warn(
    `[WARN] ${new Date().toISOString()} - ${message}`
  );
}