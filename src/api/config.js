/**
 * Created by 周亮 on 2018/9/7.
 */
import { constructQueryParams } from "./common";
let rootUrl = `/factory`;
export default {
  user: {
    get_role_detail: id => `${rootUrl}/user/employee/${id}`
  }
};
