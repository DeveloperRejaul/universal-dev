// Function to generate unique random strings as IDs
const generateUniqueID = (length = 8) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset[randomIndex];
  }
  return id;
};

// Generating drawerItems with unique random IDs
export const drawerItems = [
  {
    id: generateUniqueID(),
    title: 'Winter Collection',
    items: [
      { id: generateUniqueID(), label: 'Item 1' },
      { id: generateUniqueID(), label: 'Item 2' },
      { id: generateUniqueID(), label: 'Item 3' },
      { id: generateUniqueID(), label: 'Item 4' },
    ],
  },
  {
    id: generateUniqueID(),
    title: 'Winter Collection',
    items: [
      { id: generateUniqueID(), label: 'Item 1' },
      { id: generateUniqueID(), label: 'Item 2' },
      { id: generateUniqueID(), label: 'Item 3' },
      { id: generateUniqueID(), label: 'Item 4' },
    ],
  }
];


