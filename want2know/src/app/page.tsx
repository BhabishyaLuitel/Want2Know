import { NavBar } from "./layout";
import FeatureImage from "../../Assets/Container.png";
import DemoImage from "../../Assets/DemoPicture.png";
import BlogImage from "../../Assets/BlogImage.png";
import BlogLogo from "../../Assets/Logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main>
      <NavBar />

      {/* feature post section */}
      <div className="flex p-10 bg-purple text-white">
        <div className="p-10 flex-1">
          <div className="px-10 py-5">Featured Post</div>
          <div className="px-10 py-5">
            <div className="font-bold text-6xl font-raleway leading-snug">
              How AI will Change the Future
            </div>
            <div className="font-raleway py-5 w-[75%]">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </div>
          </div>
          <div className="px-10 py-5 flex">
            <div className="white-colored-button">Read more</div>
          </div>
        </div>

        <div className="flex-1">
          <Image src={FeatureImage} alt="Feature Image" className="p-10" />
        </div>
      </div>

      {/* second feature post section */}
      <div className="p-10 relative">
        <div className="p-10 relative">
          <div className="pb-24 relative">
            <Image
              src={DemoImage}
              alt="Demo Image"
              className="w-[100%] h-auto"
            />
            <div className="absolute bottom-0 right-0 w-[75%] h-[45%] rounded-2xl bg-white">
              {/* Make it reuseable */}
              <div className="px-8 py-6 w-[90%]">
                <div className="flex flex-row gap-4 pt-3 pb-5">
                  <div className="uppercase font-bold text-sm">Development</div>
                  <div className="opacity-80 text-sm">16 March 2023</div>
                </div>
                <div className="font-bold text-3xl font-raleway leading-snug">
                  How to make a Game look more attractive with New VR & AI
                  Technology
                </div>
                <div className="py-3 font-light">
                  Google has been investing in AI for many years and bringing
                  its benefits to individuals, businesses, and communities.
                  Whether it’s publishing state-of-the-art research, building
                  helpful products, or developing tools and resources that
                  enable others, we’re committed to making AI accessible to
                  everyone.
                </div>
                <div className="flex py-5">
                  <div className="white-colored-button-with-border">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent posts */}
      <div className="px-20 py-10">
        <div className="flex flex-row justify-between pb-10">
          <div className="font-[600] text-5xl ">Our Recent Post</div>
          <div className="purple-colored-button">View All</div>
        </div>

        <div className="flex flex-row pb-10">
          <div className="w-[60%] px-5">
            <Image
              src={DemoImage}
              alt="Demo Image"
              className="h-[450px] object-cover rounded-xl"
            />
          </div>
          <div className="w-[40%]">
            {/* Make it reuseable */}
            <div className="px-8 py-6 w-[90%]">
              <div className="flex flex-row gap-4 pb-5">
                <div className="uppercase font-bold text-sm">Development</div>
                <div className="opacity-80 text-sm">16 March 2023</div>
              </div>
              <div className="font-bold text-3xl font-raleway leading-snug">
                How to make a Game look more attractive with New VR & AI
                Technology
              </div>
              <div className="py-3 font-light">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses, and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products, or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </div>
              <div className="flex py-5">
                <div className="white-colored-button-with-border">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-between">
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
      </div>

      {/* popular posts */}
      <div className="px-20 py-10">
        <div className="flex flex-row justify-between pb-10">
          <div className="font-[600] text-5xl ">Popular Post</div>
          <div className="purple-colored-button">View All</div>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
      </div>

      {/* response section */}
      <div className="flex flex-col items-center py-24 bg-purple text-white">
        <div className="text-5xl w-[50%] text-center font-[600] pb-10">
          Get our stories delivered From us to your inbox weekly.
        </div>
        <div className="flex gap-5 pb-8">
          <div>
            <Input type="email" placeholder="Your Email" />
          </div>
          <div className="white-colored-button-with-border-and-text-white">
            Get started
          </div>
        </div>
        <div className="w-[40%] text-center text-gray">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a reponse the following day.
        </div>
      </div>

      {/* footer section */}
      <div className="flex flex-col items-center p-10">
        <div className="flex gap-3 pb-8">
          <div>
            <Image src={BlogLogo} alt="Blog logo" />
          </div>
          <div className="flex items-center font-bold text-2xl">Want2Know</div>
        </div>
        <div className="flex gap-10 pb-8">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Blog</div>
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        <div className="w-[90%]">
          <hr className="text-purple"/>
        </div>
        <div className="pt-8">Copyright Ideapeel Inc © 2023. All Right Reserved</div>
      </div>
    </main>
  );
}

const PostComponent = () => {
  return (
    <div className="w-[30%]">
      <div>
        <Image src={BlogImage} alt="Blog image" className="w-[100%]" />
      </div>
      <div className="py-5">
        <div className="flex flex-row gap-4 pb-5">
          <div className="uppercase font-bold text-xs">Travel</div>
          <div className="opacity-80 text-xs">16 March 2023</div>
        </div>
        <div className="font-[600] text-xl leading-snug">
          8 Rules of Travelling In Sea You Need To Know
        </div>
        <div className="py-3 font-light">
          Travelling in sea has many advantages. Some of the advantages of
          transporting goods by sea include: you can ship large volumes at costs
        </div>
        <div className="flex py-5">
          <div className="link-button">Read more...</div>
        </div>
      </div>
    </div>
  );
};
