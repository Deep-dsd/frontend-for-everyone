import { Profile } from '@/types';

export const generateInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

export const defaultProfile: Profile = {
  name: "Walter White",
  location: "New Mexico, ABQ",
  email: "walter52@gmail.com",
  bio: "Passionate about creating user-friendly web applications with modern technologies. 5+ years of experience in JavaScript, React, and Node.js. Love solving complex problems and contributing to open-source projects."
};