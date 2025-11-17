function AlertMsg({ type = "info", mensage}){

    const colors = {
        success: "p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-200",
        error: "p-4 mb-4 text-red-800 bg-red-200 border-red-300",
        warning: "p-4 mb-4 text-yellow-800 bg-yellow-200 border-yellow-300",
        info: "p-4 mb-4 text-blue-800 bg-blue-200 border-blue-300",
    };

    return(
        <div className={`p-4 border rounded-lg mb-4 ${colors[type]}`}>
           {mensage}
        </div>
    )
}
export default AlertMsg;