import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Components/Navbar.css"
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import PlaceIcon from "@mui/icons-material/Place";
import Cardsh from "./Components/Cardsh";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import hero from "../Pages/Components/Images/hero.jpeg"
import gal1 from "../Pages/Components/Images/gal1.JPG"
import gal2 from "../Pages/Components/Images/gal2.JPG"
import gal3 from "../Pages/Components/Images/gal3.JPG"
import home from "../Pages/Components/Images/home.JPG"
import home2 from "../Pages/Components/Images/home2.jpeg"
import hero2 from "../Pages/Components/Images/hero.png"
import logo2 from "../Pages/Components/Images/logo.png"
// ..
AOS.init();
export default function Home() {
  return (
    <Box>
      <Hero />
      <InfinityLogoLoop />
      <Concert />
      <Event />
      <Gallery />
      <Footer />
    </Box>
  );
}

function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw", // Explicitly set to full viewport width
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={hero}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          background:
            "linear-gradient(to bottom, rgba(20, 20, 22, 0.3) 0%, rgba(20, 20, 22, 0.6) 65%, rgba(20, 20, 22, 0.8) 90%)",
        }}
      >
        <Box
          component="img"
          src={hero2}
          sx={{
            width: { lg: "670px", md: "500px", sm: "400px", xs: "220px" },
            maxWidth: "100%",
          }}
        />
      </Box>
    </Box>
  );
}


function Concert() {
  return (
    <Box>
      <Box p={{ lg: 8, md: 6, sm: 4, xs: 3 }}>
        <Box>
          <Box className="grid mt-12 lg:grid-cols-2 gap-12">
            <Box mt={6} data-aos="zoom-in-right">
              <img
                src={home2}
                className="w-full h-auto rounded-3xl"
                alt="Concert Background"
              />
            </Box>
            <Box
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className="flex mt-12"
            >
              <Box className="flex flex-col justify-cent">
                <img src={logo2} style={{width:"100px"}} alt="" />
                <p
                  className="mt-4 text-white text-justify"
                  style={{ fontWeight: 200 }}
                >
                  "One pulse One beat One Kanam,” aims to
                  celebrate this intersection by providing a platform for
                  individuals to showcase their innovative ideas, artistic
                  expressions, and technological prowess. From captivating
                  performances to cutting-edge demonstrations, this event
                  promises to be a melting pot of inspiration and ingenuity.
                  Through a series of interactive workshops, stimulating
                  technical presentations, Startup Showcases, creative
                  solutions, and captivating performances, attendees will have
                  the opportunity to explore the myriad ways in which technology
                  and culture intersect to influence one another.
                </p>
                <Box className="mt-8">
                  <ul>
                    <li className="flex gap-3 text-white">
                      <CalendarMonthIcon
                        sx={{ color: "rgba(233, 127, 24, 1)" }}
                      />
                      08 Feburary 2025 | 09 Feburary 2025
                    </li>
                    <li className="flex mt-4 gap-3 text-white">
                      <PlaceIcon sx={{ color: "rgba(233, 127, 24, 1)" }} />
                      Dr NGP Institutions Campus
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png",
  },
  {
    name: "Sponsor 3",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo-700x394.png",
  },
  {
    name: "Sponsor 4",
    logo: "https://i.pinimg.com/originals/bb/3c/01/bb3c0117b37cd57106299270bd2c2d12.png",
  },
  {
    name: "Sponsor 5",
    logo: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.png",
  },
  {
    name: "Sponsor 1",
    logo: "https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png",
  },
  
];

const InfinityLogoLoop = () => {
  return (
    <Box
      sx={{
        padding: 0,
        backgroundColor: "rgba(229, 229, 229, 1)",
        overflow: "hidden",
        margin: "0 auto", // Centers the box
        boxSizing: "border-box",
        width: "90%",
        display: "flex", // Flexbox layout
        justifyContent: "center",
        flexWrap: "wrap", // Wraps items to next line for small screens
      }}
    >
      {sponsors.map((sponsor, index) => (
        <Box
          key={index}
          sx={{
            padding: 2,
            margin: 1,
            flex: "1 1 100px", // Flexible width with a minimum size
            maxWidth: "150px", // Restricts max size
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            style={{
              width: "100%",
              maxWidth: "100px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
const event = [
  {
    img: "https://www.eventbookings.com/wp-content/uploads/2023/06/Try-a-glow-effect-724x1024.jpg",
    title: "Cognito Clash",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
  },
  {
    img: "https://i.pinimg.com/474x/95/4f/91/954f912adb23d6b796e860796413090c.jpg",
    title: "Executive suit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
  },
  {
    img: "https://i.pinimg.com/originals/45/35/65/4535650015b7608dce2f8e36a42785eb.jpg",
    title: "DL and (LLM) in HR Analytics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xCc5ZXzXvsuflxCLEo6ONbxRQiGjD9PXrw&s",
    title: "AI in IOT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing",
  }
];

function Event() {
  return (
    <Box data-aos="fade-up" data-aos-anchor-placement="top-center" mt={10}>
      <Box p={{ lg: 4, md: 3, sm: 2, xs: 2 }}>
        <Box className="max-w-8xl mx-auto flex justify-between items-center px-4">
          <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold text-neutral-200 font-sans">
            Events
          </h2>
          <Link to="/events">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl transition duration-300">
              View More
            </button>
          </Link>
        </Box>
      </Box>
      <Box p={{ lg: 3, md: 2, sm: 3, xs: 3 }}>
        <Box mt={5}>
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
            className="mySwiper"
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2000, // 2 seconds delay between slides
              disableOnInteraction: true, // Keeps autoplay active after interaction
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              // When the viewport width is >= 320px (mobile phones)
              320: {
                slidesPerView: 1, // Show 1 slide
              },
              // When the viewport width is >= 768px (tablets)
              768: {
                slidesPerView: 2, // Show 2 slides
              },
              // When the viewport width is >= 1024px (small laptops)
              1024: {
                slidesPerView: 3, // Show 3 slides
              },
              // When the viewport width is >= 1440px (larger desktops)
              1440: {
                slidesPerView: 4, // Show 4 slides
              },
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {event.map((item) => (
              <SwiperSlide>
                <Cardsh
                  src={item.img}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}

function WorkShop() {
  return (
    <Box data-aos="fade-up" data-aos-anchor-placement="top-center" mt={20}>
      <Box p={4}>
        <Box className="max-w-8xl mx-auto flex justify-between items-center px-4">
          <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Project Expo
          </h2>
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-2xl transition duration-300">
            View More
          </button>
        </Box>
      </Box>
      <Box mt={5}>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000, // 2 seconds delay between slides
            disableOnInteraction: true, // Keeps autoplay active after interaction
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // When the viewport width is >= 320px (mobile phones)
            320: {
              slidesPerView: 1, // Show 1 slide
            },
            // When the viewport width is >= 768px (tablets)
            768: {
              slidesPerView: 2, // Show 2 slides
            },
            // When the viewport width is >= 1024px (small laptops)
            1024: {
              slidesPerView: 3, // Show 3 slides
            },
            // When the viewport width is >= 1440px (larger desktops)
            1440: {
              slidesPerView: 4, // Show 4 slides
            },
          }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {event.map((item) => (
            <SwiperSlide>
              <Cardsh
                src={item.img}
                title={item.title}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

function Gallery() {
  return (
    <Box mt={20}>
      <Box>
        {/* Background Image */}

        {/* Swiper Section */}
        <Box p={3}>
          <Box className="max-w-8xl mx-auto flex justify-start items-center px-4">
            <h2 className="text-4xl md:text-6xl sm:text-6xl font-bold text-neutral-200 font-sans">
              Gallery
            </h2>
          </Box>

          <Box mt={6}>
            <Swiper
              spaceBetween={5}
              loop={true}
              autoplay={{
                delay: 2000, // 2 seconds delay between slides
                disableOnInteraction: true, // Keeps autoplay active after interaction
              }}
              className="mySwiper"
              modules={[Autoplay]}
              breakpoints={{
                // When the viewport width is >= 320px (mobile phones)
                320: {
                  slidesPerView: 1, // Show 1 slide
                },
                // When the viewport width is >= 768px (tablets)
                768: {
                  slidesPerView: 2, // Show 2 slides
                },
                // When the viewport width is >= 1024px (small laptops)
                1024: {
                  slidesPerView: 3, // Show 3 slides
                },
                // When the viewport width is >= 1440px (larger desktops)
                1440: {
                  slidesPerView: 3, // Show 4 slides
                },
              }}
            >
              {[
                gal1,home, gal2, home2, gal3
              ].map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Box height={300} width="100%">
                    <img
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                      }}
                      src={imgSrc}
                      alt={`Slide ${index + 1}`}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
