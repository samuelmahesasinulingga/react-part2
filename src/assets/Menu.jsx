function Menu() {
    return (
    <>
        {/* menu */}
        <section className="content">
            <div className="h-auto py-20 px-[12%] flex flex-col gap-5 text-center m-auto">
                <div className="text-black">
                    <h1 className="text-4xl font-bold text-primary-dark">Brands & Pricing</h1>
                    <h4 className="text-primary-dark font-bold">Best Seller our Menu</h4>
                </div>
                <div className="flex gap-2">
                    <div className="p-2 font-bold">
                        <img
                        src="https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="p-2 h-[80%] rounded-[50%]"
                        />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Rp.200.000</p>
                    </div>
                    <div className="p-2 font-bold">
                        <img
                        src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="p-2 h-[80%] rounded-[50%]"
                        />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Rp.200.000</p>
                    </div>
                    <div className="p-2 font-bold">
                        <img
                        src="https://images.pexels.com/photos/15496956/pexels-photo-15496956/free-photo-of-pria-laki-laki-lelaki-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="p-2 h-[80%] rounded-[50%]"
                        />
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Rp.200.000</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Menu;