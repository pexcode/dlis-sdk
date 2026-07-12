import { ApiError } from "./api/core/ApiError"
 
interface HttpError {
  status: number
  message: string
  messageKey: string
}

function traceError(error: unknown): HttpError | undefined {
  const exceptionError = error as ApiError
  return exceptionError.body as HttpError
}

async function exceptionHandler(error: unknown) {
  const exceptionError = traceError(error)
  if (exceptionError) {
    console.log(exceptionError.message)
    console.log(exceptionError.messageKey)
    console.log(exceptionError.status)
    throw new Error(exceptionError.message)
  }
}

export async function ApiCall<T>(
  service: () => Promise<T>,
): Promise<{ result?: T; error?: HttpError }> {
  try {
    const result = await service()

    return { result }
 
  } catch (error) {
    await exceptionHandler(error)
    return { error: traceError(error) }
  }
}

