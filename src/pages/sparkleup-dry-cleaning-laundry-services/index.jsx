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

function sparkleupDryCleaningLaundryServices() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            <title>SparkleUp: Premium Dry Cleaning & Laundry Services in Durham & Beyond</title>
            <meta name="description" content="Discover SparkleUp's top-tier dry cleaning & laundry services. Offering door-to-door excellence, sustainable practices, and a user-friendly mobile app. Serving Durham, Raleigh, Chapel Hill, and more!" />
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
                
                <div className="min-[991px]:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                    <div className="">
                        <h1 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">SparkleUp's Premium Dry Cleaning Services</h1>                         
                        <div>Welcome to SparkleUp, where we redefine the essence of pristine garments. As the leading name in dry cleaning in Durham, we're proud to stand at the forefront of the laundry and dry cleaning revolution. For those looking for comprehensive 
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="text-primary px-1 font-medium">laundry services</a>
                            </Link>
                            ) : (
                            <button onClick={toggleLoginModal} className="text-primary px-1 font-medium underline">laundry services</button>
                            )
                        }                         
                        SparkleUp offers a range of options tailored to your needs.</div>
                    </div>
                    <div className="ml-auto pl-4">
                        <img src="images/DryCleaning.jpg" alt="SparkleUp's Premium Dry Cleaning Services" />
                    </div>
                </div>

                <div className="mb-10">
                    <h3 className="text-center md:text-3xl text-[22px] font-bold pb-8">Why Choose SparkleUp?</h3>
                    <div className="min-[991px]:flex gap-8 [&>div>h4]:text-[20px] [&>div>h4]:font-bold [&>div>h4]:pb-2 [&>div>h4]:uppercase [&>div>h4]:text-primary
                    [&>div]:text-center [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div]:p-6 [&>div]:w-[33.33%] [&>div]:rounded-[6px] max-[991px]:[&>div]:w-[100%] max-[991px]:[&>div]:mb-3">
                        <div className="">
                            <h4>Door-to-Door Excellence</h4>
                            <p>Experience the luxury of premier dry cleaning in Durham right at your doorstep. Enjoy convenient pickups and deliveries, keeping your wardrobe at its best.</p>
                        </div>
                        <div className="">
                            <h4>All-Round Care </h4>
                            <p>From meticulous dry cleaning to refreshing garment laundry and household laundry, we cater to all your fabric needs.</p>
                        </div>
                        <div className="">
                            <h4>Beyond Durham</h4>
                            <p>Not just a Durham dry cleaner, our reach spans Raleigh, Chapel Hill, Cary, and more. Seeking laundry service in Durham or nearby? SparkleUp is your go-to choice.</p>
                        </div>
                    </div>
                </div>

                <div className=" border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                    <div className="min-[992px]:flex items-center pb-5">
                        <div className="">
                            <h2 className="md:text-4xl text-[22px] font-bold pb-8">Door to Door Dry Cleaning Services</h2>
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Unmatched Convenience with Door-to-Door Brilliance.</h3>
                            <p>Skip the queues and the waiting. SparkleUp brings you the ultimate door-to-door dry cleaning service. Whether you're a busy professional, a student on the go, or a bustling household, we've got you covered. Just schedule a pick-up, and we handle the rest.</p>                    
                        </div>
                        <div className="ml-auto pl-4">
                            <img src="images/deliveryService.jpg" alt="A Delivery man providing door to door services" className="max-h-[200px] m-auto max-w-max	" />
                        </div>
                    </div>
                    <div className="min-[992px]:grid grid-cols-2 gap-8">
                        <div className="">
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Time-Saving and Efficient.</h3>
                            <p>Time is precious. With SparkleUp's dry cleaning pickup and delivery, reclaim those lost minutes spent on laundry chores. Searching for “laundry delivery near me”? Look no further.</p>
                        </div>
                        <div className="">                        
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Reliability You Can Trust.</h3>
                            <p>Every scheduled laundry pickup and delivery with SparkleUp, we promise punctuality and precision. We treat every garment with care, ensuring timely and trustworthy service.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Experience premium dry cleaning with a tap!</a>
                            </Link>
                            ) : (
                            <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Experience premium dry cleaning with a tap!</button>
                            )
                        }                         
                    </div>
                </div>

                <div className=" border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                    <div className="min-[992px]:flex items-center pb-5">
                        <div className="">
                            <h2 className="md:text-4xl text-[22px] font-bold pb-8">Garments We Care For</h2>                            
                            <p>At SparkleUp, we understand that every piece of clothing is more than just fabric; it carries memories, moments, and sometimes, a little bit of magic. From the everyday essentials to the once-in-a-lifetime garments, we are equipped and eager to handle them all with the utmost care.</p>
                        </div>
                        <div className="ml-auto pl-4">
                            <img src="images/garment.jpg" alt="A variety of garments, from daily wear to wedding dresses" className="max-[991px]:max-h-[200px] m-auto" />
                        </div>
                    </div>
                    <div className="min-[992px]:grid grid-cols-2 gap-8 min-[992px]:pb-10">
                        <div className="max-[991px]:mb-4">
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Everyday Attire.</h3>
                            <p>Your daily wear, be it office attire, casual outings, or home loungewear, deserves the best care. With our expertise in garment care, we ensure your everyday outfits remain fresh, clean, and ready for all of life's moments. Whether it's a simple shirt or a favorite pair of jeans, we treat them all with equal importance.</p>
                        </div>
                        <div className="max-[991px]:mb-4">                        
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Special Items - Wedding Dresses.</h3>
                            <p>Every bride knows the sentimental value of her wedding dress. It's not just a dress; it's a dream. With search queries like <span className="text-primary">"wedding dress dry cleaners near me"</span> spiking, we take pride in being a trusted destination for preserving that dream. Our specialists handle your prized possession with the tenderness and expertise it deserves, ensuring it remains timeless.</p>
                        </div>
                    </div>
                    <div className="min-[992px]:grid grid-cols-2 gap-8 min-[992px]:pb-10">
                        <div className="max-[991px]:mb-4">
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Coats and Outerwear</h3>
                            <p>Battling the elements can take a toll on your outerwear. We are what you are booking for when you search <span className="text-primary">"coat dry cleaning near me"</span>. We're committed to refreshing and reviving your coats, ensuring they're always ready to keep you warm and stylish.</p>
                        </div>
                        <div className="max-[991px]:mb-4">                        
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Dresses and Delicates</h3>
                            <p>Every dress tells a story, and we're here to ensure that story continues. From cocktail dresses to summer maxis, our care ensures they maintain their shape, color, and vibrancy. So the next time you wonder about the best <span className="text-primary">"dress cleaners near me",</span> remember that SparkleUp has got you covered.</p>
                        </div>
                    </div>
                    <div className="">                        
                        <h3 className="text-[18px] font-bold pb-1 text-primary">Household Bedding Essentials</h3>
                        <p>Given the rising searches for "comforter cleaners near me", "blanket dry cleaners near me", and "bedding laundry services", we've mastered the technique of cleaning all your bedding essentials. Trust us to keep them fresh and allergen-free.
                         <Link href="/sparkleup-household"><a className="text-primary ml-1 cursor-pointer">Explore our household page for more details.</a></Link></p>
                    </div>
                    <div className="flex justify-center mt-10">
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Have a special garment in mind?</a>
                            </Link>
                            ) : (
                            <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Have a special garment in mind?</button>
                            )
                        } 
                    </div>
                </div>

                <div className=" border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                    <div className="pb-5">
                        <h2 className="md:text-4xl text-[22px] font-bold pb-4">SparkleUp Mobile App Laundry at Your Fingertips</h2>                            
                        <p>In today's fast-paced world, convenience is paramount. Recognizing the need for instant, efficient, and user-friendly laundry solutions, we present to you the SparkleUp Mobile App - a revolution in garment care.</p>                        
                    </div>
                    <div className="min-[992px]:flex items-center pb-5">
                        <div className="max-[991px]:mb-4">
                            <h3 className="md:text-4xl text-[22px] font-bold pb-3">Why SparkleUp App?</h3>                            
                            <p>Imagine having the power to schedule, manage, and track your laundry and dry cleaning services right from your smartphone. That's the SparkleUp difference. With a seamless interface, our app stands tall among the best laundry apps available today.</p>
                        </div>
                        <div className="ml-auto pl-4">
                            <img src="images/mobileLaundry.png" alt="SparkleUp Mobile App: Laundry at Your Fingertips" className="max-[991px]:max-h-[200px] m-auto" />
                        </div>
                    </div>
                    <div className="min-[992px]:grid gap-8 min-[992px]:pb-10 grid-cols-2">
                        <div className="max-[991px]:mb-4">
                            <span className="text-[18px] font-bold pb-1 text-primary">One-Tap Scheduling</span>
                            <p>Gone are the days of lengthy phone calls. With the SparkleUp app, you can schedule a pickup in mere seconds. Whether it's a last-minute laundry emergency or a planned monthly cleaning, our app for laundry service has got you covered.</p>
                        </div>
                        <div className="max-[991px]:mb-4">
                            <span className="text-[18px] font-bold pb-1 text-primary">Customized Preferences</span>
                            <p>Every garment is unique, and so are its cleaning needs. Our app allows you to set preferences for each item, ensuring they receive the care they deserve.</p>
                        </div>
                    </div>
                    <div className="min-[992px]:grid gap-8 min-[992px]:pb-10 grid-cols-2">
                        <div className="max-[991px]:mb-4">
                            <span className="text-[18px] font-bold pb-1 text-primary">Special Offers & Discounts</span>
                            <p>Who doesn't love a good deal? Access exclusive offers and discounts available only to our app users.</p>
                        </div>
                        <div className="max-[991px]:mb-4">
                            <span className="text-[18px] font-bold pb-1 text-primary">Feedback & Support</span>
                            <p>Your feedback drives us. With an integrated feedback system, you can share your experience, helping us serve you better.</p>
                        </div>
                    </div>
                    <div className="pb-10">
                        <p className="pb-5">Available Everywhere: Whether you're an Android enthusiast or an iOS aficionado, we've got you covered. Our app's availability on both platforms ensures no one misses out. Looking for the best dry cleaning app or the top laundry app? Look no further than SparkleUp.</p>                        
                        <p><i className="font-bold">"The future of laundry is here, and it resides in your pocket. Embrace the new era of garment care with the SparkleUp Mobile App."</i></p>
                    </div>
                    <div className="flex justify-center">
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Elevate your laundry experience.</a>
                            </Link>
                            ) : (
                            <span onClick={toggleLoginModal} >
                                <p className="cursor-pointer py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Elevate your laundry experience.</p>
                            </span>                            
                            )
                        } 
                    </div>
                </div>

                <div className="min-[992px]:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
                    <div className="">
                        <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">SparkleUp beyond Durham Expanding Our Laundry Services </h2>
                        <p>SparkleUp stands as a beacon of top-tier laundry service in Durham. Born in the vibrant heart of Durham, we've grown from being the go-to dry cleaners Durham residents trust to expanding our unmatched dry cleaning services across North Carolina. </p>                    
                    </div>
                    <div className="ml-auto pl-4">
                        <img src="images/Flag.png" alt="SparkleUp in Durham: Expanding Our Laundry Services" className="max-[991px]:max-h-[200px] m-auto" />
                    </div>
                </div>

                <div className="mb-10">
                    <h3 className="text-center md:text-3xl text-[22px] font-bold pb-8">Why Choose SparkleUp?</h3>
                    <div className="min-[992px]:flex gap-8 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary
                    [&>div]:text-center [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div]:p-6 [&>div]:w-[33.33%] [&>div]:rounded-[6px] max-[991px]:[&>div]:w-[100%] max-[991px]:[&>div]:mb-5">
                        <div className="">
                            <h3>Durham Our Home Base </h3>
                            <p>Where our promise of exceptional dry cleaning in Durham NC began. We've earned our reputation, becoming the first choice for many seeking superior Durham dry cleaners.</p>
                        </div>
                        <div className="">
                            <h3>Beyond Durham's Borders </h3>
                            <p>From Durham's heart, the SparkleUp excellence is now heard in Raleigh, Chapel Hill, and Cary. As we grow, our commitment remains: to deliver the same high-quality dry cleaning services, regardless of location.</p>
                        </div>
                        <div className="">
                            <h3>Future Horizons Our ambition is limitless</h3>
                            <p>As we journey forward, towns like Fuquay Varina and Apex are on our radar. The goal? Making SparkleUp synonymous with "laundry service near me" across the state.</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-10">
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">We're expanding, and we want you on board!</a>
                            </Link>
                            ) : (
                            <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">We're expanding, and we want you on board!</button>
                            )
                        }                          
                    </div>
                </div>

                <div className="mb-10">
                    <div className="min-[992px]:flex items-center pb-5">
                        <div className="">
                            <h2 className="md:text-4xl text-[22px] font-bold pb-8">The Process Explained Behind the Scenes of Dry Cleaning</h2>                            
                            <p>Ever pondered how SparkleUp achieves pristine results for your garments? Dive into our process:</p>                    
                        </div>
                        <div className="ml-auto pl-4">
                            <img src="images/laundryMachine.jpg" alt="The Process Explained: Behind the Scenes of Dry Cleaning" className="max-h-[250px] m-auto max-w-max	"  />
                        </div>
                    </div>
                    <div className="flex gap-8 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary flex-wrap
                    [&>div]:text-center [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div]:p-6 [&>div]:w-[calc(25%-24px)] [&>div]:rounded-[6px] max-[1199px]:[&>div]:w-[calc(50%-14px)] max-[991px]:[&>div]:w-[100%]">
                        <div className="">
                            <h3>Step 1</h3>
                            <p>Color-Conscious Sorting Your laundry is meticulously sorted by color, ensuring darks are with darks and lights with lights, preventing any color bleeding or fading.</p>
                        </div>
                        <div className="">
                            <h3>Step 2</h3>
                            <p>Tailored Washing We treat your clothes with precision. Darks are washed in cold water to retain their vibrancy, while whites enjoy a hot/warm wash, amplifying their brightness and effectively removing stains.</p>
                        </div>
                        <div className="">
                            <h3>Step 3</h3>
                            <p>Gentle Drying Clothes are dried at low/medium heat, preserving their integrity and softness.</p>
                        </div>
                        <div className="">
                            <h3>Step 4</h3>
                            <p>Eco-Friendly Approach We champion sustainability by using eco-friendly methods and providing your garments in our signature reusable laundry bags.</p>
                        </div>                       
                    </div>
                    <div className="flex justify-center mt-10">
                        <p>For a comprehensive understanding of our services, <Link href="https://www.deluxecleanersnc.com/dry-cleaningv">
                            <a target="_blank" className="text-primary cursor-pointer">Visit Deluxe Cleaners,</a></Link> where quality and eco-consciousness go hand in hand.</p>
                    </div>
                </div>

                <div className=" border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10">
                    <h2 className="md:text-4xl text-[22px] font-bold">Affordable Excellence Our Competitive Prices</h2>                        
                    <div className="min-[992px]:flex items-center pb-5">
                        <div className="">
                            <h3 className="md:text-3xl text-[22px] font-bold pb-8">Redefining Value in Dry Cleaning</h3>
                            <p>In the vast landscape of laundry and dry cleaning, a prevailing sentiment has often been, "You get what you pay for." At SparkleUp, we're challenging this notion, ushering in an era where premier service doesn't demand a premium price. Our aim? To redefine the paradigm of "affordable dry cleaning near me."</p>                        
                        </div>
                        <div className="ml-auto pl-4">
                            <img src="images/competitivePrices.jpg" alt="Affordable Excellence: Our Competitive Prices" className="max-[991px]:max-h-[200px] m-auto"  />
                        </div>
                    </div>
                    <div className="min-[992px]:grid gap-8 min-[992px]:pb-10 grid-cols-2">
                        <div className="max-[991px]:mb-5">
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Uncompromised Quality, Unbeatable Prices</h3>
                            <p>There's a common misconception linking affordability to diminished quality. With SparkleUp, we're debunking this myth. Even as we shine as the "best price dry cleaners near me," our commitment to excellence remains unwavering.</p>
                        </div>
                        <div className="max-[991px]:mb-5">
                            <h3 className="text-[18px] font-bold pb-1 text-primary">Bringing Quality Dry Cleaning Services to Every Doorstep</h3>
                            <p>Be it a college student counting pennies, families balancing budgets, or anyone seeking value, our ethos is simple: top-notch laundry care should be accessible to all. Through our affordable dry cleaning service near you, we're leveling the playing field, championing a vision where world-class garment care is everyone's right, not a luxury.</p>
                        </div>
                    </div>
                    <div className="gap-8 pb-10">
                        <h3 className="text-[18px] font-bold pb-1 text-primary">Our Secret Sauce - How We Marry Quality with Affordability</h3>
                        <ul className="list-disc gap-4 grid list-inside ">
                            <li>Bulk Mastery: Our daily high-volume operations allow us to spread costs, ensuring the savings flow directly to you, our esteemed customer.</li>
                            <li>Tech-Powered Efficiency: With a keen investment in cutting-edge machinery and innovations, we've mastered the art of delivering "cheap dry cleaners near me" without a hint of compromise in service quality.</li>
                            <li>Direct Outreach: Our direct-to-you model, bypassing traditional store setups, ensures we reduce overheads, translating to some of the most competitive "cheapest dry cleaners near me prices."</li>                            
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        {
                            isLoggedIn ? 
                            (
                            <Link href="/schedule">
                                <a className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Unbeatable prices for unbeatable service!</a>
                            </Link>
                            ) : (
                            <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white">Unbeatable prices for unbeatable service!</button>
                            )
                        }                        
                    </div>
                </div>
            
                <div className="">
                    <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Frequently Asked Questions (FAQs)</h2>
                    <p className="pb-8">Navigating the world of professional garment care can be a maze of queries. We've gathered some of the most common questions about our dry cleaning process, and here are the answers:</p>                    

                    <div className="grid gap-4 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div>h3]:p-4 [&>div>h3]:border-b-[1px] [&>div>h3]:border-[#eee] [&>div>p]:p-4 [&>div]:rounded-[6px]">
                        <div className="">
                            <h3>1. Are there any fabrics you don't clean?</h3>
                            <p>While we handle a diverse range of fabrics, there are a few we approach with caution. It's always best to check with our experts before sending in any rare or delicate fabrics.</p>
                        </div>
                        <div className="">
                            <h3>2. Do I need to sort my clothes into colored, darks, and white?</h3>
                            <p>No need! Our experts take care of the sorting to ensure each garment gets the treatment it deserves.</p>
                        </div>
                        <div className="">
                            <h3>3. How long does cleaning take?</h3>
                            <p>Our standard turnaround is designed to give your garments the care they need while getting them back to you promptly. However, complex stains or special treatments might add a bit to the timeline.</p>
                        </div>
                        <div className="">
                            <h3>4. Which items should be dry-cleaned, and which should be laundered?</h3>
                            <p>Delicate fabrics, tailored items, and garments with intricate details benefit from dry cleaning. Everyday wear, cottons, and linens are usually fine for regular laundering. When in doubt, check the care label!</p>
                        </div>
                        <div className="">
                            <h3>5. Can you remove all stains?</h3>
                            <p>While our team goes above and beyond to tackle every stain, some stubborn ones might resist even our best efforts. We'll always communicate if we think a stain might not fully lift.</p>
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
sparkleupDryCleaningLaundryServices.authGuard = false;
export default sparkleupDryCleaningLaundryServices;
