export const getAvatarBgColor = ({ category }) => ({
    work: yellow[700],
    money: green[500],
    todos: pink[500],
  }[category] || blue[500]);