export const validateName = (input_str) => {
  const re = /^[a-zA-Z]|[א-ת]+(([',. -][a-zA-Z]|[א-ת])?[a-zA-Z]|[א-ת]*)*$/;
  return re.test(input_str)
};