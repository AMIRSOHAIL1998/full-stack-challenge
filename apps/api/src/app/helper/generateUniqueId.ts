import { v4 as uuidv4 } from 'uuid';

// Function to generate unique id
export const generateUniqueId = (prefix) => {
  const randomString = uuidv4().replace(/-/g, '');
  return `${prefix}_${randomString}`;
};
