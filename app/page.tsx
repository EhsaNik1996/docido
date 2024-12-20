'use client'
import Link from 'next/link'
import Image from 'next/image'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Header from '@/components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import {
  BookOpen,
  Book,
  Paperclip,
  Headphones,
  FileText,
  File,
  Settings,
  Search,
  PlayCircle,
  ChevronDown,
  ShoppingBag,
  User,
} from 'react-feather'

export default function HomePage() {
  const sliders = [
    {
      id: 0,
      link: '/',
      img: 'https://fastly.picsum.photos/id/161/1800/400.jpg?hmac=kbzNpgQNcp-oZK6IpMevfqr4s7gRv2XKdgm8dpRlSN0',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
    {
      id: 1,
      link: '/',
      img: 'https://fastly.picsum.photos/id/112/1800/400.jpg?hmac=Sqldq12aR-NiAByftsl24oYae-GghQtZx_S0ENOuKIE',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
    {
      id: 2,
      link: '/',
      img: 'https://fastly.picsum.photos/id/490/1800/400.jpg?hmac=biLv_lkFMxKWCxK3kmdUN-0s9gRozTH1CU8AwpuGLT8',
      title: 'جای شما و کتابخانه ما خالی....',
      description: 'بیش از 2.000.00 کتاب دیجیتال و 100.000 کتاب صوتی',
    },
  ]

  const books = [
    {
      id: 0,
      img: 'https://fastly.picsum.photos/id/545/220/330.jpg?hmac=egrVNjBuoylYBf7A5wfd-7D7J5xUtvZgb0FEtvsU7sQ',
      link: '/',
    },
    {
      id: 1,
      img: 'https://fastly.picsum.photos/id/645/220/330.jpg?hmac=2fTsi1c4Dlkqc2VCe28et4p2rd1pK8_AvUItJ-_NhCc',
      link: '/',
    },
    {
      id: 2,
      img: 'https://fastly.picsum.photos/id/979/220/330.jpg?hmac=QOt7-jRS3t9J-tWHPaOpw3JhgFsYfBnm_CS5DO1QnG0',
      link: '/',
    },
    {
      id: 3,
      img: 'https://fastly.picsum.photos/id/1041/220/330.jpg?hmac=Upa4V38W63lLkbRrCS69zFq8HU-vOJwMpEmj_nD7fZk',
      link: '/',
    },
    {
      id: 4,
      img: 'https://fastly.picsum.photos/id/788/220/330.jpg?hmac=uCojuT1AtjC0Kv1p-s3t1gGGscZ1wKc5bpzbuyAXFSg',
      link: '/',
    },
    {
      id: 5,
      img: 'https://fastly.picsum.photos/id/515/220/330.jpg?hmac=YTNlaG87z7br18UKBllt29zuRrcwojq0AuAmoCLd1aI',
      link: '/',
    },
    {
      id: 6,
      img: 'https://fastly.picsum.photos/id/981/220/330.jpg?hmac=kwuAR_Qheow1vv0tj3FM_e3LWaN5qcPfQH6lsjntqnk',
      link: '/',
    },
    {
      id: 7,
      img: 'https://fastly.picsum.photos/id/291/220/330.jpg?hmac=tIcryQmGrL3aYuqrQVBG353mfnKA77LSedMANZq8e38',
      link: '/',
    },
    {
      id: 8,
      img: 'https://fastly.picsum.photos/id/777/220/330.jpg?hmac=b4Ysrzz3oGSQ1RM0OleJ4Pvp4lo9WwTrnwRaYuG3AV0',
      link: '/',
    },
    {
      id: 9,
      img: 'https://fastly.picsum.photos/id/788/220/330.jpg?hmac=uCojuT1AtjC0Kv1p-s3t1gGGscZ1wKc5bpzbuyAXFSg',
      link: '/',
    },
  ]
  const posts = [
    {
      id: 0,
      img: 'https://fastly.picsum.photos/id/683/103/155.jpg?hmac=q4E3Pi7QEn3w1mxTp8afRhOjmA08DdKDivaXnYBKqKs',
      type: 'کتاب صوتی',
      link: '/',
      title: 'داستان دورگه: سحرگاه',
      discription: 'پدیدآور: احمد احمدی - ناشر:  آوانامه',
    },
    {
      id: 1,
      img: 'https://fastly.picsum.photos/id/767/103/155.jpg?hmac=IgQ3ugydfY6_0ATkmTNU52vGtxHN11OCM6SXHcU0d_Q',
      type: 'کتاب صوتی',
      link: '/',
      title: 'داستان دورگه: سحرگاه',
      discription: 'پدیدآور: احمد احمدی - ناشر:  آوانامه',
    },
    {
      id: 2,
      img: 'https://fastly.picsum.photos/id/721/103/155.jpg?hmac=rJ07zuX1ooY6lWhtXh-aKKjLj7L31Bq5Vak71JQSaGI',
      type: 'کتاب صوتی',
      link: '/',
      title: 'داستان دورگه: سحرگاه',
      discription: 'پدیدآور: احمد احمدی - ناشر:  آوانامه',
    },
    {
      id: 3,
      img: 'https://fastly.picsum.photos/id/253/103/155.jpg?hmac=6hhXs8nxmYJ1QozeXjjtdoKyqytoNX8lIqAAxpqcnE4',
      type: 'کتاب صوتی',
      link: '/',
      title: 'داستان دورگه: سحرگاه',
      discription: 'پدیدآور: احمد احمدی - ناشر:  آوانامه',
    },
  ]

  return (
    <>
      <Header className="mt-10" />

      <main>
        {/* Banner slider */}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={16}
          className="h-96 mt-14"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id} className="w-full h-full relative">
              <div>
                <Image
                  fill
                  alt={slider.link}
                  sizes="1536px"
                  className="rounded-[50px]"
                  src={slider.img}
                />
              </div>
              <div className="absolute top-48 left-32 flex flex-col">
                <span className="text-white text-3xl font-black leading-[54px]">
                  {slider.title}
                </span>
                {slider.title && (
                  <span className="text-white text-sm font-normal">{slider.description}</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Book categories */}
        <div className="flex justify-center">
          <ul className="flex gap-x-4 mt-12">
            <li>
              <Link
                href="/"
                className="flex items-center gap-x-2 p-4 bg-black-haze text-content-low rounded-3xl hover:bg-ashwood transition-all duration-300"
              >
                <BookOpen size={33} />
                <span>کتاب متنی</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-x-2 p-4 bg-black-haze text-content-low rounded-3xl hover:bg-ashwood transition-all duration-300"
              >
                <Headphones size={33} />
                <span>کتاب صوتی</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-x-2 p-4 bg-black-haze text-content-low rounded-3xl hover:bg-ashwood transition-all duration-300"
              >
                <FileText size={33} />
                <span>نشریه</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-x-2 p-4 bg-black-haze text-content-low rounded-3xl hover:bg-ashwood transition-all duration-300"
              >
                <Book size={33} />
                <span>نسخه خطی</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-x-2 p-4 bg-black-haze text-content-low rounded-3xl hover:bg-ashwood transition-all duration-300"
              >
                <File size={33} />
                <span>سند</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Section under study */}
        <div className="flex flex-col justify-center cursor-pointer w-[1656px] -mx-[60px] p-11 h-80 bg-ashwood items-start rounded-[50px] mt-9">
          <span className="flex px-4 text-content-high text-xl font-extrabold pb-3">
            درحال مطالعه
          </span>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={3}
            spaceBetween={16}
            className="w-full px-4 text-content-high"
          >
            {posts.map((post) => (
              <SwiperSlide
                key={post.id}
                className="flex w-[544px] h-48 gap-x-4 rounded-3xl bg-lightAlb hover:bg-alabaster transition duration-300"
              >
                <div className="flex flex-col justify-center px-4">
                  <img src={post.img} className="rounded-3xl" />
                </div>

                <div className="flex flex-col justify-start mt-4">
                  <span className="font-semibold text-xl leading-9">{post.title}</span>
                  <span className="font-normal text-base leading-7">{post.discription}</span>
                  <Link
                    href={post.link}
                    className="flex justify-center items-center w-[107px] h-9 text-content-low bg-WhiteCoffee rounded-xl gap-x-2 mt-1"
                  >
                    <Headphones size={20} />
                    <span className="text-sm font-medium">{post.type}</span>
                  </Link>
                  <div id="progress" className="flex flex-col h-0.5 w-80 bg-WhiteCoffee mt-3">
                    <div className="flex justify-between mt-4">
                      <span className="text-content-high">
                        <span className="text-lg font-extrabold">3%</span>
                        <span className="text-sm font-normal">شنیده اید</span>
                      </span>
                      <button className="text-content-low">
                        <PlayCircle size={32} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <div className="flex justify-between mt-36">
            <span className="text-content-high font-bold text-2xl">دیگر آثار این ناشر</span>
            <button>بیشتر...</button>
          </div>

          <Swiper slidesPerView={6} spaceBetween={24} className="flex w-full mt-14">
            {books.map((book) => (
              <SwiperSlide key={book.id} className="flex w-56">
                <div className="relative w-56 h-80 rounded-3xl overflow-hidden">
                  <img src={book.img} alt={book.link} className="w-full h-full rounded-3xl" />
                  <span className="absolute flex justify-center items-center w-14 h-14 top-[-8px] right-[179px] bg-red rounded-2xl">
                    <Paperclip size={20} className=" text-white ml-3 mt-3" />
                  </span>
                  <span className="absolute flex justify-center items-center top-[270px] right-2 w-auto opacity-85 rounded-2xl bg-alabaster cursor-pointer group">
                    <BookOpen size={20} className="text-content-high m-2.5" />
                    <span className="hidden group-hover:inline ml-2 pl-6 text-sm">
                      کتابخانه تخصصی تاریخ...
                    </span>
                  </span>
                </div>

                <div></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  )
}
