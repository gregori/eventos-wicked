export function validateName(name) {
  let re = /^[a-zA-Z ]+$/;
  return re.test(name);
}

export function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phoneNumber) {
  /**
   * Formato do número deve ser:
   * +55 (dd) 1234-5678 ou +55 (dd) 12345-6789
   */
  let re = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
  return re.test(String(phoneNumber));
}
