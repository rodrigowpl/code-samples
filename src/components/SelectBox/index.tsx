import React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { FaChevronDown } from 'react-icons/fa'

import theme from 'styles/theme'

import * as S from './styles'

type BaseValue = {
  id: string
  value: string
}

type Props<TValue> = {
  data: TValue[]
  onChange: (value: string) => void
  value: string
  placeholder?: string
  className?: string
}

export const SelectBox = <TValue extends BaseValue>({
  data,
  onChange,
  value,
  placeholder = 'Select an option',
  className
}: Props<TValue>) => (
  <S.Wrapper className={className}>
    <S.Container>
      <SelectPrimitive.Root value={value} onValueChange={onChange}>
        <S.Trigger aria-label="Select" className="selectbox-trigger">
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.SelectIcon>
            <FaChevronDown color={theme.colors.primary400} size={12} />
          </SelectPrimitive.SelectIcon>
        </S.Trigger>
        <SelectPrimitive.Portal>
          <S.Content>
            <S.ScrollUpButton>
              <TiArrowSortedUp color={theme.colors.primary400} size={18} />
            </S.ScrollUpButton>
            <S.ViewPort>
              {data.map((item, index) => (
                <S.Item key={index} value={item.id}>
                  <SelectPrimitive.ItemText>
                    <span>{item.value}</span>
                  </SelectPrimitive.ItemText>
                  <S.ItemIndicator>
                    <CheckIcon />
                  </S.ItemIndicator>
                </S.Item>
              ))}
            </S.ViewPort>
            <S.ScrollDownButton>
              <TiArrowSortedDown color={theme.colors.primary400} size={18} />
            </S.ScrollDownButton>
          </S.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </S.Container>
  </S.Wrapper>
)

export default SelectBox
