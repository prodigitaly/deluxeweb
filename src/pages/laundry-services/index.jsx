import React, { useState, useEffect} from "react";

// ** Next Imports
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import AuthPages from "../../components/Auth/AuthPages";

import HeaderHome from "src/components/HeaderHome";
import Footer from "src/components/Footer";
import Link from "next/link";
import ServicesDetailSidebar from "src/components/ServicesDetailSidebar";
import Head from "next/head";

//seo

function laundryServices({onClickLogin}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [appLink, setAppLink] = useState("");
  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const [loginModalOpen, setLoginModalOpen] = useState(() => {
    return !!router.query.requireAuth ?? false;
  });

  const toggleLoginModal = () => {
    setLoginModalOpen((old) => !old);
  };
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <>
      <Head>
        <title>Garment Laundry Services in Durham & Beyond | SparkleUp</title>
        <meta name="description" content="Top-tier garment laundry services with SparkleUp. Convenient pick-up & delivery, affordable and perfect for busy people. Sign up today and download our app!"/>
      </Head>
      <Modal isOpen={loginModalOpen} onClose={closeLoginModal}>
        <AuthPages />
      </Modal>
      <HeaderHome onClickLogin={toggleLoginModal} isLoggedIn={isLoggedIn} />
      <div className="md:flex container pt-10 pb-20" >
        <div className="w-[280px] max-[767px]:m-auto max-[767px]:pb-5">
            <ServicesDetailSidebar />
        </div>
        <div className="md:w-[calc(100%-320px)] ml-auto">
            <div className="after:bg-[rgba(22,98,210,.5)] after:absolute after:top-0 after:left-0 after:w-full after:h-full relative mb-8">
                <img src="/images/bg.jpg" alt="" />
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                <div className="xl:w-[calc(100%-350px)]">
                  <h1 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Premium Garment Laundry Services in the Heart of North Carolina</h1>
                  <p className="mb-4">Step into the world of SparkleUp, where Durham's laundry service landscape is transformed by our commitment to affordable luxury. We're not just another 
                  {isLoggedIn ? 
                    (
                      <Link href="/schedule"><a className="font-medium text-primary underline mx-1">laundry service</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="cursor-pointer text-primary font-medium mx-1 underline">
                      laundry service
                    </button>                    
                  )} 
                   we're a beacon of convenience and quality in North Carolina's heartland.</p>
                  <p className="mb-4">Elevate Your Wardrobe without the High Costs!</p>
                  <p className="mb-4">Our laundry services in Durham are designed for those who seek the finer things in life but demand practicality. From bustling Raleigh to serene Chapel Hill, we deliver top-tier garment care that won't break the bank. It's the affordable laundry service near you that comes with a promise – to keep your clothes looking their best, so you can too.</p>                  
                  {isLoggedIn ? 
                    (
                      <p><button onClick={() => router.push("/schedule")} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Register with us </button> today and experience the future of garment care.</p>
                    ) : (
                    <div>
                      <button
                        onClick={toggleLoginModal}
                        className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">
                        Register with us
                      </button> 
                      today and experience the future of garment care. 
                    </div>
                  )} 
                </div>
                <div className="ml-auto pl-4 xl:mt-0 mt-4">
                  <img src="images/Laundry-01.png" alt="Sparkle Up Laundry Services in the Heart of North Carolina" className="m-auto" />
                </div>
            </div>
            <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <h2 className="md:text-4xl text-[22px] font-bold mb-5 text-center">Our Garment Laundry Services</h2>              
              <div className="min-[992px]:flex gap-8 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary
              [&>div]:text-center [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div]:p-6 [&>div]:w-[33.33%] [&>div]:rounded-[6px] max-[991px]:[&>div]:w-[100%] max-[991px]:[&>div]:mb-5">
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Dress</h3>
                      <span ><img className="max-h-[200px]" src="/images/Dress.png" alt="" /></span>
                      <p>In search of expert dress laundering services? SparkleUp is your local hero. We handle your cherished dresses with the care they deserve, ensuring every pleat and fold is as flawless as when you first fell in love with them.</p>
                  </div>
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Suit</h3>
                      <span ><img className="max-h-[200px]" src="/images/Suit.png" alt="" /></span>
                      <p>For the discerning professional, our suit cleaners near you are at your service, offering meticulous cleaning and pressing to keep you looking sharp and professional.</p>
                  </div>
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Shirt</h3>
                      <span ><img className="max-h-[200px]" src="/images/Shirt.png" alt="" /></span>
                      <p>Embrace the convenience of our local shirt laundering service. Perfect for the on-the-go individuals of Durham, we provide a swift, quality clean that means your shirts are always ready for action.</p>
                  </div>
              </div>             
            </div>
            <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">                    
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Designed for Your Busy Lifestyle</h2>
                <p>Time is precious, especially for the working professionals and students of Durham and its sister cities. Our laundry pickup and delivery near you service is tailored to fit your hectic schedule. With just a few clicks on our laundry app, we'll whisk away your laundry and return it fresh and folded – giving you one less thing to worry about.</p>              
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">How It Works - Easy in simple steps</h2>
                <p className="mb-2"> - Sign Up on the <Link href="https://www.sparkleup.us/"><a target="_blank" className="font-medium text-primary underline">www.sparkleup.us</a></Link> or 
                <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners"><a target="_blank" className="font-medium text-primary underline ml-1">Download the App</a></Link></p>
                <p className="mb-2"> - Choose specific laundry items, or a monthly plan</p>
                <p className="mb-2"> - Schedule a Pick-Up: Choose the time and address that works for you, and we'll handle the rest.</p>
                <p className="mb-5"> - Relax and Enjoy: Your laundry will be picked up, and returned clean, fresh, and ready to use.</p>
                <p className="mb-5">Take the first step towards laundry freedom.</p>
                <Link  href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners">
                  <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block" target="_blank">Download the app now!</a>
                </Link>
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Household-04.png" alt="Sign up on our website or download our app in simple steps." className="m-auto" />
              </div>
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Pricing Made Transparent</h2>
                <p className="mb-2">We believe in transparency, especially when it comes to pricing. Our wash and fold laundry service prices are competitive and clear, with no hidden fees. You'll know exactly what you're paying for – exceptional service at great value.</p>                
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Laundry-02.png" alt="Pricing Made Transparent with Sparle Up" className="m-auto max-h-[200px]" />
              </div>
            </div>
            <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">              
              <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Serving Our Local Communities</h2>
              <p className="mb-2">As the fabric of our communities weaves together, so does our commitment to providing accessible laundry services throughout Durham and beyond. We stand as a pillar of the neighborhood, offering affordable laundry solutions near you with a personal touch. It's not just about clean clothes; it's about enriching lives in every corner of our cherished North Carolina.</p>                            
              <div className="mt-8">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => router.push("/schedule")}
                    className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">
                    Join the SparkleUp family today
                  </button>
                </>
                  ) : (
                  <>
                  <button
                      onClick={toggleLoginModal}
                      className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">
                      Join the SparkleUp family today
                  </button>
                  </>
              )}              
          </div>
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold">Testimonials: Hear from Our Satisfied Customers</h2>
                <p className="mb-4">But don't just take our word for it. Here's what our satisfied customers have to say:</p>
                <div className="gap-8 [&>div]:border-[1px] [&>div]:border-[#eee] [&>div]:p-4 [&>div>h4]:text-[18px] [&>div>h4]:font-bold [&>div>h4]:pb-2 [&>div>h4]:uppercase [&>div>h4]:text-primary">
                  <div className="">
                      <p className="pb-2">"SparkleUp transformed my weekly chore into a breeze! Best wedding dress cleaners near me hands down."</p>
                      <h4>- Emily R., Cary</h4>
                  </div>
                  <div className="mt-4">
                      <p className="pb-2">"As a student, I have zero time for laundry. SparkleUp's shirt laundry near me service is a game-changer!"</p>
                      <h4>- Alex T., Durham</h4>
                  </div>
                </div>                  
                <div className="mb-2 mt-4">Join our community of happy clients.</div>
                <div class="flex  mt-3">
                {
                  isLoggedIn ? 
                  (
                    <Link href="/schedule">
                      <a class="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Sign up today!</a>
                    </Link>
                  ) : (
                    <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Sign up today!</button>
                  )
                }
              </div>
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Household-06.png" alt="Testimonials: Hear from Our Satisfied Customers" className="m-auto" />
              </div>
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Get Started Today with SparkleUp</h2>
                <p className="mb-4">Ready to experience the ultimate in garment care? 
                {
                  isLoggedIn ? 
                  (
                    <Link href="/schedule">
                      <a class="text-primary cursor-pointer mr-1 font-medium underline">Join</a>
                    </Link>
                  ) : (
                    <button onClick={toggleLoginModal} className="text-primary cursor-pointer bg-transparent border-0 p-0 mr-1 font-medium underline">Join</button>
                  )
                }
                  the SparkleUp family today.</p>
                <p>For the mobile lovers, download our app for dry cleaning and laundry door to door service and schedule your first pick-up online. Embrace the freedom of a laundry-free life!</p>
                <div className="hidden">
                  <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners">
                    <a target="_blank" className="text-primary underline font-medium">Download the app</a>
                  </Link> 
                  <span className="px-2">|</span>
                  {
                      isLoggedIn ? 
                      (<Link href="/schedule"><a className="text-primary font-medium underline ml-1">Schedule a pick-up</a></Link>) : 
                      (<button onClick={toggleLoginModal} className="text-primary font-medium underline ml-1">Schedule a pick-up</button>)
                  }
                  <span className="px-2">|</span> 
                  {
                      isLoggedIn ? 
                      (<Link href="/schedule"><a className="text-primary font-medium underline ml-1">Learn more about our services</a></Link>) : 
                      (<button onClick={toggleLoginModal} className="text-primary font-medium underline ml-1">Learn more about our services</button>)
                  }                    
                </div>

                <div className="mt-8 flex gap-4">
                  <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners">
                    <a target="_blank" className="flex cursor-pointer items-center rounded-xl bg-black py-2 px-3">
                    <img src="/images/google-play.png" className="w-8" alt=""/>
                      <div className="ml-3 w-32 text-white">
                        <div className="text-sm font-medium">GET IT ON</div>
                        <div className="text-lg font-bold leading-5">Google Play</div>
                      </div>
                    </a>
                  </Link>
                  <Link href="https://apps.apple.com/us/app/sparkleup/id6446848569">
                    <a target="_blank" className="flex cursor-pointer items-center rounded-xl bg-black py-2 px-3">
                      <img src="/images/app-store.png" className="h-8 w-8 object-contain" alt=""/>
                      <div className="ml-3 w-32 text-white">
                        <div className="text-sm font-medium">
                          Download on the
                        </div>
                        <div className="text-lg font-bold leading-5">
                          App Store
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Household-07.png" alt="Sign up on our website or download our app." className="m-auto" />
              </div>
            </div>
            <div className="">
              <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Frequently Asked Questions (FAQs)</h2>
              <div className="grid gap-4 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div>h3]:p-4 [&>div>h3]:border-b-[1px] [&>div>h3]:border-[#eee] [&>div>p]:p-4 [&>div]:rounded-[6px]">
                  <div className="">
                    <h3>1: How do I schedule a garment laundry pick-up?</h3>
                    <p>Scheduling a pick-up is easy! Simply download our SparkleUp app or visit our website, choose 'Garment Laundry' from our services, select your preferred pick-up time, and we'll handle the rest. We offer flexible scheduling to fit your busy lifestyle.</p>
                  </div>
                  <div className="">
                    <h3>2: What areas do you serve for garment laundry services?</h3>
                    <p>We proudly serve residents in Durham, Raleigh, Chapel Hill, Cary, Mebane, Carrboro, Pittsboro, Garner, Fuquay Varina, Holly Springs, and Apex. Not sure if you're in our service area? Contact us, and we'll be happy to let you know!</p>
                  </div>
                  <div className="">
                    <h3>3: Can I trust SparkleUp with delicate or special-care garments?</h3>
                    <p>Absolutely. Our experienced professionals are trained to handle a wide range of garments, including those requiring special care. We use eco-friendly products and tailor our cleaning methods to each specific garment's needs.</p>
                  </div>
                  <div className="">
                    <h3>4: What makes SparkleUp different from other laundry services?</h3>
                    <p>SparkleUp stands out with our commitment to convenience, quality, and community. Our door-to-door service, user-friendly app, and eco-conscious approach provide a laundry experience that's not just about cleaning clothes—it's about giving you back your time.</p>
                  </div>
                  <div className="">
                    <h3>Are there any subscription plans for regular garment laundry services?</h3>
                    <p>Yes, we offer subscription plans tailored to your laundry needs. Whether you're a student, a working professional, or a busy household, we have a plan that can save you time and money. Check out our subscription options on our Services page or contact us for more information.</p>
                  </div>                  
              </div>
          </div>

          <div className="mt-8 text-center">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => router.push("/schedule")}
                  className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white w-[200px] m-auto cursor-pointer">
                  Order Now
                </button>
              </>
                ) : (
                <>
                <button
                    onClick={toggleLoginModal}
                    className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white w-[200px] m-auto cursor-pointer">
                    Order Now
                </button>
                </>
            )}              
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
laundryServices.authGuard = false;
export default laundryServices;

