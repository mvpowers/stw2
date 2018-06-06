const jwtDecode = require('jwt-decode');

export const uniqueArr = (value, index, self) => self.indexOf(value) === index;

export const isMemberPending = (token, memberArr) => {
  const { id } = jwtDecode(token);
  const memberObj = memberArr.find(member => member.id === id);
  return memberObj.pending;
};
