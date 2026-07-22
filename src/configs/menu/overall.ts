export interface OverallMenuItem {
  key: string
  title: string
  label: string
  label_key: string
  icon: string
  default_color_icon: string
  path: string
  path_active: string
  path_list: string[]
}

const overall: OverallMenuItem[] = [
  {
    key: "1",
    title: "ABOUT US",
    label: "ABOUT US",
    label_key: "about_us",
    icon: "",
    default_color_icon: "",
    path: "/about-us",
    path_active: "/about-us",
    path_list: [],
  },
  {
    key: "2",
    title: "GUARANTEE",
    label: "GUARANTEE",
    label_key: "guarantee",
    icon: "",
    default_color_icon: "",
    path: "/guarantee",
    path_active: "/guarantee",
    path_list: [],
  },
  {
    key: "3",
    title: "CONTACT",
    label: "CONTACT",
    label_key: "contact",
    icon: "",
    default_color_icon: "",
    path: "/contact",
    path_active: "/contact",
    path_list: [],
  },
]

export default overall