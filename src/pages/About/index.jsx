import Nav from "../../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-full mb-4 md:mb-36 py-5 md:py-20 px-0 md:px-20 lg:px-40 bg-bg1 bg-center bg-cover bg-no-repeat flex flex-col ">
        <div className="mt-20 px-6 md:px-20 pb-20 mx-auto w-11/12 md:w-full h-auto   bg-white rounded-sm md:rounded-xl shadow-lg">
          <img
            src="/image/ZADOK LOGO 2.png"
            alt="company logo"
            className=" my-12 mx-auto w-52 h-auto"
          />
          {/* 
          <h2 className=" text-2xl md:text-6xl py-4 md:py-5 md:pt-8   text-[#e30202] text-center ">
            About Us
          </h2> */}

          <h2 className=" text-xl md:text-2xl font-bold  text-[#e30202]  pb-4 pt-10  ">
            About Zadok Global Investment Ltd
          </h2>

          <p className="text-lg text-gray-900 leading-9">
            Zadok Global Investment Ltd began its journey as a dynamic and forward-thinking
            company, powered by a team of serial and innovative entrepreneurs.
            <br />
            <br />
            Our founders initially built their reputation by distributing products for industry
            giants like Cadbury, Nestlé, GlaxoSmithKline, and other global conglomerates. This
            foundation of trust, reliability, and excellence set the stage for our growth and
            diversification into new sectors.
            <br />
            <br />
            Today, Zadok Global Investment Ltd has evolved into a multi-faceted company with a
            strong presence in the real estate and property development industry. We specialize
            in the acquisition, development, and sale of prime land properties and houses,
            providing our clients with opportunities to invest in high-growth areas.
            <br />
            <br />
            In addition to real estate, we are committed to fostering entrepreneurship through
            our entrepreneurial development and business incubation programs. We believe in
            empowering the next generation of business leaders by providing them with the
            tools, resources, and guidance they need to thrive in a competitive market.
            <br />
            <br />
            Our diversification also extends to the distribution of innovative products, where
            we continue to leverage our extensive network and expertise to bring cutting-edge
            solutions to market. Whether through property development, entrepreneurial support,
            or product distribution, Zadok Global Investment Ltd remains at the forefront of
            innovation, consistently delivering value and excellence to our partners and
            clients.
          </p>
          {/* 
          <h2 className=" text-xl md:text-2xl font-bold  text-[#e30202]  pb-4 pt-10 uppercase">
            Our Mission
          </h2>
          <p className="text-xl text-gray-900 leading-9"></p>

          <h2 className=" text-xl md:text-2xl font-bold  text-[#e30202]  pb-4 pt-10 uppercase">
            OUR CORE VALUES
          </h2>
          <p className="text-xl text-gray-900 leading-9"></p> */}

          <h2 className=" text-md  font-bold  text-[#e30202]  pb-4 pt-10  ">Visit Us Today</h2>
        </div>
      </div>
    </>
  );
};

export default About;
