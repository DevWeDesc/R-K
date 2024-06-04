import Cookies from "js-cookie";

const userLoged = localStorage.user ? JSON.parse(localStorage?.user) : null;
export const headerRequest = {
  headers: {
    Authorization: `Bearer ${userLoged?.token}`,
  },
};

export const cookieSection = !Cookies.get("forgotPasswordPage")
  ? Cookies.set("forgotPasswordPage", "")
  : Cookies.get("forgotPasswordPage");
