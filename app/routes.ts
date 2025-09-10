import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // Introduction
    route("/introduction/about", "routes/introduction/about.tsx"),
    route("/introduction/purpose", "routes/introduction/purpose.tsx"),
    route("/introduction/who-should-use", "routes/introduction/who-should-use.tsx"),
    route("/introduction/system-requirements", "routes/introduction/system-requirements.tsx"),

    // // Getting Started
    route("/getting-started/installing", "routes/getting-started/installing.tsx"),
    route("/getting-started/logging-in", "routes/getting-started/logging-in.tsx"),
    route("/getting-started/first-time-setup", "routes/getting-started/first-time-setup.tsx"),
    route("/getting-started/home-screen", "routes/getting-started/home-screen.tsx"),

    // // Reporting
    route("/reporting/incident", "routes/reporting/incident.tsx"),
    route("/reporting/observation", "routes/reporting/observation.tsx"),
    route("/reporting/safety-walk", "routes/reporting/safety-walk.tsx"),



    route("/reporting_action/incident", "routes/reporting_action/incident.tsx"),
     route("/reporting_action/observation", "routes/reporting_action/observation.tsx"),
      route("/reporting_action/safety-walk", "routes/reporting_action/safety_walk.tsx"),




    
     //route("/reporting_action/observation", "routes/notifications/responding.tsx"),
     //route("/reporting_action/safetywalk", "routes/notifications/preferences.tsx"),

    // // Notifications & Alerts
    // route("/notifications/types", "routes/notifications/types.tsx"),
    // route("/notifications/responding", "routes/notifications/responding.tsx"),
    // route("/notifications/preferences", "routes/notifications/preferences.tsx"),

    // // Dashboard & Reports
    // route("/dashboard/view-reports", "routes/dashboard/view-reports.tsx"),
    // route("/dashboard/filtering", "routes/dashboard/filtering.tsx"),
    // route("/dashboard/status-labels", "routes/dashboard/status-labels.tsx"),
    // route("/dashboard/export", "routes/dashboard/export.tsx"),

    // // User Roles & Permissions
    // route("/roles/ehs-officer", "routes/roles/ehs-officer.tsx"),
    // route("/roles/supervisor", "routes/roles/supervisor.tsx"),
    // route("/roles/contractor", "routes/roles/contractor.tsx"),
    // route("/roles/gcpl", "routes/roles/gcpl.tsx"),
    // route("/roles/access-rights", "routes/roles/access-rights.tsx"),

    // // Settings & Profile
    // route("/settings/edit-profile", "routes/settings/edit-profile.tsx"),
    // route("/settings/change-password", "routes/settings/change-password.tsx"),
    // route("/settings/language", "routes/settings/language.tsx"),
    // route("/settings/contact-support", "routes/settings/contact-support.tsx"),

    // // FAQs & Troubleshooting
    // route("/faq/login-issues", "routes/faq/login-issues.tsx"),
    // route("/faq/photo-upload-errors", "routes/faq/photo-upload-errors.tsx"),
    // route("/faq/network-issues", "routes/faq/network-issues.tsx"),
    // route("/faq/contact-it-safety", "routes/faq/contact-it-safety.tsx"),

    // // Glossary
    // route("/glossary/safety-terms", "routes/glossary/safety-terms.tsx"),
    // route("/glossary/acronyms", "routes/glossary/acronyms.tsx"),

    // // Appendix
    // route("/appendix/version-history", "routes/appendix/version-history.tsx"),
    // route("/appendix/contact-safety", "routes/appendix/contact-safety.tsx"),
    // route("/appendix/safety-policies", "routes/appendix/safety-policies.tsx"),
] satisfies RouteConfig;
