
import { Link } from "react-router-dom";


function Login(){

    return <>

        <div className=" w-full h-full relative bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 ">
            <div className=" h-20 w-full relative flex bg-gray-900  items-center justify-center ">
            <h1 className="h-12 w-28 text-[1.2rem] bg-blue-500 relative flex text-amber-50 text-center items-center justify-center border-2 border-amber-50 rounded-lg ">WhiteHub</h1>
            </div>
            <main className="  ">
                <form>
                    <fieldset className="  ">
                        <div>

                        </div>
                        <div>
                            <button></button>
                            <button></button>
                        </div>

                    </fieldset>
                </form>
            </main>
            <footer className="  ">
                <Link className="  " to="/auth/terms"> terms and conditions </Link>
                </footer>
        </div>
    
    </>
}

export default Login;