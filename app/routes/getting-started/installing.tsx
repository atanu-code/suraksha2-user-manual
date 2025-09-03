import type { Route } from "../+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Who Should Use" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Installing() {
    return (
        <>

            <h2>Installing Suraksha 2.0</h2>

            <p>You can access Suraksha 2.0 directly through your web browser or install it as a Progressive Web App (PWA) for a faster, app-like experience on mobile and desktop devices.</p>

            <div className="note">
                <strong>Tip:</strong> Installing as a PWA lets you launch Suraksha 2.0 from your home screen, use it offline for draft reporting, and enjoy faster load times.
            </div>

            <h3>1. Open in Browser</h3>
            <ol className="step-list">
                <li>
                    <strong>Launch your browser</strong><br />
                    Open the latest version of Chrome, Edge, or Safari.
                </li>
                <li>
                    <strong>Go to the Suraksha 2.0 URL</strong><br />
                    Enter <code>https://suraksha2.company.com</code> in the address bar and press Enter.
                </li>
                <li>
                    <strong>Sign in</strong><br />
                    Use your corporate credentials to log in.
                </li>
            </ol>

            <h3>2. Install as PWA on Android</h3>
            <ol className="step-list">
                <li>
                    <strong>Open Chrome</strong><br />
                    Navigate to <code>https://suraksha2.company.com</code>.
                </li>
                <li>
                    <strong>Open install menu</strong><br />
                    Tap the <strong>⋮</strong> menu (top-right corner).
                </li>
                <li>
                    <strong>Choose "Install App"</strong><br />
                    Select <em>Install App</em> or <em>Add to Home screen</em>.
                </li>
                <li>
                    <strong>Confirm installation</strong><br />
                    Tap <em>Install</em> — the app icon will appear on your home screen.
                </li>
            </ol>

            <h3>3. Install as PWA on iOS (iPhone & iPad)</h3>
            <ol className="step-list">
                <li>
                    <strong>Open Safari</strong><br />
                    Navigate to <code>https://suraksha2.company.com</code>.
                </li>
                <li>
                    <strong>Open share menu</strong><br />
                    Tap the <strong>Share</strong> button (square with an arrow up).
                </li>
                <li>
                    <strong>Choose "Add to Home Screen"</strong><br />
                    Scroll and select <em>Add to Home Screen</em>.
                </li>
                <li>
                    <strong>Confirm</strong><br />
                    Tap <em>Add</em> — the app icon will appear on your home screen.
                </li>
            </ol>

            <h3>4. Install on Windows (Desktop PWA)</h3>
            <ol className="step-list">
                <li>
                    <strong>Open Chrome or Edge</strong><br />
                    Navigate to <code>https://suraksha2.company.com</code>.
                </li>
                <li>
                    <strong>Install prompt</strong><br />
                    Look for the <strong>Install</strong> icon in the address bar (a monitor with a down arrow).
                </li>
                <li>
                    <strong>Click Install</strong><br />
                    The app will open in its own window and be available in your Start Menu.
                </li>
            </ol>

            <h3>5. Install on MacBook (Desktop PWA)</h3>
            <ol className="step-list">
                <li>
                    <strong>Open Chrome or Safari</strong><br />
                    Navigate to <code>https://suraksha2.company.com</code>.
                </li>
                <li>
                    <strong>For Chrome</strong><br />
                    Click the <strong>Install</strong> icon in the address bar and confirm.
                </li>
                <li>
                    <strong>For Safari</strong><br />
                    Go to <em>File → Add to Dock</em> for quick access.
                </li>
            </ol>

            <div className="warning">
                <strong>Important:</strong> Always keep your browser updated and grant camera, storage, and notification permissions for the best reporting experience.
            </div>

        </>
    );
}
