export const mapData = [
  [
    'p1',
    (item) => {
      return `<FirstLevel moduleId="${item.id}" />`
    },
  ],
  [
    'p2',
    (item) => {
      return `<SecondLevel  moduleId="${item.id}" />`
    },
  ],
  [
    'p3',
    (item) => {
      return `<ThirdLevel  moduleId="${item.id}" />`
    },
  ],
  [
    'c',
    (item) => {
      return `<contentPage  moduleId="${item.id}" />`
    },
  ],
  [
    'img',
    (item) => {
      return `<contentImage  moduleId="${item.id}" />`
    },
  ],
  [
    'list',
    (item) => {
      return `<contentList  moduleId="${item.id}" />`
    },
  ],
]
