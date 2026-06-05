import { createPortal } from 'react-dom';
import React from 'react';

export function ModalPortal({ children }: { children: React.ReactNode }) {
  return createPortal(children, document.body);
}
