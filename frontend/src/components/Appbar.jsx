
export default function ({ app }) {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };

    return (
        <div className="flex justify-between items-center px-16 py-5 bg-purple-950 mb-10">
            <div>
                <h1 className="text-2xl font-bold">Ionots - {app} Dashboard</h1>
            </div>
            <div>
                <button onClick={handleLogout} className="p-3 rounded-lg hover:bg-blue-900 border">Logout</button>
            </div>
        </div>
    )
}