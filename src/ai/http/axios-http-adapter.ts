import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { HttpAdapter } from './http-adapter.interface';

/**
 * Implementation of the HttpAdapter interface using Axios.
 * This adapter uses the NestJS HttpService, which is a wrapper around Axios.
 */
@Injectable()
export class AxiosHttpAdapter implements HttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Sends a GET request using Axios.
   *
   * @param url - The URL to send the request to
   * @param config - Optional Axios request configuration
   * @returns A promise that resolves with the response data
   */
  async get<R = any>(url: string, config?: any): Promise<R> {
    const response = await lastValueFrom(
      this.httpService.get<R>(url, config)
    );
    return response.data;
  }

  /**
   * Sends a POST request using Axios.
   *
   * @param url - The URL to send the request to
   * @param data - The data to send in the request body
   * @param config - Optional Axios request configuration
   * @returns A promise that resolves with the response data
   */
  async post<T = any, R = any>(url: string, data?: T, config?: any): Promise<R> {
    const response = await lastValueFrom(this.httpService.post<R>(url, data, config));
    return response.data;
  }
}
