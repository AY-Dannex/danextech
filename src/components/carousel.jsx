import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import vhiktonyImg from '../assets/vhiktonyImg.webp'
import sophia from '../assets/sophia.webp'
import michael from '../assets/michael.webp'
import chloe from '../assets/chloe.webp'
import daniel from '../assets/daniel.webp'

const testimonials = [
  {
    name: "Akindun Victor",
    image: vhiktonyImg,
    text: `I had such a great experience working with Danex.Tech. 
            He really listened to what i wanted and brought by ideas to life beautifully.`,
    text2: `I'll definately recommend him to anyone looking for a professional and reliable web developer.`
  },
  {
    name: "Michael Smith",
    image: michael,
    text: "Working with DanexTech was the best decision for our product launch. He transformed our outdated interface into a sleek, responsive, and modern design that instantly impressed our users.",
    text2: "Fast delivery, pixel-perfect execution — simply outstanding!"
  },
  {
    name: "Sophia Lee",
    image: sophia,
    text: `I’ve collaborated with a lot of front-end devs, but DanexTech stands out. His attention to detail and understanding of design systems are top-notch`,
    text2: `He doesn’t just write code — he makes the UI come alive.`,
  },
  {
    name: "Daniel Johnson",
    image: daniel,
    text: `DanexTech took our vision and built something even better. 
          The user experience is smooth, the animations are subtle yet elegant, 
          and everything works flawlessly across devices`,
    text2: `Highly professional and communicative throughout the process.`,
  },
  {
    name: "Chloe Adams",
    image: chloe,
    text: `“DanexTech is the kind of front-end developer every team needs. Clean code, smart component structure, and strong grasp of React, TailwindCSS etc.`,
    text2: `He’s reliable, fast, and delivers exactly what you ask for — or better..`,
  },
];

export default function TestimonialCarousel() {
  return (
      <div className="w-full overflow-hidden pt-12 pb-5">
        <h1 className="theme text-[25px] font-bold text-center mb-3 md:text-[40px] dark:text-[#42c697]">Testimonies</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="testimonialSwiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              className="bg-[#001516] rounded-xl p-6 flex flex-col items-center text-center 
              transition-all duration-500"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-lg text-[#42c697] mb-2">{t.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 text-white font-thin">{t.text}</p>
              <p className="text-gray-600 text-sm leading-relaxed text-white font-thin">{t.text2}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* Fade + scale style */
        .swiper-slide {
          opacity: 0.5;
          transform: scale(0.85);
          transition: all 0.6s ease;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          filter: blur(3px);
        }

        /* Remove hover shadow */
        .testimonialSwiper .swiper-slide:hover {
          box-shadow: none !important;
        }

        /* Pagination dots */
        .swiper-pagination {
          margin-top: 15px;
          position: relative;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #5fd5bd;
        }

        /* Responsive fix for narrow screens */
        @media (max-width: 640px) {
          .swiper-slide {
            transform: scale(0.95);
          }
          .swiper-slide-active {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
