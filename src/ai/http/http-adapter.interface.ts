/**
 * Interface for HTTP adapters that can be used to make HTTP requests.
 * This interface provides a decoupled way to make HTTP requests,
 * allowing for easy replacement of the underlying HTTP client.
 */
export interface HttpAdapter {
  /**
   * Sends a POST request to the specified URL with the provided data.
   *
   * @param url - The URL to send the request to
   * @param data - The data to send in the request body
   * @param config - Optional configuration for the request
   * @returns A promise that resolves with the response data
   */
  post<T = any, R = any>(url: string, data?: T, config?: any): Promise<R>;

  /**
   * Sends a GET request to the specified URL.
   *
   * @param url - The URL to send the request to
   * @param config - Optional configuration for the request
   * @returns A promise that resolves with the response data
   */
  get<R = any>(url: string, config?: any): Promise<R>;
}
