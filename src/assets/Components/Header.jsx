function Header() {
    return <div>
        <div className="bg-black bg-opacity-60 flex justify-between py-4 text-white ">
            <div>

                <h1 className="text-4xl pl-16 ">MenaMotors</h1>
            </div>
            <div>
                <i class="fa-solid fa-cart-shopping pr-16 text-3xl pt-2"></i>
            </div>
        </div>
        <div className="">
       
            <video className="w-full h-72" src="src/video&images/istockphoto-1373192412-640_adpp_is.mp4">


                
            </video>
            {/* <ul className="flex gap-8  ml-14 absolute top-28  ">
                    <li className="hover:text-red-900">ABOUT</li>
                    <li className="hover:text-red-900">TEAM</li>
                    <li className="hover:text-red-900">HOME</li>
                    <li className="hover:text-red-900">SHIPPING SOLUTIONS</li>
                    <li className="hover:text-red-900">CAR</li>
                    <li className="hover:text-red-900">CONTACT</li>
                </ul> */}

        </div>
    </div>
}
export default Header