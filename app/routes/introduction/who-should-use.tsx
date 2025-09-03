import type { Route } from "../+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Who Should Use" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function WhoShouldUse() {
    return (
        <>

            <h2>Who Should Use Suraksha 2.0</h2>

            <p>Suraksha 2.0 is designed for different user types within an organization, each with specific responsibilities to ensure safety compliance and effective incident management.</p>

            <div className="note">
                <strong>Tip:</strong> Select your role carefully during login to access the features and actions assigned to you.
            </div>

            <table>
                <thead>
                    <tr>
                        <th>User Type</th>
                        <th>Can Report</th>
                        <th>Can Approve/Reconsider</th>
                        <th>Can Assign/Take Action</th>
                        <th>View Scope</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Executive</td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Own reports only</td>
                    </tr>
                    <tr>
                        <td>Supervisor</td>
                        <td>Yes</td>
                        <td>Yes – for team reports</td>
                        <td>No</td>
                        <td>Reports from own team</td>
                    </tr>
                    <tr>
                        <td>Safety Officer</td>
                        <td>Yes</td>
                        <td>Yes – approve, reject, reconsider team reports</td>
                        <td>Yes – can assign approved reports to another safety officer</td>
                        <td>Reports approved by supervisor for their team</td>
                    </tr>
                    <tr>
                        <td>Regional Manager</td>
                        <td>No</td>
                        <td>No</td>
                        <td>Yes – act on reports handled by safety officers</td>
                        <td>All reports in their region</td>
                    </tr>
                    <tr>
                        <td>EHS Officer (EHSO)</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Yes – full oversight</td>
                        <td>All reports for the company</td>
                    </tr>
                </tbody>
            </table>

            <div className="warning">
                <strong>Note:</strong> Each user should perform only the actions permitted for their role to maintain proper workflow and accountability.
            </div>

        </>
    );
}
