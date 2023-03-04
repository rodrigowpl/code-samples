import HostBooking, { SessionBookingProps } from 'components/HostBooking'

import { hosts } from './mock'

import * as S from './styles'

const Main = () => {
  const handleBooking = async (data: SessionBookingProps) => {
    console.log('Booking data', data)
  }

  return (
    <S.Wrapper>
      <S.Title>Sample - Booking host</S.Title>
      <S.Content>
        <HostBooking hosts={hosts} onBookSession={handleBooking} />
      </S.Content>
    </S.Wrapper>
  )
}
export default Main
