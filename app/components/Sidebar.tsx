import { NavLink } from "react-router";
import React from "react";

type NavItem = {
    label: string;
    icon: React.ReactNode;
    to: string;
};

type NavSection = {
    title: string;
    items: NavItem[];
};

const navSections: NavSection[] = [
    {
        title: "Introduction",
        items: [
            { label: "About Suraksha 2", icon: <>ℹ️</>, to: "/introduction/about" },
            { label: "Purpose of the App", icon: <>🎯</>, to: "/introduction/purpose" },
            { label: "Who Should Use This App", icon: <>👥</>, to: "/introduction/who-should-use" },
            { label: "System Requirements", icon: <>💻</>, to: "/introduction/system-requirements" },
        ],
    },
    {
        title: "Getting Started",
        items: [
            { label: "Installing the App", icon: <>📥</>, to: "/getting-started/installing" },
            { label: "Logging In", icon: <>🔑</>, to: "/getting-started/logging-in" },
            { label: "First-time Setup", icon: <>🛠️</>, to: "/getting-started/first-time-setup" },
            { label: "Home Screen", icon: <>🏠</>, to: "/getting-started/home-screen" },
        ],
    },
    {
        title: "Reporting",
        items: [
            { label: "Report an Observation", icon: <>👀</>, to: "/reporting/observation" },
            { label: "Report an Incident", icon: <>🚨</>, to: "/reporting/incident" },

            { label: "Safety Walk", icon: <>🚶</>, to: "/reporting/safety-walk" },
        ],
    },
    // {
    //     title: "Notifications & Alerts",
    //     items: [
    //         { label: "Types of Notifications", icon: <>🔔</>, to: "/notifications/types" },
    //         { label: "Responding to Notifications", icon: <>✉️</>, to: "/notifications/responding" },
    //         { label: "Setting Notification Preferences", icon: <>⚙️</>, to: "/notifications/preferences" },
    //     ],
    // },
    // {
    //     title: "Dashboard & Reports",
    //     items: [
    //         { label: "Viewing Submitted Reports", icon: <>📊</>, to: "/dashboard/view-reports" },
    //         { label: "Filtering by Type, Status, or Date", icon: <>🔍</>, to: "/dashboard/filtering" },
    //         { label: "Status Labels & Their Meaning", icon: <>🏷️</>, to: "/dashboard/status-labels" },
    //         { label: "Exporting / Downloading Reports", icon: <>⬇️</>, to: "/dashboard/export" },
    //     ],
    // },
    // {
    //     title: "User Roles & Permissions",
    //     items: [
    //         { label: "EHS Officer", icon: <>🛡️</>, to: "/roles/ehs-officer" },
    //         { label: "Supervisor / TL", icon: <>🧑‍💼</>, to: "/roles/supervisor" },
    //         { label: "Contractor Employee", icon: <>👷</>, to: "/roles/contractor" },
    //         { label: "GCPL Employee", icon: <>🏢</>, to: "/roles/gcpl" },
    //         { label: "Role-wise Access Rights", icon: <>🔐</>, to: "/roles/access-rights" },
    //     ],
    // },
    // {
    //     title: "Settings & Profile",
    //     items: [
    //         { label: "Editing Profile Information", icon: <>✏️</>, to: "/settings/edit-profile" },
    //         { label: "Changing Password", icon: <>🔒</>, to: "/settings/change-password" },
    //         { label: "Language Preferences", icon: <>🌐</>, to: "/settings/language" },
    //         { label: "Contact Support", icon: <>📞</>, to: "/settings/contact-support" },
    //     ],
    // },
    // {
    //     title: "FAQs & Troubleshooting",
    //     items: [
    //         { label: "Common Login Issues", icon: <>❓</>, to: "/faq/login-issues" },
    //         { label: "Photo Upload Errors", icon: <>🖼️</>, to: "/faq/photo-upload-errors" },
    //         { label: "Network Issues", icon: <>📡</>, to: "/faq/network-issues" },
    //         { label: "Contacting IT / Safety Team", icon: <>☎️</>, to: "/faq/contact-it-safety" },
    //     ],
    // },
    // {
    //     title: "Glossary",
    //     items: [
    //         { label: "Safety Terms Used in the App", icon: <>📖</>, to: "/glossary/safety-terms" },
    //         { label: "Acronyms", icon: <>🔤</>, to: "/glossary/acronyms" },
    //     ],
    // },
    // {
    //     title: "Appendix",
    //     items: [
    //         { label: "App Version History", icon: <>📅</>, to: "/appendix/version-history" },
    //         { label: "Contact Details for Safety Department", icon: <>🏥</>, to: "/appendix/contact-safety" },
    //         { label: "Links to Safety Policies", icon: <>📜</>, to: "/appendix/safety-policies" },
    //     ],
    // },
];


export default function Sidebar() {
    return (
        <aside className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="logo">Suraksha 2.0</div>
                <div className="version">Documentation v1.0</div>
            </div>

            <nav className="nav-menu">
                {navSections.map((section) => (
                    <div key={section.title} className="nav-section">
                        <div className="nav-section-title">{section.title}</div>
                        {section.items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `nav-item ${isActive ? "active" : ""}`
                                }
                            >
                                {item.icon} {item.label}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>
        </aside>
    );
}
