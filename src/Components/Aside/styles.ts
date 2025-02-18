import { styled } from '@stitches/react'

export const AsideContainer = styled('aside', {
  width: 232,
  height: '94vh',
  display: 'flex',
  justifyContent: 'space-between',
  background: `linear-gradient(180deg, $green300 0%, $purple200 20%, $gray800 70%, $gray700 80%)`,
  borderRadius: '12px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$10 0',
  p: {
    color: '$gray200',
    display: 'flex',
    justifyContent: 'space-beetween',
    gap: '$3',
    padding: '$1',
    alignItems: 'center',
    button: {
      all: 'unset',
      color: '$gray400',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-beetween',
      gap: '$3',
      padding: '$2 0',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  span: {
    color: '$gray200',
    display: 'flex',
    justifyContent: 'space-beetween',
    gap: '$3',
    padding: '$1',
    alignItems: 'center',
    button: {
      all: 'unset',
      lineHeight: '0',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-beetween',
    alignItems: 'center',
    gap: '4rem',
    div: {
      gap: '$4',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-beetween',
      fontSize: '$md',
      lineHeight: '160%',
      section: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        gap: '$5',
        'span:first-of-type': {
          color: '$gray100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-beetween',
          gap: '$3',
          padding: '$2 0',
        },
        button: {
          all: 'unset',
          color: '$gray400',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-beetween',
          gap: '$3',
          padding: '$2 0',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  },
})
