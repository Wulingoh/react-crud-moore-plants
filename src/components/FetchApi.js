
// Stub hooks – return empty arrays (no API)
export const useCategoryList = () => [];
export const useLightingCareList = () => [];
export const useCareLevelList = () => [];
export const useWateringList = () => [];
export const useHumidityList = () => [];

export const useLightingCareShopList = () => [];
export const useCareLevelShopList = () => [];
export const useCategoryShopList = () => [];
export const useGalleryImgShopList = () => [];

export const useProductDetailsShopList = () => {
  return null;
  // Or a single placeholder: return { title: 'Placeholder', price: 0, facts: [] };
};

// Mock user for skeleton auth (AuthContext can show "logged in" state)
const MOCK_USER = { userId: 1, name: 'Demo', email: 'demo@example.com', role: 'Admin' };

export const getCurrentUser = async () => null;
// To test admin: return MOCK_USER instead of null

export const login = async () => MOCK_USER;
export const logout = async () => undefined;
export const signUp = async () => MOCK_USER;
export const forgotPassword = async () => ({});
export const resetPassword = async () => ({});