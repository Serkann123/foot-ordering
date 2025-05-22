import Title from "@/components/ui/Title";
import Image from "next/image";

const Index = () => {
  return (
<div className="flex items-center h-screen gap-20 py-20 flex-wrap md:flex-nowrap">

      <div className="relative  w-[80%] h-[80%] mx-20">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain"></Image>
      </div>

      <div className="md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est
          dolorum itaque tenetur laboriosam quidem ipsam praesentium nesciunt
          numquam neque minus ratione, dignissimos cupiditate vel, quasi magni
          voluptatibus minima! Totam?
        </p>

        <div>
          <h4 className="text-xl font-bold">Choose the Size</h4>

          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="" layout="fill"></Image>
              <span className="absolute top-0 -right-6 rounded-full text-xs bg-primary px-[5px] font-medium">
                Small
              </span>
            </div>

            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="" layout="fill"></Image>
              <span className="absolute top-0 -right-6 rounded-full text-xs bg-primary px-[5px] font-medium">
                Medium
              </span>
            </div>

            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="" layout="fill"></Image>
              <span className="absolute top-0 -right-6 rounded-full text-xs bg-primary px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <strong className="text-sm font-semibold">Ketçap</strong>
          </label>

            <label className="flex items-center gap-x-1">
            <input type="checkbox" className="w-5 h-5 accent-primary" />
            <strong className="text-sm font-semibold">Ketçap</strong>
          </label>

        </div>

        <button className="btn-primary">Add to Cart</button>

      </div>
    </div>
  );
};

export default Index;
