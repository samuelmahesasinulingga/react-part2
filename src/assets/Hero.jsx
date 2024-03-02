function Hero() {
    return (
    <>
        {/* hero */}
        <div className="top-0 right-0 left-0 m-auto">
            <div
                className="
                bg-[url('https://images.pexels.com/photos/6460791/pexels-photo-6460791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[500px] py-20 px-[12%] bg-no-repeat bg-center bg-cover flex justify-center items-center flex-col">
            <div className="text-black flex items-center justify-center flex-col gap-2">
                <h1 className="text-4xl font-bold text-primary-dark">Samuel's Clothes</h1>
                <h4 className="text-primary-dark font-bold">Kue ulang tahun custum dan menarik</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur, iure?
                </p>
            </div>
            <a href="" className="text-black font-bold py-2 px-4 rounded-xl bg-primary">Buy Now</a>
            </div>
        </div>
    </>
    )
}

export default Hero;