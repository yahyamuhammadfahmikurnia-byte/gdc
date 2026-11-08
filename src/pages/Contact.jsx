import ContactLetsConnect from "../components/contactletsconnect.jsx";
import ContactCategories from "../components/contactcategories.jsx";
import Contactbefore from "../components/BeforeYouSend.jsx";
import Sosmed from "../components/bringyourcuriosity copy.jsx"
export default function Contact() {
  return (
    <main className="w-full">
      <section className="relative">
        <ContactLetsConnect />
      </section>

      <section className="relative mt-40">
        <ContactCategories />
      </section>
      <section>
        <Contactbefore />
      </section>

      <section className="relative mt-60">
    <Sosmed />
      </section>

    </main>
  );
}