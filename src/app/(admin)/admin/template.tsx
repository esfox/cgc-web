import { Logo } from '@/components/Logo';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full grid grid-rows-[auto_1fr]">
      <header className="w-full grid grid-cols-[auto_1fr] shadow-lg">
        <div className="logo-section h-[75px] flex items-center justify-between bg-secondary px-4 py-2">
          <div className="flex items-center">
            <a href="/admin">
              <Logo size="small" isWhiteText noText noLink />
            </a>
            <h3 className="text-white leading-snug !text-white text-lg ml-2">Admin</h3>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
