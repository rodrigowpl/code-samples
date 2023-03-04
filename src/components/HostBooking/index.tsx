import { useEffect, useState } from 'react'
import { getDay, format } from 'date-fns'
import Swiper from 'swiper'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import DaySlot from 'components/DaySlot'
import Slider from 'components/Slider'

import Loader from 'components/Loader'

import { fakeDebounce } from 'utils'

import { EventHostProps, SessionDateProps, PublicSessionProps } from 'types/api'

import * as S from './styles'

export type SessionBookingProps = {
  session: PublicSessionProps
}

type Props = {
  hosts: EventHostProps[]
  onBookSession: (booking: SessionBookingProps) => Promise<void>
}

const HostBooking = ({ hosts, onBookSession }: Props) => {
  const [bookingLoading, setBookingLoading] = useState(false)
  const [sessionSwiper, setSessionSwiper] = useState<Swiper>()
  const [isLoading, setLoading] = useState(false)
  const [selectedHost, setSelectedHost] = useState(hosts[0])
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)

  const sessions = selectedHost.sessionsDates

  const defaultSessionDate = sessions[0]
  const defaultSession = defaultSessionDate?.sessions[0]

  const [selectedSessionDate, setSelectedSessionDate] = useState<
    SessionDateProps | undefined
  >(defaultSessionDate)
  const [selectedSession, setSelectedSession] = useState<
    PublicSessionProps | undefined
  >(defaultSession)

  const totalDateSlides = 4
  const totalDateSessions = sessions.length

  const handleSelectDay = (sessionDate: SessionDateProps, index: number) => {
    setSelectedSessionDate(sessionDate)
    setSelectedSession(sessionDate.sessions[0])
    setSelectedDayIndex(index)
    sessionSwiper?.slideTo(0)
  }

  const handleSelectSession = (session: PublicSessionProps) => {
    setSelectedSession(session)
  }

  const handleBookSession = async () => {
    setBookingLoading(true)
    if (selectedSession) {
      await onBookSession({
        session: {
          ...selectedSession,
          date: selectedSession.date
        }
      })
    }
    setBookingLoading(false)
  }

  const handleChangeHost = async (hostId: string) => {
    setLoading(true)
    await fakeDebounce(500)
    setLoading(false)

    const selectedHost = hosts.find(({ id }) => id === hostId)
    if (selectedHost) {
      setSelectedHost(selectedHost)
    }
  }

  useEffect(() => {
    const selectedSession = sessions[selectedDayIndex]

    if (selectedSession) {
      setSelectedSessionDate(selectedSession)
      setSelectedSession(selectedSession.sessions[0])
    }
  }, [sessions])

  useEffect(() => {
    const updatedHost = hosts.find(({ id }) => id === selectedHost.id)
    updatedHost && setSelectedHost(updatedHost)
  }, [hosts])

  const normalizedHosts = hosts.map((item) => ({
    id: item.id,
    value: item.name
  }))

  return (
    <S.Wrapper>
      {isLoading && (
        <S.LoadingOpacity>
          <Loader inverted />
        </S.LoadingOpacity>
      )}
      <S.Header>
        <Avatar size={56} src={selectedHost.avatar} />
        <S.HostWrapper>
          <S.HostSelect
            data={normalizedHosts}
            value={selectedHost.id}
            onChange={handleChangeHost}
          />
          <S.HostHeadline>
            <strong>{selectedHost.healine}</strong> at{' '}
            <strong>{selectedHost.company.name}</strong>
          </S.HostHeadline>
        </S.HostWrapper>
      </S.Header>
      {totalDateSessions > 0 ? (
        <>
          <S.ScheduleSection>
            <Slider
              title="Available sessions"
              slidesToShow={totalDateSlides}
              sliders={sessions.map((session, index) => {
                const isSelected = index === selectedDayIndex

                return (
                  <DaySlot
                    key={session.id}
                    weekday={getDay(new Date(session.date))}
                    text={format(new Date(session.date), 'MMM dd')}
                    slot={session.sessions.length}
                    selected={isSelected}
                    width={98}
                    onClick={() => handleSelectDay(session, index)}
                  />
                )
              })}
            />
          </S.ScheduleSection>
          <S.Divisor />
          <S.ScheduleSection>
            <Slider
              title="Available time slots"
              slidesToShow={3}
              onSwiper={setSessionSwiper}
              sliders={selectedSessionDate?.sessions.map((session) => {
                return (
                  <DaySlot
                    key={session.id}
                    text={format(new Date(session.date), 'hh:mm aaa')}
                    selected={session.id === selectedSession?.id}
                    width={133}
                    onClick={() => handleSelectSession(session)}
                  />
                )
              })}
            />
          </S.ScheduleSection>
          {selectedSession && (
            <S.Footer>
              <Button
                width="100%"
                onClick={handleBookSession}
                text={`Book session for ${format(
                  new Date(selectedSession.date),
                  'MMM dd'
                )}, ${format(new Date(selectedSession.date), 'hh:mmaaa')}`}
                loading={bookingLoading}
                variant="primary"
              />
            </S.Footer>
          )}
        </>
      ) : (
        <S.Blankslate>
          <span>There are no more sessions available for this host</span>
        </S.Blankslate>
      )}
    </S.Wrapper>
  )
}

export default HostBooking
