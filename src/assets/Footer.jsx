import FooterSocialMedia from "./FooterSocialMedia";

function Footer() {
return (
    <>
        <footer className="content">
            <div className="h-auto py-20 px-[12%] flex gap-2 my-0 mx-auto bg-primary-light">
                <div className="w-[30%] my-0 mx-auto text-black">
                    <h3 className="font-bold">Samuel's Clothes</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                        culpa!
                    </p>
                </div>
                <div className="w-[30%] my-0 mx-auto text-black">
                    <h3 className="font-bold">About</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                        culpa!
                    </p>
                </div>
                <div className="w-[30%] my-0 mx-auto text-black">
                    <h3 className="font-bold">Contact</h3>
                    <div className="flex gap-2 my-0 mx-auto">
                        <i className="fa-solid fa-address-card"></i>
                        <p>
                            Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Kode Pos: 57365
                        </p>
                    </div>
                    <div className="flex gap-2 my-0 mx-auto">
                        <i className="fa-solid fa-phone"></i>
                        <p>+628636566578</p>
                    </div>
                    <div className="flex gap-2 my-0 mx-auto">
                        <i className="fa-solid fa-envelope"></i>
                        <p>samuelsclothes@gmail.com</p>
                    </div>
                </div>
                <div className="w-[30%] my-0 mx-auto text-black">
                    <h3>Social Media</h3>
                    <FooterSocialMedia text="@samuelsclothes" />
                    <FooterSocialMedia text="@samuelsclothes" />
                    <FooterSocialMedia text="@samuelsclothes" />
                    <FooterSocialMedia text="@samuelsclothes" />
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer;