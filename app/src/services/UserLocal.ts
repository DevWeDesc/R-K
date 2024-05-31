const userLoged = localStorage.user ? JSON.parse(localStorage?.user) : null;
export const headerRequest = {
  headers: {
    Authorization: userLoged?.token,
  },
};
