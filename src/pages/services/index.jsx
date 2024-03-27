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
        <title>Best Laundry & Dry Cleaning Services in Durham | SparkleUp</title>
        <meta name="description" content="Experience SparkleUp's premium laundry and dry cleaning services in Durham, NC. Offering free pick-up and delivery, amazing offers, and an easy-to-use app."/>
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
                  <h1 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Best Laundry and Dry Cleaning Services in Durham and Surrounding Areas</h1>
                  <p className="mb-4">Welcome to SparkleUp, where we bring the ultimate convenience and quality of <br/>
                  {isLoggedIn ? 
                    (
                      <Link href="/sparkleup-dry-cleaning-laundry-services"><a className="font-medium text-primary underline mx-1">dry cleaning</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="cursor-pointer text-primary font-medium mx-1 underline">
                      dry cleaning
                    </button>                    
                  )} 
                  and 
                  {isLoggedIn ? 
                    (
                      <Link href="/laundry-services"><a className="font-medium text-primary underline mx-1">laundry services</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="cursor-pointer text-primary font-medium mx-1 underline">
                      laundry services
                    </button>                    
                  )}   right to your doorstep. Serving the vibrant communities of Durham, Raleigh, Chapel Hill, and beyond, we are committed to providing top-notch garment care with a personal touch.</p>                 
                </div>
                <div className="ml-auto pl-4 xl:mt-0 mt-4">
                  <img className="max-h-[250px]" src="images/SurroundingAreas.png" alt="Top Laundry and Dry Cleaning Services in Durham and Surrounding Areas Whether you're a busy professional, a student with a packed schedule, or a household in need of a laundry lifeline, we've got you covered." />
                </div>
            </div>
            <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <h2 className="md:text-4xl text-[22px] font-bold mb-5 text-center">Our Services</h2>              
              <div className="min-[992px]:flex gap-8 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary
              [&>div]:text-center [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div]:p-6 [&>div]:w-[33.33%] [&>div]:rounded-[6px] max-[991px]:[&>div]:w-[100%] max-[991px]:[&>div]:mb-5">
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Dry Cleaning</h3>
                      <span ><img className="max-h-[200px]" src="/images/DryCleaning.png" alt="" /></span>
                      <p>Expert Dry Cleaning for Your Delicate Garments</p>
                  </div>
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Laundry</h3>
                      <span ><img className="max-h-[200px]" src="/images/Laundry.png" alt="" /></span>
                      <p>Daily Wear Laundry Services Tailored for You</p>
                  </div>
                  <div className="[&>span]:bg-[#F7F7F8] [&>span>img]:m-auto [&>span]:mt-2 [&>span]:mb-2 [&>span]:block">
                      <h3>Household</h3>
                      <span ><img className="max-h-[200px]" src="/images/Household.png" alt="" /></span>
                      <p>Household Laundry Solutions for Your Comfort</p>
                  </div>
              </div>
              <div className="block pt-8 text-center">
                {isLoggedIn ? 
                  (
                    <p>Experience the SparkleUp difference! <button onClick={() => router.push("/services")} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer leading-[24px] inline-block ml-2">Register Now </button> </p>
                  ) : (
                  <div>
                    Experience the SparkleUp difference!
                    <button
                      onClick={toggleLoginModal}
                      className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer leading-[24px] inline-block ml-2">
                      Register Now
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Expert Dry Cleaning for Your Delicate Garments</h2>
                <p className="mb-4">At SparkleUp, we understand that certain occasions call for a special touch. Our 
                  {isLoggedIn ? 
                    (
                      <Link href="/sparkleup-dry-cleaning-laundry-services"><a className="font-medium text-primary underline mx-1">dry cleaning services</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="cursor-pointer text-primary font-medium mx-1 underline">
                      dry cleaning services
                    </button>                    
                  )}                   
                 are designed to treat your most cherished garments, such as wedding dresses, suits, and coats, with the utmost care.</p>
                 <p>Utilizing eco-friendly methods and providing a fast turnaround, we ensure your attire is impeccably clean and ready for any grand occasion. Trust us, your search for the "best dry cleaners near me" ends here in Durham!</p>
                 <div className="mt-3">
                  {isLoggedIn ? 
                      (
                        <button href="/services" className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Schedule Your Dry Cleaning Pickup</button>
                      ) : (                  
                      <button
                        onClick={toggleLoginModal}
                        className="cursor-pointer text-primary font-medium mx-1 underline">
                        Schedule Your Dry Cleaning Pickup
                      </button>                    
                    )} 
                 </div>
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/DelicateGarments.png" alt="Eco friendly Dry Cleaning for Your Delicate Garments" className="m-auto max-h-[250px]" />
              </div>
            </div>

            <div className="border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">              
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Daily Wear Laundry Services Tailored for You</h2>
                <p className="mb-4">Our 
                {isLoggedIn ? 
                    (
                      <Link href="/laundry-services"><a className="font-medium text-primary underline mx-1">laundry services</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="font-medium text-primary underline mx-1">
                      laundry services
                    </button>                    
                  )}
                 are not just about cleaning; they're about providing a tailored experience for your daily wear. From t-shirts to casual coats, we handle your garments with care, ensuring they return to you in pristine condition.</p>   
                 <p className="mb-4">With SparkleUp, laundry day in Durham is a breeze—no more searching for "laundry service Durham" or "laundry services Durham." Just schedule a pickup, and we'll take care of the rest.</p>                                  
                 
                 <div className="mt-3">
                  {isLoggedIn ? 
                      (
                        <button href="/services" className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Get Started with Our Laundry Service</button>
                      ) : (                  
                      <button onClick={toggleLoginModal} className="cursor-pointer py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Get Started with Our Laundry Service
                      </button>
                    )} 
                 </div>
            </div>
            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h3 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Household Laundry Solutions for Your Comfort</h3>
                <p className="mb-4">Managing household laundry, especially bulky items like comforters and bedding, can be daunting. Our 
                {isLoggedIn ? 
                    (
                      <Link href="/household-laundry-services"><a className="font-medium text-primary underline mx-1">household laundry services</a></Link>
                    ) : (                  
                    <button
                      onClick={toggleLoginModal}
                      className="font-medium text-primary underline mx-1">
                      household laundry services
                    </button>                    
                  )} are here to take that weight off your shoulders.</p>
                <p className="mb-4">We specialize in cleaning large items, offering you the comfort and cleanliness you deserve. Say goodbye to the days of searching for <span className="text-primary">"comforter cleaning service near me"</span> in Durham and the surrounding areas.</p>
                <div className="mt-3">
                  {isLoggedIn ? 
                      (
                        <button href="/services" className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Book Your Household Laundry services Service</button>
                      ) : (                  
                      <button onClick={toggleLoginModal} className="py-2 px-4 rounded-[6px] bg-primary border-[1px] border-primary hover:bg-transparent hover:text-primary text-white m-auto cursor-pointer mr-1 leading-[24px] inline-block">Book Your Household Laundry Service
                      </button>
                    )} 
                 </div>
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Household-03.png" alt="Household Laundry Solutions for Your Comfort by Sparkle Up" className="m-auto" />
              </div>
            </div>
            
            <div className=" border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">              
              <h3 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Seamless Pickup and Delivery at Your Doorstep</h3>
              <p className="mb-4">We pride ourselves on our free door-to-door delivery and pickup service, making your life simpler and fitting seamlessly into your busy schedule.</p>
              <p className="mb-4">Whether you're in Durham, Cary, or Chapel Hill, our reliable service ensures that your laundry needs are met without you having to step outside your home. For "laundry pickup and delivery near me," SparkleUp is your go-to solution.</p>
              <div className="grid grid-cols-2 justify-center gap-y-10 gap-x-4 py-4 md:flex md:grid-cols-4 md:items-start md:gap-x-0 mt-3">
                <div className="flex flex-col">
                  <svg
                    className="h-16 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 172 143">
                    <path
                      fill="#568FFF"
                      d="M68 3.6c-2.534 1.334-6 4.934-8 8.4l-3.467 6-13.334.934c-7.2.533-14.533 1.333-16.266 1.733-3.334.8-8.267 5.2-8.267 7.334 0 .933 23.6 1.333 68.4 1.333l68.267-.133-3.734-3.2c-2.933-2.534-5.2-3.334-10.4-3.334-7.733 0-14.133-2.4-17.866-6.666-3.867-4.267-8.4-6.267-17.2-7.334-4.267-.533-10-2-12.667-3.466C85.999 1.334 73.733.534 67.999 3.6Z"
                    />
                    <path
                      fill="#185ADB"
                      stroke="#185ADB"
                      strokeWidth="2"
                      d="m2.84 37.508-.01.009-.008.009c-1.34 1.272-1.69 1.973-1.69 2.475 0 .5.35 1.203 1.69 2.475l.009.008.009.01c.082.081.272.224.763.382.494.159 1.231.313 2.346.453 2.23.281 5.81.489 11.643.639 11.65.3 32.135.366 68.407.366 36.273 0 56.757-.067 68.408-.366 5.832-.15 9.413-.358 11.643-.639 1.115-.14 1.852-.294 2.346-.453.491-.157.681-.3.763-.383l.009-.009.009-.008c1.339-1.272 1.689-1.974 1.689-2.475 0-.502-.35-1.203-1.689-2.475l-.009-.01-.009-.008c-.082-.082-.272-.225-.763-.383-.494-.158-1.231-.313-2.346-.453-2.23-.28-5.811-.488-11.643-.638-11.651-.3-32.135-.367-68.408-.367-36.272 0-56.756.067-68.407.367-5.832.15-9.413.357-11.643.638-1.115.14-1.852.295-2.346.453-.49.158-.681.3-.763.383Z"
                    />
                    <path
                      fill="#185ADB"
                      stroke="#185ADB"
                      strokeWidth="4"
                      d="m16.366 52.57.003.015.002.016c2.192 13.015 6.05 31.675 9.63 47.542 1.788 7.931 3.504 15.148 4.904 20.599.7 2.728 1.317 4.998 1.822 6.689.253.846.472 1.53.656 2.046.091.257.17.46.233.612.057.135.09.201.1.219 1.292 2.085 2.2 3.361 3.495 4.31 1.282.94 3.136 1.689 6.532 2.223C50.646 137.927 62.901 138 87.066 138c21.377 0 32.09-.001 38.028-.363 2.965-.181 4.586-.445 5.688-.785 1.031-.319 1.684-.723 2.742-1.428 2.163-1.572 4.997-4.789 6.172-7.022l.003-.007.004-.006.001-.003c.009-.02.044-.101.106-.272.073-.201.162-.471.267-.813.211-.682.469-1.599.769-2.727.601-2.253 1.354-5.289 2.206-8.861 1.702-7.139 3.786-16.371 5.81-25.656 2.023-9.283 3.983-18.608 5.436-25.932a409.561 409.561 0 0 0 1.74-9.208c.191-1.097.335-1.995.437-2.693-.757-.054-1.746-.108-2.967-.161-3.294-.143-8.165-.272-14.443-.38-12.551-.216-30.672-.35-52.933-.35H16.137l.229 1.236Z"
                    />
                  </svg>
                  <div className="home-step my-8">
                    <span>Step 1</span>
                  </div>
                  <div className="mx-auto max-w-[200px] text-center text-sm font-semibold md:text-lg">
                    <span className="text-primary">Bag</span> up all your dirty
                    clothes
                  </div>
                </div>
                <svg
                  className="mt-12 hidden w-36 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 212 48">
                  <path
                    fill="#D3D3D3"
                    d="m99.898 46.5-.403.915.373.165.382-.144-.352-.936ZM211.31 5.366a1 1 0 0 0-.498-1.323L202.615.325a1 1 0 1 0-.826 1.822l7.286 3.304-3.304 7.286a1 1 0 0 0 1.821.826l3.718-8.197ZM.994 3.915l98.5 43.5.808-1.83-98.5-43.5-.808 1.83Zm99.256 43.521L210.751 5.889l-.704-1.872-110.5 41.547.703 1.872Z"
                  />
                </svg>
                <div className="flex flex-col">
                  <svg
                    className="h-16 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 199 143">
                    <path
                      fill="#185ADB"
                      d="M9.599 15.066c-.934 1.067-1.6 12.933-1.867 32.667l-.4 30.933h119.467l-.4-30.4c-.267-23.467-.8-31.067-2.267-32.667-1.6-2-7.333-2.266-57.467-2.266-44.266 0-56 .4-57.066 1.733Z"
                    />
                    <path
                      fill="#568FFF"
                      stroke="#568FFF"
                      strokeWidth="2"
                      d="m167.419 35.561-.034-.017-.033-.02-.034-.017a1.619 1.619 0 0 0-.112-.042 4.286 4.286 0 0 0-.398-.113 14.986 14.986 0 0 0-1.331-.241c-1.097-.158-2.548-.297-4.261-.413-3.422-.232-7.833-.365-12.416-.365H133V115h3.667c1.623 0 2.702-.166 3.422-.459.658-.268 1.019-.641 1.245-1.169.93-2.628 2.914-5.594 5.172-8.107 2.257-2.511 4.909-4.705 7.246-5.656 3.015-1.261 6.751-1.876 10.319-1.859 3.548.017 7.055.66 9.586 2.027 2.358 1.149 5.016 3.413 7.219 5.853 2.195 2.431 4.079 5.194 4.746 7.406.411 1.276 1.284 1.841 2.301 1.864 1.089.025 2.526-.579 3.857-2.091 1.433-1.655 1.89-3.766 1.621-11.571v-.004l-.365-8.994-5.666-.578h-.002c-3.198-.31-5.675-1.1-7.373-2.192-1.691-1.087-2.736-2.572-2.678-4.239.059-1.66 1.2-3.087 2.959-4.095 1.771-1.014 4.304-1.696 7.534-1.868h.004l5.853-.344v-5.99c0-4.287-.914-7.802-2.235-9.85-2.163-3.21-7.619-9.826-12.868-15.826-2.619-2.993-5.172-5.815-7.215-7.96a72.698 72.698 0 0 0-2.611-2.63 17.89 17.89 0 0 0-.885-.79 3.022 3.022 0 0 0-.434-.317ZM161.854 71.4h-.007L141.98 71l-.948-.02-.031-.946-.4-11.86v-.003c-.134-3.283-.168-6.469-.117-8.974.025-1.253.071-2.344.138-3.198.033-.426.072-.803.118-1.116.043-.294.101-.595.19-.834l.008-.022.01-.02c.173-.406.507-.654.747-.799.265-.16.578-.289.903-.398.653-.218 1.499-.4 2.449-.552 1.908-.304 4.378-.507 6.886-.59 2.51-.085 5.092-.052 7.228.123 1.066.087 2.041.211 2.849.38.763.159 1.505.381 2.016.734.542.357 1.253 1.036 2.037 1.865.812.859 1.769 1.95 2.805 3.188 2.076 2.475 4.499 5.565 6.782 8.609 2.282 3.042 4.432 6.051 5.958 8.366.76 1.154 1.379 2.155 1.781 2.91.199.372.365.721.465 1.017.048.144.1.328.113.522.01.153.018.58-.327.925a1.586 1.586 0 0 1-.599.356c-.169.06-.359.108-.554.148-.393.08-.899.15-1.488.209-1.185.12-2.798.212-4.714.28-3.838.133-8.955.167-14.431.1ZM64.603 109.908l.007.012 2.782 5.08h58.274V87.667h-118V91.2c0 .996.026 1.727.105 2.282.078.555.199.844.323 1.017.227.315.704.568 2.418.774 1.846.198 3.22 1.082 4.072 2.34.836 1.234 1.123 2.761.96 4.216-.327 2.898-2.52 5.838-6.345 5.838-.657 0-1.002.132-1.166.249-.122.088-.218.216-.235.511-.02.335.07.848.372 1.562.298.703.774 1.54 1.447 2.503.714 1.011 1.398 1.59 2.38 1.953 1.04.385 2.49.555 4.802.555 2.133 0 3.45-.138 4.212-.397.367-.124.516-.248.575-.317.04-.048.08-.116.08-.286 0-.584.21-1.207.48-1.789.281-.603.675-1.26 1.142-1.94.934-1.36 2.213-2.886 3.621-4.361 1.41-1.478 2.968-2.926 4.47-4.128 1.487-1.191 2.974-2.185 4.239-2.706 2.957-1.226 7.316-1.478 11.421-1.037 4.092.44 8.207 1.598 10.625 3.426 2.154 1.583 5.168 5.309 6.94 8.443Z"
                    />
                    <path
                      fill="#0A1931"
                      stroke="#0A1931"
                      strokeWidth="2"
                      d="m35.72 108.72-.01.006c-2.236 1.33-4.079 3.7-5.2 6.481-1.121 2.779-1.483 5.87-.87 8.571l.002.004c3.863 17.324 29.357 14.535 29.357-3.382 0-2.51-.17-4.003-.736-5.323-.57-1.328-1.582-2.581-3.505-4.503-1.852-1.853-3.11-2.873-4.432-3.46-1.307-.581-2.771-.781-5.127-.781-3.319 0-7.264 1.033-9.479 2.387ZM177.716 125.556l.001-.003c1.705-5.179.806-9.963-1.861-13.446-2.671-3.49-7.194-5.775-12.923-5.775-2.425 0-3.924.2-5.247.782-1.336.587-2.593 1.606-4.446 3.458-1.922 1.923-2.935 3.176-3.504 4.504-.566 1.32-.736 2.813-.736 5.323 0 8.371 5.872 13.585 12.457 14.748 6.583 1.163 13.706-1.747 16.259-9.591Z"
                    />
                    <circle cx="44" cy="122" r="3" fill="#D9D9D9" />
                    <circle cx="164" cy="122" r="3" fill="#D9D9D9" />
                  </svg>
                  <div className="home-step my-8">
                    <span>Step 2</span>
                  </div>
                  <div className="mx-auto max-w-[200px] text-center text-sm font-semibold md:text-lg">
                    Drop off or we
                    <span className="text-primary">{" pickup "}</span>
                    your clothes
                  </div>
                </div>
                <svg
                  className="mt-12 hidden w-36 -scale-y-100 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 212 48">
                  <path
                    fill="#D3D3D3"
                    d="m99.898 46.5-.403.915.373.165.382-.144-.352-.936ZM211.31 5.366a1 1 0 0 0-.498-1.323L202.615.325a1 1 0 1 0-.826 1.822l7.286 3.304-3.304 7.286a1 1 0 0 0 1.821.826l3.718-8.197ZM.994 3.915l98.5 43.5.808-1.83-98.5-43.5-.808 1.83Zm99.256 43.521L210.751 5.889l-.704-1.872-110.5 41.547.703 1.872Z"
                  />
                </svg>
                <div className="flex flex-col">
                  <svg
                    className="h-16 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 112 143">
                    <path
                      fill="#185ADB"
                      d="M10.934 10.8c-2.667.8-5.333 2.933-6.933 5.6-2.534 4-2.667 6.933-2.667 58.267 0 40.533.4 54.8 1.733 57.333.934 1.867 3.734 4.4 6.267 5.6 4.133 2.133 9.333 2.4 46.4 2.4 44.667 0 48.267-.4 52.8-6.8 1.867-2.8 2.133-9.467 2.133-58.533 0-49.067-.266-55.734-2.133-58.534-4.533-6.4-8.133-6.8-52.133-6.666-22.534 0-43.067.666-45.467 1.333Zm56.667 34.933c9.066 3.334 16 9.734 20.4 18.8 3.866 7.867 4.266 9.734 3.733 17.2-.933 10.267-4.4 17.334-12.133 24.534-14.4 13.2-34.267 12.666-48.4-1.467-10.8-10.933-13.734-23.333-8.534-37.067 6.667-17.866 27.867-28.266 44.934-22Z"
                    />
                    <path
                      fill="#568FFF"
                      d="M42.535 55.065c-8.8 4.667-13.6 12.4-14.267 22.8-.534 7.467-.134 9.467 3.2 15.467 9.866 18.267 35.867 19.733 47.867 2.8 3.2-4.533 4-7.2 4.4-14.667.533-9.6-1.2-14.933-6.934-21.2-7.733-8.666-23.333-10.933-34.267-5.2Zm20.4.934c8.533 2.4 15.333 9.6 17.466 18.666.8 3.2.534 3.334-6.133 3.467-3.867.133-10.267.667-14.4 1.2-5.6.667-9.334.4-14.134-1.2-5.2-1.733-7.466-1.867-10.4-.8-2 .8-3.866 1.2-4.133.933-1.466-1.466 3.6-11.733 7.733-15.866 6.934-6.934 14.534-8.934 24-6.4Z"
                    />
                    <circle cx="74" cy="25" r="5" fill="#fff" />
                    <circle cx="92.5" cy="28.5" r="8.5" fill="#fff" />
                  </svg>
                  <div className="home-step my-8">
                    <span>Step 3</span>
                  </div>
                  <div className="mx-auto max-w-[200px] text-center text-sm font-semibold md:text-lg">
                    We <span className="text-primary">{" clean up "}</span> your
                    <br />
                    clothes
                  </div>
                </div>
                <svg
                  className="mt-12 hidden w-36 md:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 212 48">
                  <path
                    fill="#D3D3D3"
                    d="m99.898 46.5-.403.915.373.165.382-.144-.352-.936ZM211.31 5.366a1 1 0 0 0-.498-1.323L202.615.325a1 1 0 1 0-.826 1.822l7.286 3.304-3.304 7.286a1 1 0 0 0 1.821.826l3.718-8.197ZM.994 3.915l98.5 43.5.808-1.83-98.5-43.5-.808 1.83Zm99.256 43.521L210.751 5.889l-.704-1.872-110.5 41.547.703 1.872Z"
                  />
                </svg>
                <div className="flex flex-col">
                  <svg
                    className="h-16 md:h-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 130 143">
                    <g clipPath="url(#fold)">
                      <path
                        fill="#87AFFC"
                        d="M32.8 18.668c-.934 6.8-.667 7.333 7.866 22.133 4.933 8.267 9.333 15.467 10 15.867.533.4 3.2-3.067 5.867-7.467l4.8-8.133-6.534-7.467c-3.6-4.267-9.866-10.8-13.866-14.667l-7.2-7.2-.934 6.934ZM45.334 18l5.866 6h28.4l5.6-6 5.6-6H39.467l5.867 6ZM82.4 26.536 69.467 40.669l4.533 8c2.534 4.4 5.067 8.133 5.6 8.267.534.133 5.2-6.667 10.134-15.334C98 27.47 98.8 25.47 98 20.67c-.4-2.933-1.2-6-1.733-6.667-.533-.933-6.267 4.4-13.867 12.534Z"
                      />
                      <path
                        fill="#185ADB"
                        d="M3.6 28.935c-.534.4-.934 24.666-.934 53.733 0 39.333.4 53.2 1.6 54.4 1.2 1.2 9.2 1.6 27.6 1.6h26l-4.8-5.067c-7.867-8.266-7.867-7.733-3.6-36.933 2.133-14.667 4.133-28.267 4.4-30.267.667-3.066.267-3.6-2.8-4-3.067-.4-5.2-3.066-13.733-17.333l-10-16.933L15.866 28c-6.267 0-11.867.4-12.267.934ZM93.334 45.068c-8.934 15.2-10.4 16.933-13.6 16.933-2.934-.133-3.6.4-3.067 2.667.667 2.8 8.667 58.533 8.667 60 0 .4-2.8 3.733-6.134 7.333l-6.266 6.667h26.133c25.467 0 26.133-.133 28.133-2.933 1.867-2.534 2.134-9.867 2.134-52.8 0-31.734-.534-50.667-1.334-52.4-1.2-2.267-2.933-2.534-13.066-2.4h-11.6l-10 16.933Z"
                      />
                      <path
                        fill="#87AFFC"
                        d="M58.8 68.936c-.8 6.533-2.933 21.333-4.666 33.066l-3.2 21.334 5.2 6.133c8.533 10.267 8.666 10.267 14 5.067 10.666-10.134 10.266-7.467 5.2-42.667-2.534-17.2-4.667-32-4.667-32.933 0-.934-1.867-1.6-5.2-1.6H60.4l-1.6 11.6Z"
                      />
                    </g>
                    <clipPath id="fold">
                      <path fill="#fff" d="M0 0h129.333v142.667H0z" />
                    </clipPath>
                  </svg>
                  <div className="home-step my-8">
                    <span>Step 4</span>
                  </div>
                  <div className="mx-auto max-w-[200px] text-center text-sm font-semibold md:text-lg">
                    You pick-up or we
                    <span className="text-primary">{" deliver "}</span> clean,
                    folded clothes
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">How it Works Online</h2>
                <p className="mb-2"> - Sign Up on the <Link href="https://www.sparkleup.us/"><a target="_blank" className="font-medium text-primary underline">www.sparkleup.us</a></Link> or 
                <Link href="https://play.google.com/store/apps/details?id=com.deluxe_cleaners"><a target="_blank" className="font-medium text-primary underline ml-1">Download the App</a></Link></p>
                <p className="mb-2"> - Choose specific laundry items, or a monthly plan</p>
                <p className="mb-2"> - Schedule a Pick-Up: Choose the time and address that works for you, and we'll handle the rest.</p>
                <p className="mb-5"> - Relax and Enjoy: Your laundry will be picked up, and returned clean, fresh, and ready to use.</p>                
              </div>
              <div className="ml-auto xl:pl-4 xl:mt-0 mt-4">
                <img src="images/Household-04.png" alt="Sign up on our website or download our app in simple steps." className="m-auto" />
              </div>
            </div>

            <div className="xl:flex items-center border-b-[1px] border-[#eee] lg:mb-10 lg:pb-10 mb-5 pb-5">
              <div className="xl:w-[calc(100%-350px)]">
                <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Get Started Today with SparkleUp</h2>
                <p className="mb-4">Ready to experience the ultimate in garment care? 
                {
                  isLoggedIn ? 
                  (
                    <Link href="/services">
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
                      (<Link href="/services"><a className="text-primary font-medium underline ml-1">Schedule a pick-up</a></Link>) : 
                      (<button onClick={toggleLoginModal} className="text-primary font-medium underline ml-1">Schedule a pick-up</button>)
                  }
                  <span className="px-2">|</span> 
                  {
                      isLoggedIn ? 
                      (<Link href="/services"><a className="text-primary font-medium underline ml-1">Learn more about our services</a></Link>) : 
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
              <h2 className="md:text-4xl text-[22px] font-bold lg:pb-5 pb-2">Frequently Asked Questions (FAQs) about SparkleUp</h2>              
              <div className="grid gap-4 [&>div>h3]:text-[20px] [&>div>h3]:font-bold [&>div>h3]:pb-2 [&>div>h3]:uppercase [&>div>h3]:text-primary [&>div]:shadow-[0_0_20px_0_rgba(0,0,0,.1)] [&>div>h3]:p-4 [&>div>h3]:border-b-[1px] [&>div>h3]:border-[#eee] [&>div>p]:p-4 [&>div]:rounded-[6px]">
                  <div className="">
                    <h3>What areas do SparkleUp's laundry and dry cleaning services cover?</h3>
                    <p>"SparkleUp proudly serves local residents in Durham, Raleigh, Chapel Hill, Cary, Mebane, Carrboro, Pittsboro, Garner, Fuquay Varina, Holly Springs, and
Apex. We're dedicated to providing convenient, high-quality laundry and dry cleaning services right to your doorstep."</p>
                  </div>
                  <div className="">
                    <h3>How do I schedule a laundry or dry cleaning pickup?</h3>
                    <p>"Scheduling a pickup is easy! Simply download our SparkleUp app available on Android and iOS, or visit our <Link href="/laundry-services"><a className="text-primary underline hover:no-underline">laundry page</a></Link> or <Link href="/sparkleup-dry-cleaning-laundry-services"><a className="text-primary underline hover:no-underline">dry cleaning page</a></Link> to set up a time that works for you. We offer flexible scheduling to fit your busy lifestyle."</p>
                  </div>
                  <div className="">
                    <h3>Do you offer any special treatments for delicate items like wedding dresses or suits?</h3>
                    <p>"Absolutely! Our expert dry cleaning services are perfect for your most delicate items. We take special care of wedding dresses, suits, and other fine garments to ensure they are cleaned safely and thoroughly. Visit our <Link href="/sparkleup-dry-cleaning-laundry-services"><a className="text-primary underline hover:no-underline">dry cleaning page</a></Link> for more details on our specialized services."</p>
                  </div>
                  <div className="">
                    <h3>Can I get my laundry or dry cleaning delivered to my home or office?</h3>
                    <p>"Yes, SparkleUp offers free door-to-door delivery for all our services. Whether you're at home or the office, we can pick up and deliver your laundry and dry cleaning at a time that's convenient for you. Check out our 
                    {
                      isLoggedIn ? 
                      (
                      <Link href="/services">
                          <a className="font-medium text-primary underline mx-1">pickup and delivery page</a>
                      </Link>
                      ) : (
                      <button onClick={toggleLoginModal} className="rounded-[6px] bg-transparent border-0 ">pickup and delivery page</button>
                      )
                    } 
                     for more information."</p>
                  </div>
                  <div className="">
                    <h3>What makes SparkleUp different from other laundry services in the area?</h3>
                    <p>"SparkleUp stands out with our commitment to customer satisfaction, eco-friendly cleaning processes, and our state-of-the-art mobile app that makes managing your laundry and dry cleaning needs effortless. Plus, with our free pickup and delivery service, we ensure that your laundry experience is unmatched in convenience and quality."</p>
                  </div>                  
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
laundryServices.authGuard = false;
export default laundryServices;

