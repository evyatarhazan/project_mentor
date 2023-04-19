export const validateName = (input_str) => {
  const re = /^[a-zA-Z]|[א-ת]+(([',. -][a-zA-Z]|[א-ת])?[a-zA-Z]|[א-ת]*)*$/;
  return re.test(input_str)
};


export const isValidIsraeliID = (idNumber) => {
  let id = String(idNumber).trim();
  if (id.length > 9 || id.length < 5 || isNaN(id)) return false;

  // Pad string with zeros up to 9 digits
  id = id.length < 9 ? ("00000000" + id).slice(-9) : id;

  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  );
};


export const validatePhoneNumber = (phoneNumber) => {
  console.log('sss', phoneNumber)
  const re = /^(?:\+972|972|0)(?:-)?(?:[23489]|5[023458]|77|81)(?:-)?(?:\d{7})$/;
  return re.test(phoneNumber);
};


