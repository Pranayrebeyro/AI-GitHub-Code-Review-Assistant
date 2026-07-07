interface ErrorFallbackProps {
  error?: Error;
  onRetry?: () => void;
}

const ErrorFallback = ({
  error,
  onRetry,
}: ErrorFallbackProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-xl rounded-xl bg-slate-900 p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-red-500">
          Oops!
        </h1>

        <h2 className="mb-3 text-xl font-semibold text-white">
          Something went wrong.
        </h2>

        <p className="mb-6 text-slate-400">
          An unexpected error occurred while rendering this page.
        </p>

        {error && (
          <div className="mb-6 rounded bg-slate-950 p-4 text-left text-sm text-red-400">
            {error.message}
          </div>
        )}

        <button
          onClick={onRetry}
          className="rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;