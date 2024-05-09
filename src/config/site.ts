export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "FleetNav",
    description: "Manage your fleet with a nice experience.",
    navMenuItems: [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: "icon-[akar-icons--statistic-up]",
        },
        {
            label: "Trucks",
            href: "/projects",
            icon: "icon-[mdi--truck-outline]",
        },
        {
            label: "Routes",
            href: "/routes",
            icon: "icon-[material-symbols--location-on-outline]",
        },
        {
            label: "Chat",
            href: "/chat",
            icon: "icon-[ion--chatbubbles-outline]",
        },
        {
            label: "Settings",
            href: "/settings",
            icon: "icon-[solar--settings-linear]",
        },
    ],
};
