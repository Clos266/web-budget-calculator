import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("calculate", "pages/calculate.tsx"),
] satisfies RouteConfig;
