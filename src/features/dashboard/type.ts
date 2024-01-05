import React from 'react';

export interface IDrawerValue{
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IDrawerProps {
  children: React.ReactNode;
}