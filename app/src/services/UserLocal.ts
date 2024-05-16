const userLoged = JSON.parse(localStorage.user);
export const headerRequest = {
  headers: {
    Authorization: `Bearer ${userLoged?.token}`,
  },
};
