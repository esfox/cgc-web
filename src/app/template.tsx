import { Logo } from '@/components/Logo';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="grid place-items-center py-6">
        <Logo />
      </header>
      {children}
    </>
  );
}
