export interface TelegramRequest {
  name: string;
  telegram: string;
  reason: string;
}

export interface ErrorResponse {
  error: string;
}

export interface SuccessResponse {
  success: boolean;
}
