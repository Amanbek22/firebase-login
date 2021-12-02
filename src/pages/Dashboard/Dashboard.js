import firebase from "../../firebase/index.js"

export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <button className="primary-btn" onClick={() => firebase.auth().signOut()}>Logout</button>
        </div>
    )
}
