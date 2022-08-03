export const info = [
  {
    name: 'BALL',
    date: '8/02',
    draft: false,
  },
  {
    name: 'FLIP',
    date: '8/03',
  },
]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})