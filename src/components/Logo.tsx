'use client';

import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import Link from 'next/link';

export interface LogoProps {
  className?: string;
  size?: 'small' | 'normal';
  isWhite?: boolean;
  isWhiteText?: boolean;
  noText?: boolean;
  noLink?: boolean;
}

export function Logo({ className, size, isWhite, isWhiteText, noText, noLink }: LogoProps) {
  let logoSvgSize = '144px';
  let textSize = 'text-2xl';

  if (size === 'small') {
    logoSvgSize = '80px';
    textSize = 'text-sm';
  }

  let color = '#d19b41';
  if (isWhite) {
    color = '#ffffff';
  }

  const onClick: MouseEventHandler = event => {
    if (noLink) {
      event.preventDefault();
    }
  };

  return (
    <Link className={clsx('flex items-center', className)} href="/" rel="ugc" onClick={onClick}>
      <svg
        width={logoSvgSize}
        height={logoSvgSize}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <style>{`.cls-1 { fill: ${color}; }`}</style>
        </defs>
        <title>main-logo</title>
        <path
          className="cls-1"
          d="M331.05,712.64a233.3,233.3,0,1,1,93.8-447.08c32.8,14.37,56.14,30.53,79.21,58l-27.24,35.16C439,313.63,378,290.7,319.31,294.53A185.21,185.21,0,0,0,146.57,491.41c6.66,101.91,95,179.4,196.88,172.74,51-3.33,112.64-33.28,133.3-56.55l26.39,35.08c-19.12,18-37.09,29.71-64.69,44a231.69,231.69,0,0,1-91.86,25.46Q338.79,712.64,331.05,712.64Z"
        ></path>
        <path
          className="cls-1"
          d="M838.72,469.71h71.17C902.72,349.94,805.23,255.06,686,255.06c-123.89,0-224.33,102.43-224.33,228.79S562.1,712.64,686,712.64a219.94,219.94,0,0,0,108.86-28.71c.16-2.4.23-4.7.23-6.74V517.37H686V469.71H795.08V390.3h43.64Z"
        ></path>
        <path className="cls-1" d="M835.29,651.41a229.69,229.69,0,0,0,69.21-134H835.29Z"></path>
      </svg>

      {!noText && (
        <div
          className={clsx(
            'text-left font-black tracking-wider',
            textSize,
            isWhiteText ? 'text-white' : 'text-secondary'
          )}
        >
          <div>
            <span className={isWhite ? 'text-white' : 'text-primary'}>C</span>hrist's
          </div>
          <div>
            <span className={isWhite ? 'text-white' : 'text-primary'}>G</span>lory
          </div>
          <div>
            <span className={isWhite ? 'text-white' : 'text-primary'}>C</span>hurch
          </div>
        </div>
      )}
    </Link>
  );
}
