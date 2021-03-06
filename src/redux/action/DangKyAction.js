import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import { ACCESSTOKEN, USER_REGISTER } from "../../util/setting";

export const dangKyAction = (userRegister) => {
  const fullUser = {
    taiKhoan: userRegister.taiKhoan,
    matKhau: userRegister.matKhau,
    email: userRegister.email,
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "hocVien",
    hoTen: `${Math.random()}`,
  };
  return async (dispatch) => {
    try {
      const result1 = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: fullUser,
      });
      dispatch({
        type: "XU_LY_DANG_KY_THANH_CONG",
        tenDangKy: result1.data.taiKhoan,
      });
      localStorage.setItem(USER_REGISTER, JSON.stringify(result1.data));
      localStorage.setItem(ACCESSTOKEN, result1.data);

      alert("Dang ky thanh cong");
    } catch (errors) {
      console.log(errors.reponse?.data);
    }
  };
};
