import callSuarakuApi from '@/lib/api';

export const getAllUsers = async () => {
  const response = await callSuarakuApi.get('/user/get-all-users');
  return response.data.data;
};

export const getUserById = async (id: string) => {
  const response = await callSuarakuApi.get(`/user/get-user/${id}`);
  return response.data.data;
};