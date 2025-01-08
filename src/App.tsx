import "./App.css";
import Header from "./assets/components/Header";
import { Card, CardContent } from "../src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../src/components/ui/carousel";
import { cardItems, trending_products } from "./lib/utils";
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Menu, X } from "lucide-react";

function App() {

  return (
    <>
      <div className="w-full">
        <Header/>
        
        <div className=" w-full py-8 px-8 ">
          <img src="src/assets/homepage.png" className="w-full h-[90%]" />
          <h1 className="font-bold text-3xl text-center py-3 max-sm:text-xl">
            Product Categories
          </h1>
          <div className="w-full h-full  py-3  max-sm:py-0">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full py-0 px-0"
            >
              <CarouselContent>
                {cardItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full md:basis-1/2 lg:basis-1/5 max-sm:basis-1/2"
                  >
                    <div className="p-1">
                      <Card className="w-[95%] bg-[#D3D3D3] h-full">
                        <CardContent className="flex aspect-square justify-center gap-y-8 h-full p-10 max-sm:p-4">
                          <span className="text-md  font-bold max-sm:text-sm">
                            <h3 className="text-black text-center">
                              {item.title}
                            </h3>
                            <div className="w-full h-full flex items-end max-sm:items-center">
                              <img
                                src={item.img}
                                className="w-24 h-24 max-sm:w-16 max-sm:h-16 "
                              />
                            </div>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-none" />
              <CarouselNext className="bg-none" />
            </Carousel>
          </div>
          <div className="bg-[#D3D3D3] w-full h-14 rounded-xl my-10 flex items-center justify-start gap-4 p-4">
            <img src="src/assets/segment.png" />
            <h1 className=" font-bold"> Segments</h1>
          </div>
          <div className="flex items-center justify-center h-full gap-4 w-full max-sm:flex-col">
            <div className="w-full  flex flex-col items-center bg-[url('https://media.istockphoto.com/id/1450159186/photo/a-white-modern-farmhouse.jpg?s=612x612&w=0&k=20&c=X_ZhjuMI0dWL2kj4ycvjRATivPPoHucaW8RBlXp2Pz8=')] bg-cover bg-center h-[250px] rounded-md justify-between py-8">
              <h3 className="text-center font-bold">Residential</h3>
              <button className="bg-black text-white px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="w-full flex flex-col items-center bg-[url('https://www.trade4asia.com/ProductImg/Institutional_Buildings.jpg')] bg-cover bg-center h-[250px] rounded-md justify-between py-8">
              <h3 className="text-center font-bold">Institutional </h3>
              <button className="bg-black text-white px-4 py-2 rounded">
                View More
              </button>
            </div>
            <div className="w-full flex flex-col items-center bg-[url('https://snoopy.archdaily.com/images/archdaily/media/images/673f/e43e/828e/5e01/87b1/5b63/medium_jpg/agora-uni-estudio-modulo_17.jpg?1732240461&format=webp&width=640&height=440&crop=true')] bg-cover bg-center h-[250px] rounded-md justify-between py-8">
              <h3 className="text-center font-bold">Commercial</h3>
              <button className="bg-black text-white px-4 py-2 rounded">
                View More
              </button>
            </div>
          </div>
          <div className="bg-[#D3D3D3] w-full h-14 rounded-xl my-10 flex items-center justify-between gap-4 p-4 max-sm:p-2">
            <div className="flex items-center justify-start gap-4 p-4 max-sm:p-0 max-sm:gap-3">
              <img src="src/assets/trending_products.png" />
              <h3 className=" font-bold max-sm:text-xs"> Trending products</h3>
            </div>
            <div className="flex items-center justify-end gap-1 p-4  max-sm:p-0 max-sm:gap-0">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trending_products.map((item, index) => (
              <div key={index} className="p-1 rounded-md">
                <div className="bg-[#D3D3D3] h-[250px] rounded-md">
                  <div className="flex flex-col items-start justify-start h-full">
                    <img
                      src={item.img}
                      className="w-full h-[70%] object-cover rounded-md"
                    />
                    <h3 className="text-sm font-light text-gray-500 text-start p-3">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full bg-[#D3D3D3] flex flex-col items-center justify-center gap-4 p-5">
          <h1 className="font-bold text-3xl">Interior Designing</h1>
          <p className="text-center text-[#030303] text-md w-[80%]">
            Kitchen Interior - Let us help you design your kitchen. Leave the
            worry of mixing and matching furniture behind. Set up your space
            confidently by purchasing the complete look for a seamless
            experience.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded">
            Know More
          </button>

          <Carousel className="w-[90%] h-[90%]">
            <CarouselContent>
              {trending_products.map((item, index) => (
                <CarouselItem key={index} className="w-[80%] h-[80%] mx-auto">
                  <div className="p-1">
                    <div className="w-full h-full">
                      <CardContent className="flex aspect-video items-center justify-center  w-full h-full">
                        <img
                          src={item.img}
                          className="rounded-lg w-full h-full"
                        />
                      </CardContent>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full h-full  flex flex-col items-center justify-center gap-4 py-10">
          <h1 className="font-bold text-3xl">About us</h1>
          <p className="text-center text-[#030303] text-md w-[80%]">
            Discover the epitome of luxury living with our exclusive furniture
            collection. Each piece is meticulously crafted to bring
            sophistication and elegance to your home.
          </p>
          <div className="flex w-full h-full items-start gap-4 max-sm:flex-wrap">
            <div className="grid  md:grid-cols-2 lg:grid-cols-2  gap-4 w-[50%] max-sm:w-full max-sm:grid-cols-1   max-sm:p-5 p-10">
              <div>
                <h3 className="font-bold text-2xl">Inspired Living</h3>
                <p>
                  Discover furniture that combines modern elegance with everyday
                  comfort, crafted to make your home a reflection of your unique
                  style.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Exceptional Savings</h3>
                <p>
                  By bridging the gap between you and trusted furniture makers,
                  we bring you stunning pieces at prices that fit your budget.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Easy Shopping</h3>
                <p>
                  From quick browsing to fast delivery and easy assembly, we
                  simplify every step of finding and enjoying your perfect
                  furniture.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-2xl">Sustainable Options</h3>
                <p>
                  Choose from sustainable furniture options crafted with the
                  planet in mind—because style should never come at the cost of
                  the environment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 w-[50%] gap-4 max-sm:w-full  max-sm:px-5 ">
              <img src="src/assets/img1.png" className="w-fit h-fit" />
              <img src="src/assets/img2.png" className="w-fit max-h-fit" />
              <img src="src/assets/img3.png" className="w-fit h-fit mt-0 space-y-0" />
              <img src="src/assets/img4.png" className="w-fit h-fit" />
            </div>
          </div>
        </div>
        <div className="text-start gap-y-4">
          <h1 className="text-3xl font-bold text-center">Our Process</h1>
          <div className="grid max-sm:grid-cols-1 grid-cols-2 p-10 max-sm:p-3 gap-10 px-14">
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/71d5950650dc026ce12a98dc6e836d992646e8b0"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/beb597531f3e61ca1880d2cf00db36420cdc6c9b"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/1b8c2ebb15c88cd61da0ecbeb9f6a4a6d8ec13b1"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/a73ef20626effcd84f7b413cfcfe8c582f0f0019"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/a5217d5a374d2413f630d3fc70fc0bff87623517"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/329fa8424b5dfa67130d242c3e12026cb43b95c0"
                className="w-24 h-24 rounded-md"
              />
              <div className="flex flex-wrap gap-0">
                <h3 className="font-bold">Step 1: Select your dream model</h3>
                <p className="text-sm">
                  Identify the style that best suits your space and personality.
                  From modern minimalism to classic elegance, choose what
                  resonates with you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">
            Why Vibrer Stands Out?
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-5 min-h-screen py-5 px-5">
            <div className="w-[438px] h-[320px] bg-[#D3D3D3]  rounded-xl flex flex-col items-center justify-end gap-4">
              <img src="src/assets/collections.png" />
              <div className="p-5">
                <p className="font-bold">500 + Collections</p>
                <p>
                  Our journey begins with a comprehensive understanding of your
                  unique style and space requirements.
                </p>
              </div>
            </div>
            <div className="w-[438px] h-[320px] bg-[#D3D3D3]  rounded-xl flex flex-col items-center justify-end gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/1adab27a0bee11f475e8fd0393fd197b03d089b7"
                className="h-[28%]"
              />
              <div className="p-5">
                <p className="font-bold">300 + Fabrics</p>
                <p>
                  Our journey begins with a comprehensive understanding of your
                  unique style and space requirements.
                </p>
              </div>
            </div>

            <div className="w-[438px] h-[320px] bg-[#D3D3D3]  rounded-xl flex flex-col items-center justify-end gap-4">
              <img src="src/assets/top-nouch.png" className="h-[28%]" />
              <div className="p-5">
                <p className="font-bold">Top-notch Quality</p>
                <p>
                  Our journey begins with a comprehensive understanding of your
                  unique style and space requirements.
                </p>
              </div>
            </div>

            <div className="w-[438px] h-[320px] bg-[#D3D3D3]  rounded-xl flex flex-col items-center justify-end gap-4">
              <img src="src/assets/coustomization.png" className="h-[28%]" />
              <div className="p-5">
                <p className="font-bold">Colour and Length customization</p>
                <p>
                  Our journey begins with a comprehensive understanding of your
                  unique style and space requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-auto p-8 text-white ">
          <div className="flex w-full max-sm:flex-col items-start justify-between gap-4">
            <div className="w-[50%] max-sm:w-full flex flex-col items-start gap-4">
              <img
                src="https://www.figma.com/file/MTcDtv29awUDXFVDAnwnVR/image/d7fb35d10a5d5473989ba4ec575b8af8fe1f746c"
                className="w-20 h-20 mx-2 my-2"
                alt="Logo"
              />
              <p className="px-3 text-sm">
                Your dream space deserves the best execution, and that’s where
                United Buildpro Pvt Ltd excels. Our construction services
                encompass everything from foundational work to structural
                builds, tailored to residential, commercial, and industrial
                needs. We pride ourselves on using high-quality materials and
                advanced techniques to ensure durability and efficiency in every
                project we undertake.
              </p>

              <div className="flex gap-3 px-3 py-2">
                <Instagram />
                <Linkedin />
              </div>
            </div>
<div className="flex flex-row w-full  items-start justify-center gap-4  ">
            <div className="w-[50%] text-white items-center justify-center place-items-start max-sm:w-full">
              <p >Home</p>

              <p>Living</p>
              <p>Storage</p>
              <p>Dining</p>
              <p>Bedroom</p>
              <p>Matress</p>
              <p>Study</p>
              <p>Office</p>
              <p>Outdoor</p>
            </div>
            <div className="px-20 py-3">
              <p>Residential</p>
              <p>Institutional</p>
              <p>Commercial</p>
            </div>
            </div>
          </div>
          <hr className="w-[98%] m-auto mt-4" />
          <p className="text-center py-2">2024 © All rights reserved - Cozy Comfort</p>
          <img src="src/assets/transcation.png" className="m-auto" />
        </div>
      </div>
    </>
  );
}

export default App;
