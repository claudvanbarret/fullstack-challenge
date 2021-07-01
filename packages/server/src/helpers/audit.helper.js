/**
 * @description Returns a professional type in text
 * @param {*} professionalType
 * @returns a string with parameters descriprion and status
 * @example Description: Médico - Status: true
 */
const getProfessionalTypeAsString = (professionalType) => {
  const { description, status } = professionalType;
  return `Description: ${description} - Status: ${status}`;
};

/**
 * @description Returns a professional in text
 * @param {*} professional
 * @returns a string with parameters name, phone, email, status and typeId
 * @example Name: Daniel - Phone: (11) 91111-1111 - Email: danielkaplan@gmail.com - Status: true - TypeId: 1
 */
const getProfessionalAsString = (professional) => {
  const { name, phone, email, status, typeId } = professional;
  return `Name: ${name} - Phone: ${phone} - Email: ${email} - Status: ${status} - TypeId: ${typeId}`;
};

module.exports = {
  getProfessionalTypeAsString,
  getProfessionalAsString
};
