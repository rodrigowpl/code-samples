import React from 'react'
import SwiperClass, { Navigation } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import theme from 'styles/theme'
import * as S from './styles'

type ArrowsProps = {
  arrows?: boolean
}
const Arrows = ({ arrows = false }: ArrowsProps) => {
  const swiper = useSwiper()

  const nextSlide = () => swiper.slideNext()
  const previousSlide = () => swiper.slidePrev()

  if (!arrows) return null

  return (
    <S.Arrows>
      <S.ArrowContainer onClick={previousSlide}>
        <FaChevronLeft size={14} color={theme.colors.gray500} />
      </S.ArrowContainer>
      <S.ArrowContainer onClick={nextSlide}>
        <FaChevronRight size={14} color={theme.colors.gray500} />
      </S.ArrowContainer>
    </S.Arrows>
  )
}

type Props = {
  sliders?: React.ReactNode[]
  title?: string
  slidesToShow?: number
  allowTouchMove?: boolean
  arrows?: boolean
  onSwiper?: (swiper: SwiperClass) => void
}

const Slider = ({
  sliders,
  title,
  arrows = true,
  slidesToShow = 1,
  allowTouchMove,
  onSwiper
}: Props) => {
  if (!sliders) return null

  return (
    <S.Wrapper>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesToShow}
        modules={[Navigation]}
        allowTouchMove={allowTouchMove}
        observeSlideChildren={true}
        onSwiper={onSwiper}
      >
        <S.SliderHeader slot="container-start">
          {title && <S.Title>{title}</S.Title>}
          <Arrows arrows={(slidesToShow || 1) < sliders.length && arrows} />
        </S.SliderHeader>
        {sliders.map((slide) => (
          <SwiperSlide key={Math.random()}>
            <S.SliderItem>{slide}</S.SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}

export default Slider
