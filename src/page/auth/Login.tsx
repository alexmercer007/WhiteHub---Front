
import { Link } from "react-router-dom";


function Login() {

    return <>

        <div className=" h-20 w-full relative flex   items-center justify-center ">
            <h1 className="h-12 w-28 text-[1.2rem] bg-blue-400 relative flex text-amber-50 text-center items-center justify-center border-2 border-amber-50 rounded-lg ">WhiteHub</h1>
        </div>
        <main className=" w-full h-[80%] relative flex items-center justify-center  ">
            <form className=" w-100 h-100 bottom-30 relative bg-[#1d1b1b] shadow-[10px,10px,50px] shadow-[#9e4747] rounded-xl border-3  ">
                <fieldset className=" w-full h-full flex justify-center flex-col items-center">
                    <div className=" w-full h-full relative flex flex-col justify-center items-center gap-3 p-8">
                        <div className=" w-full relative flex flex-col ">
                            <label htmlFor="name">Name:</label>
                            <input
                                className=" w-full h-10 p-2 rounded-lg border-2 "
                                name="name"
                                type="text"
                                required />
                        </div>
                         
                        <div className=" w-full relative flex flex-col">
                            <label htmlFor="password">Password:</label>
                            <input
                                className=" w-full h-10 p-2 rounded-lg border-2 "
                                name="password"
                                type="password"
                                minLength={8}
                                maxLength={40}
                                required />
                        </div>

                    </div>
                    <hr className=" w-[95%] "/>
                    <div className=" w-full h-full relative flex flex-col justify-center items-center gap-3 p-4">
                        <button className=" w-35 h-10 shadow-2xl bg-green-300 rounded-lg cursor-pointer hover:bg-green-400 hover:scale-95 active:bg-green-500 active:scale-85 focus:outline-none focus:ring-2 focus:ring-green-200 transition-all duration-150">Login</button>
                        <button className=" w-35 h-10 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 hover:scale-95 active:bg-blue-700 active:scale-85 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-150">Create account</button>
                        <Link className=" text-[0.8rem] " to="/auth/recoverPassword"> Did you forget your password? </Link>
                    </div>
                </fieldset>
            </form>
        </main>
        <footer className=" w-full h-[10%] flex justify-center items-center ">
            <Link className="  " to="/auth/terms"> Terms and conditions </Link>
        </footer>
    </>
}

export default Login;