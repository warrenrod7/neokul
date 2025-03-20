export default function notification() {

    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-center text-3xl font-semibold">NOTIFICATIONS</h1>
            <div className=" h-full w-full border">
                <div className="h-20 border p-7 flex flex-row "><p>xyz invited you to join a group</p></div>
                <div className="h-20 border p-7"><p>abc sent you a connection request</p></div>
                <div className="h-20 border p-7"><p>yyy invited you to join a group</p></div>
                <div className="h-20 border p-7"><p>bbb sent you a connection request</p></div>
               
                
            </div>

        </div>
    );
}