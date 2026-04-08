function Dashboard(props) {
    const isLoggedIn = true; // This would typically come from your app's state

    return(
         <div className ='min-h-screen bg-gray-100 p-6 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <h2 className='text-xl font-bold mb-4 text-blue-600'>Dashboard</h2>
            </div>
            {
                // isLoggedIn && (
                //     <p className="text-green-600 font-semibold">
                //         WellCome to the dashboard!
                //     </p>
                // )

                

                props.status &&(
                   <p className="text-green-600 font-semibold">
                       WellCome to the dashboard!
                     </p>
                )

                

            }
        </div>

    )
}
export default Dashboard