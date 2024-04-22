import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function Hymns() {
  return (
    <main className="w-96 pt-[250px] text-center mx-auto">
      <h1>Hymn Search</h1>
      <div className="p-inputgroup mt-6">
        <span className="p-inputgroup-addon">
          <i className="fa fa-magnifying-glass"></i>
        </span>
        <InputText id="search" placeholder="Type the title of a hymn" />
      </div>

      <Button label="Search" className="w-40 mt-6" />
    </main>
  );
}
