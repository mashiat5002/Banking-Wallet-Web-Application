import { LucideProps, Home, User, Settings, Plus, Check, X, Search } from "lucide-react";

export const Icons = {
  home: Home,
  user: User,
  settings: Settings,
  plus: Plus,
  check: Check,
  x: X,
  search: Search,
};

export type IconType = keyof typeof Icons;
