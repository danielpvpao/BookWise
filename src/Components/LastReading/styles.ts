import { styled } from '@stitches/react'
export const CommentContainer = styled('div', {
  backgroundColor: '$gray600',
  borderRadius: '8px',
  '&:hover': {
    cursor: 'pointer',
    outline: '2px solid $gray500',
  },
})
export const CommentContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  padding: '$6',
})
export const AvatarContainer = styled('div', {
  display: 'flex',
  gap: '$4',
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '$full',
    border: 'solid black 1px',
  },
  span: {
    marginLeft: 'auto',
    section: {
      marginRight: '-8px',
    },
    nav: {
      marginLeft: '-9px',
    },
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginRight: 'auto',
  width: '100%',
  span: {
    h1: {
      fontSize: '$md',
      color: '$gray100',
      fontWeigth: '160%',
    },
    p: {
      fontSize: '$sm',
      color: '$gray400',
      fontWeigth: '160%',
    },
  },
  '> p': {
    color: '$gray300',
    fontWeigth: '160%',
  },
})
export const TextSection = styled('div', {
  display: 'flex',
  gap: '$5',
  justifyContent: 'space-between',
  img: {
    height: '100%',
    borderRadius: '4px',
    width: '6.75rem',
  },
})