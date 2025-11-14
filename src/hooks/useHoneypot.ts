import { useState } from 'react';

/**
 * Hook anti-spam Honeypot
 *
 * Principe : Champ invisible que seuls les bots remplissent
 * Les humains ne le voient pas donc ne le remplissent jamais
 * Si le champ est rempli = BOT détecté
 */
export const useHoneypot = () => {
  const [honeypotValue, setHoneypotValue] = useState('');

  /**
   * Vérifie si la soumission est légitime
   * @returns true si humain, false si bot
   */
  const isHuman = (): boolean => {
    return honeypotValue === '';
  };

  /**
   * Props à passer au champ honeypot
   */
  const honeypotProps = {
    value: honeypotValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setHoneypotValue(e.target.value),
    tabIndex: -1,
    autoComplete: 'off',
    'aria-hidden': true
  } as const;

  /**
   * Nom du champ à utiliser (nom aléatoire pour tromper les bots)
   */
  const fieldName = 'website'; // Les bots cherchent souvent des champs comme "name", "email", donc on utilise "website"

  /**
   * Reset du honeypot après validation
   */
  const reset = () => {
    setHoneypotValue('');
  };

  return {
    honeypotValue,
    honeypotProps,
    fieldName,
    isHuman,
    reset
  };
};
