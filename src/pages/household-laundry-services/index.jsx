import React, { useContext, useState, useEffect} from "react";

// ** Next Imports
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import AuthPages from "../../components/Auth/AuthPages";
import { AuthPageContext } from "../../context/AuthPageContext";
import HeaderHome from "src/components/HeaderHome";
import Footer from "src/components/Footer";
import Link from "next/link";
import ServicesDetailSidebar from "src/components/ServicesDetailSidebar";
import Head from "next/head";


//seo

function householdLaundryServices() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useContext(AuthPageContext);
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
        <title>Premium Household Laundry Services in Durham | SparkleUp</title>
        <meta name="description" content="Experience SparkleUp's top household laundry services. Schedule easy pick-up and delivery. Perfect for busy professionals, and families. Download our app!"/>
      </Head>    
      <Modal isOpen={loginModalOpen} onClose={closeLoginModal}>
        <AuthPages />
      </Modal>
      <HeaderHome onClickLogin={toggleLoginModal} isLoggedIn={isLoggedIn} />
        <div className="md:flex container pt-10 pb-20">
            <div className="w-[280px] max-[767px]:m-auto max-[767px]:pb-5">
              <ServicesDetailSidebar />
            </div>
            <div className="md:w-[calc(100%-320px)] ml-auto">
                <div className="after:bg-[rgba(22,98,210,.5)] after:absolute after:top-0 after:left-0 after:w-full after:h-full relative mb-8">
                    <img src="/images/bg.jpg" alt="" />
                </div>
                <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <div className="xl:w-[calc(100%-350px)]">
                    <h1 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Premium Household Laundry Services in the Triangle Area</h1>
                    <p className="mb-4">Welcome to SparkleUp, where we redefine the chore of laundry into a seamless, stress-free experience for the residents of Durham, Raleigh, Chapel Hill, Cary, and beyond.</p>
                    <p>Our door-to-door laundry solution caters to the bustling lives of professionals, the dynamic schedules of students, and the daily demands of households.</p>
                    <div class="flex  mt-5">
                      {
                        isLoggedIn ? 
                        (
                          <Link href="/schedule">
                            <a class="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Explore Our Full Range of Services</a>
                          </Link>
                        ) : (
                          <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Explore Our Full Range of Services</button>
                        )
                      }
                    </div>
                  </div>
                  <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                    <img src="images/Household-01.png" alt="Premium Household Laundry Services in Durham." className="m-auto" />
                  </div>
                </div>
                <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <div className="xl:w-[calc(100%-350px)]">
                    <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Why Choose SparkleUp for Your Household Laundry Needs</h2>
                    <p className="mb-4">In today's fast-paced world, your time is precious. SparkleUp is here to give you back hours of your week by taking laundry off your to-do list. Our reliable service ensures that your household linens are not just cleaned but are cared for with the highest standards. Plus, with our easy-to-use <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners"><a target="_blank" className="text-primary underline font-medium">laundry service app</a></Link>, managing your laundry needs has never been more straightforward or more convenient.</p>                    
                    <p>Don't let laundry day weigh you down!</p>
                    <div class="flex  mt-5">
                      {
                        isLoggedIn ? 
                        (
                          <Link href="/schedule">
                            <a class="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Schedule your first pick-up today</a>
                          </Link>
                        ) : (
                          <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Schedule your first pick-up today</button>
                        )
                      }
                    </div>
                  </div>
                  <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                    <img src="images/Household-02.png" alt="Choose SparkleUp for Your Household Laundry Needs." className="m-auto" />
                  </div>
                </div>
                <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <h2 className="md:text-4xl text-[22px] font-bold">Our Household Laundry Services</h2>                  
                </div>
                <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">                  
                  <h3 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Comforter and Bed Linen Laundry</h3>
                  <p className="mb-4">Dive into the comfort of freshly laundered bed linens and comforters without lifting a finger. Our specialized cleaning process guarantees that every fiber is treated with care, offering you the ultimate clean and comfort. From delicate lace to sturdy cotton, trust us to return your items in pristine condition.</p>
                  <p className="mb-4">Ready for a cozy, clean sleep?</p>                  
                  <div class="flex  mt-5">
                    {
                      isLoggedIn ? 
                      (
                        <Link href="/schedule">
                          <a class="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Book your bedding service now.</a>
                        </Link>
                      ) : (
                        <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white cursor-pointer">Book your bedding service now.</button>
                      )
                    }
                  </div>
                </div>
                <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <div className="xl:w-[calc(100%-350px)]">
                    <h3 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Blanket and Duvet Cleaning</h3>
                    <p className="mb-4">Wrap yourself in warmth with our expert blanket and duvet cleaning services. We handle your bedding with the utmost attention, ensuring that every blanket and duvet is returned to you in top-notch condition, ready for those chilly nights or cozy movie marathons.</p>
                    <p className="mb-4">And for those garments that require a little extra attention, our dry cleaning services are just a click away. Visit our <Link href="/sparkleup-dry-cleaning-laundry-services"><a  className="text-primary underline font-medium mx-[2px]">Dry Cleaning page</a></Link></p>
                  </div>
                  <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                    <img src="images/Household-03.png" alt="Our Household Laundry Services: Blankets, duvets, bed linen, and comforter" className="m-auto" />
                  </div>
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
                    <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners">
                      <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block" target="_blank">Download the app now!</a>
                    </Link>
                  </div>
                  <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                    <img src="images/Household-04.png" alt="Sign up on our website or Download our app in 3 easy steps." className="m-auto" />
                  </div>
                </div>
                <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <div className="xl:w-[calc(100%-350px)]">
                    <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Pricing and Packages</h2>                    
                    <p className="mb-4">We believe in transparency and affordability. That's why our pricing is straightforward, with no hidden fees. Our packages are designed to offer you the best value, whether you're a student in need of  <Link href="/laundry-services"><a className="text-primary underline font-medium">regular laundry services</a></Link> or a family looking for a one-time clean.</p>
                    <p>Check out our competitive pricing and packages upon registration and choose what works for you.</p>
                  </div>
                  <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                    <img src="images/Household-05.png" alt="Affordable prices with Sparkle Up." className="m-auto max-h-[250px]" />
                  </div>
                </div>
                <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                  <div className="xl:w-[calc(100%-350px)]">
                    <h2 className="md:text-4xl text-[22px] font-bold">Testimonials and Reviews</h2>
                    <p className="mb-4">But don't just take our word for it. Here's what our satisfied customers have to say:</p>
                    <div className="gap-8 [&>div]:border-[1px] [&>div]:border-[#eee] [&>div]:p-4 [&>div>h4]:text-[18px] [&>div>h4]:font-bold [&>div>h4]:pb-2 [&>div>h4]:uppercase [&>div>h4]:text-primary">
                      <div className="">
                          <p className="pb-2">"SparkleUp has changed the way I do laundry. It's like having a magic wand!"</p>
                          <h4>- Jamie, Cary</h4>
                      </div>
                      <div className="mt-4">
                          <p className="pb-2">"The quality and convenience are unmatched. Highly recommend!"</p>
                          <h4>- Alex, Durham</h4>
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
                    <img src="images/Household-06.png" alt="Sparkle Up awesome testimonials and reviews." className="m-auto" />
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
                    <img src="images/Household-07.png" alt="Sign up on our website or Download our app." className="m-auto" />
                  </div>
                </div>
                <div className="">
                    <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Frequently Asked Questions (FAQs) about SparkleUp</h2>
                    <p className="pb-8">Household Laundry Services</p>
                    <div className="grid gap-4 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div>h3]:p-4 [&>div>h3]:border-b-[1px] [&>div>h3]:border-[#eee] [&>div>p]:p-4 [&>div]:rounded-[6px]">
                        <div className="">
                            <h3>How do I schedule a laundry pick-up?</h3>
                            <p>Scheduling a pick-up is easy! Simply download the SparkleUp app or visit our website, select 'Schedule a Pick-Up', choose a time that fits your schedule, and we'll take care of the rest. You can also set up recurring pick-ups if you need regular service.</p>
                        </div>
                        <div className="">
                            <h3>2. What areas do you serve for household laundry?</h3>
                            <p>We proudly serve the residents of Durham, Raleigh, Chapel Hill, Cary, Mebane, Carrboro, Pittsboro, Garner, Fuquay Varina, Holly Springs, and Apex. If you're in these areas, we've got you covered!</p>
                        </div>
                        <div className="">
                          <h3>3. Can I trust SparkleUp with special care items, like wedding dresses or delicate garments?</h3>
                          <p>Absolutely! Our team of experts is trained to handle even the most delicate items with special care instructions. We offer specialized services for items that require extra attention, ensuring they are returned to you in impeccable condition.</p>
                        </div>
                        <div className="">
                          <h3>4. What makes SparkleUp different from other laundry services?</h3>
                          <p>SparkleUp stands out with our commitment to convenience, quality, and customer satisfaction. Our door-to-door service, user-friendly app, and professional cleaning processes are designed to provide a seamless experience. Plus, we're local to the Triangle area and dedicated to serving our community.</p>
                        </div>
                        <div className="">
                          <h3>5. Are there any commitments or subscription fees?</h3>
                          <p>No, SparkleUp offers flexible options to fit your needs without any hidden fees or required subscriptions. You can schedule a one-time pick-up or set up recurring services. Our pricing is transparent, and we offer various packages to ensure you get the best value for your laundry needs.</p>
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
householdLaundryServices.authGuard = false;
export default householdLaundryServices;