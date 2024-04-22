import { Logo } from '@/components/Logo';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <img
        src="/images/hero.jpg"
        className="w-full h-[300px] object-cover md:h-[500px] lg:h-[600px]"
        alt="hero image"
      />
      <main className="max-w-2xl mx-auto px-8 md:px-0">
        <section>
          <h1 className="text-center mt-10">Welcome to Our Church</h1>
          <p className="text-lg leading-loose mt-6">
            Lorem ipsum dolor rutrum porttitor est, a iaculis purus hendrerit eu. Suspendisse
            potenti. Quisque nunc eros, tincidunt et enim eu, ultrices posuere nunc. Morbi sodales
            sem eu dolor fermentum, quis maximus ligula ultrices. Sed lobortis pretium lacinia.
            Praesent auctor non dui sit amet iaculis. Praesent ac eleifend elit, sed eleifend elit.
            Donec purus velit, cursus eget mauris a, sagittis lacinia libero. Vestibulum justo
            libero, blandit ut libero sit amet, posuere porttitor neque. Nam in pellentesque risus,
            nec sollicitudin lacus.
          </p>
        </section>

        <hr className="my-8" />

        <section className="max-w-sm mx-auto">
          <h1>Lord's Day Schedule</h1>
          <div className="w-full divide-y mt-6">
            <div className="grid gap-1.5 py-2">
              <h3>9:00 AM</h3>
              <p className="leading-loose">Morning Service</p>
            </div>
            <div className="grid gap-1.5 py-2">
              <h3>11:00 AM</h3>
              <p className="leading-loose">Adults' Sunday School</p>
            </div>
            <div className="grid gap-1.5 py-2">
              <h3>2:00 PM</h3>
              <p className="leading-loose">Kids' Sunday School</p>
            </div>
            <div className="grid gap-1.5 py-2">
              <h3>3:00 PM</h3>
              <p className="leading-loose">Afternoon Service</p>
            </div>
          </div>
        </section>

        <hr className="my-8" />

        <section className="max-w-md mx-auto">
          <h1>Contact Us</h1>
          <form className="mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <InputText id="email" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <InputText id="name" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <InputTextarea id="message" rows={4} />
            </div>

            <Button label="Submit" className="w-full mt-6" />
          </form>
        </section>
      </main>
      <footer className="bg-secondary text-white p-8 pb-5 mt-12">
        <div className="grid md:place-items-center gap-6 md:grid-cols-[auto_1fr_auto] md:gap-12">
          <Logo className="mx-auto md:mx-0" size="small" isWhiteText />
          <em className="py-2">
            <small>
              "to Him be glory in the church and in Christ Jesus throughout all generations, forever
              and ever. Amen."
              <br />
              <strong> Ephesians 3:21 </strong>
            </small>
          </em>
          <div className="flex-1 gap-2">
            <p className="text-sm md:text-end">
              2F 9 E. Rodriguez St., Corner Lakandula
              <br /> Parang, Marikina, 1809
              <br /> Metro Manila, Philippines
            </p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-1">
          <small className="text-xs mt-6">©{currentYear} Christ's Glory Church</small>
          <div className="flex justify-center items-center gap-1">
            <a href="https://facebook.com/christsglorychurch" rel="ugc" target="_blank">
              <Button
                className="text-white w-10 h-10"
                icon="fab fa-facebook fa-xl"
                rounded
                text
              ></Button>
            </a>
            <a href="https://instagram.com/christsglorychurch" rel="ugc" target="_blank">
              <Button
                className="text-white w-10 h-10"
                icon="fab fa-instagram fa-xl"
                rounded
                text
              ></Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// <!-- <div className="ml-2 mt-1"> -->
// <!--   <i className="fa fa-phone"></i> -->
// <!--   <small className="ml-1">+639228702402</small> -->
// <!-- </div> -->
