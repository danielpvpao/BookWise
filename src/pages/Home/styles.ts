import { styled } from '@stitches/react'

export const HomeContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 3fr 1fr',
  padding: '$4',
})

export const CommentListContainer = styled('div', {
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  marginInline: 'auto',
  gap: '$10',
  height: '70vh',
  div: {
    'span:first-child': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '65%',
      marginInline: 'auto',
      '& button': {
        all: 'unset',
        color: '$purple100',
        display: 'flex',
        alignItems: 'center',
        gap: '$2',
      },
    },
  },
  '> h1': {
    width: '65%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    fontSize: '$2xl',
    color: '$gray100',
    svg: {
      color: '$green100',
    },
  },
  p: {
    fontSize: '$sm',
    color: '$gray100',
    lineHeight: '160%',
  },
})

export const CommentList = styled('span', {
  gap: '$4',
  display: 'flex',

  overflowY: 'scroll',
  flexDirection: 'column',
  paddingBottom: '51rem',
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '& > span:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    marginInline: 'auto',
    width: '65%',
    '& > button:last-child': {
      color: '$purple100',
    },
  },
  button: {
    all: 'unset',
    display: 'flex',
    gap: '$2',
    fontSize: '$sm',
  },
})

export const BookListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '8rem',
  div: {
    img: {
      width: 64,
      height: 94,
    },
  },
  'span:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    '& p:first-child': {
      fontSize: '$sm',
      color: '$gray100',
      lineHeight: '160%',
    },
    '& button': {
      all: 'unset',
      color: '$purple100',
      display: 'flex',
      alignItems: 'center',
      gap: '$2',
    },
  },
})
export const LastReadingContainer = styled('div', {
  '> div': {
    marginTop: '$6',
  },
})
