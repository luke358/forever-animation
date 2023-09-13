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
  {
    name: 'Scope',
    date: '8/04',
  },
  {
    name: 'Square',
    date: '8/05',
  },
  {
    name: 'css-doodle',
    date: '8/11',
  },
  {
    name: 'TODO-checked',
    date: '2023/9/13',
  },
]

export const works = info.map((info, idx) => {
  return {
    ...info,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
