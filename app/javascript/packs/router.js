import VueRouter from "vue-router"

import Top from "../pages/Top.vue"
import Mypage from "../pages/Mypage.vue"
import Tag from "../pages/Tag.vue"

const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/mypage/dashboard",
    name: "mypage",
    component: Mypage
  },
  {
    path: "/mypage/tags/:id",
    name: "mypageTag",
    component: Tag
  },
  {
    path: "/users/:user_uuid/tags/:id",
    name: "userTag",
    component: Tag
  }
]

export default new VueRouter({ mode: "history", routes })