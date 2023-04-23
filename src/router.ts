import Auth from "./pages/Auth";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Featured from "./pages/Featured";
import GearCage from "./pages/GearCage";
import {
  BUSINESS_ROUTE,
  CONTACTS_ROUTE,
  FEATURED_ROUTE,
  GEAR_CAGE_ROUTE,
  LOGIN_ROUTE,
  SIGN_ROUTE,
} from "./utils/const";

export interface IRouter {
  path: string;
  Component: () => React.ReactElement;
}

export const publicRouter: IRouter[] = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: SIGN_ROUTE,
    Component: Auth,
  },
];

export const privateRouter: IRouter[] = [
  {
    path: BUSINESS_ROUTE,
    Component: Business,
  },
  {
    path: FEATURED_ROUTE,
    Component: Featured,
  },
  {
    path: GEAR_CAGE_ROUTE,
    Component: GearCage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contact,
  },
];
