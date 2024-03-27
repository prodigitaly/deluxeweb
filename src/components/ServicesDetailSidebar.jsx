import Link from "next/link";
import { useRouter } from "next/router";

export default function ServicesDetailSidebar() {
    const router = useRouter();
    return (
      <>
        <div className="bg-[rgba(22,98,210,.1)] p-5 mb-5">
            <h3 className="uppercase text-[24px] block mb-2 font-bold text-primary pl-3 pt-2">Categories</h3>
            <ul className="[&>li>a]:text-[16px] [&>li>a]:leading-normal [&>li>a]:block [&>li>a]:p-2 [&>li]:pl-3 [&>li>a:hover]:bg-white [&>li>a:hover]:text-primary
                [&>li>a]:text-left [&>li>a]:w-full [&>li>a]:py-1 [&>li>a]:cursor-pointer">
                <li className="hover:bg-white hover:text-primary"><Link href="/sparkleup-dry-cleaning-laundry-services"><a>Dry Cleaning</a></Link></li>                
                <li className="hover:bg-white hover:text-primary"><Link href="/laundry-services"><a>Laundry</a></Link></li>
                <li className="hover:bg-white hover:text-primary"><Link href="/household-laundry-services"><a>Household</a></Link>
                </li>
            </ul>                                        
        </div>
        <div className="before:bg-[rgba(22,98,210,.8)] before:absolute before:top-0 before:left-0 before:w-full before:h-full relative">
            <img src="/images/need-help-bg.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-full p-6 text-center">
                <i className="m-auto mb-5 w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white"><img src="/images/call.svg" className="w-[38px]" alt="" /></i>
                <p className="text-[22px] text-white font-bold mb-10 block text-center">Order Service <br/> Right Now</p>
                <p className="text-white text-[12px] block leading-normal">Call Anytime</p>
                <h6 className="text-[20px] text-white font-semibold">+1(919) 438-0450</h6>
            </div>
        </div>
      </>
    );
  }
  