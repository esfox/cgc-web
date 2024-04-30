import { Button } from 'primereact/button';

export default function Page() {
  return (
    <div className="h-full grid place-items-center">
      <a href="/admin/hymns">
        <Button
          className="w-32 h-32 flex flex-col justify-center gap-2 text-black"
          raised
          rounded
          text
        >
          <i className="fa fa-music text-2xl !block"></i>
          <h3 className="text-white leading-tight">Manage Hymns</h3>
        </Button>
      </a>
    </div>
  );
}
