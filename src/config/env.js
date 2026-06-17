export const ENV = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'VietFly',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),
  ENABLE_MOCK_API: import.meta.env.VITE_ENABLE_MOCK_API === 'true',
}