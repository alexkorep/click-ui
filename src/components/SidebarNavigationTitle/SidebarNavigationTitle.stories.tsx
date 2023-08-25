import { SidebarNavigationTitle } from "@/components";

export default {
  component: SidebarNavigationTitle,
  title: "Sidebar/NavigationTitle",
  tags: ["sidebar", "navigation-title", "autodocs"],
};

export const Default = {
  args: {
    icon: "table",
    selected: false,
    label: <a href="/profile">Tables</a>,
  },
};