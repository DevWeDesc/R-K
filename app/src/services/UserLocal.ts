export const userLoged = localStorage.user ? JSON.parse(localStorage?.user) : null;
export const headerRequest = {
  headers: {
    Authorization: `Bearer ${userLoged?.token}`,
  },
};
