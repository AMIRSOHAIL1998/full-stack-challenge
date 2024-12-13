import AxiosObject from './AxiosObject';

const readUser = async () => {
  try {
    const response = await AxiosObject.get('/users/read');
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const readSingleUser = async (id: string) => {
  try {
    const response = await AxiosObject.get(`/users/read/${id}`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUserByID = async (id: string, paylaod: any) => {
  try {
    const response = await AxiosObject.post(`/users/update/${id}`, paylaod);
    if (response?.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUserByID = async (id: string) => {
  try {
    const response = await AxiosObject.post(`/users/delete/${id}`);
    if (response?.status === 200) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

const userLogin = async (payload: { email: string; password: string }) => {
  try {
    const response = await AxiosObject.post(`/auth/login`, payload);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const userSignup = async (payload: {
  email: string;
  password: string;
  name: string;
  type: string;
}) => {
  try {
    const response = await AxiosObject.post(`/auth/signup`, payload);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserStates = async () => {
  try {
    const response = await AxiosObject.get(`/users/statistics`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const authorizeUser = async (payload: { token: string }) => {
  try {
    const response = await AxiosObject.post(`/auth/authorize`, payload);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  readUser,
  readSingleUser,
  updateUserByID,
  deleteUserByID,
  userLogin,
  userSignup,
  authorizeUser,
  getUserStates,
};
