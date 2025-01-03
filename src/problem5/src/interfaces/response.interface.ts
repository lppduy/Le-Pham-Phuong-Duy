export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
  metadata?: {
      page?: number;
      limit?: number;
      total?: number;
      totalPages?: number;
  };
}