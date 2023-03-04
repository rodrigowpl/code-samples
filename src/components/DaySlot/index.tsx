import * as S from './styles'

type Props = {
  weekday?: number
  text: string
  slot?: number
  width?: number
  selected?: boolean
  onClick?: () => void
}
export const DaySlot = ({
  weekday = -1,
  text,
  slot,
  width,
  selected,
  onClick
}: Props) => {
  const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  return (
    <S.Wrapper selected={selected} width={width} onClick={onClick}>
      {weekday !== undefined && (
        <S.ScheduleWeekday>{dayName[weekday]}</S.ScheduleWeekday>
      )}
      <S.ScheduleMainText>{text}</S.ScheduleMainText>
      {slot && (
        <S.ScheduleSlot>
          {slot} {slot > 1 ? 'slots' : 'slot'}
        </S.ScheduleSlot>
      )}
    </S.Wrapper>
  )
}

export default DaySlot
