import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="grid grid-cols-2 items-center max-w-7xl m-8 gap-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="h3">Servicing Loch Erin Residents</h3>
          <h1 className="h1">Title about how I clean stuff</h1>
          <p className="py-7">
            Paragraph about how I clean stuff. Paragraph about how asdf asdfas
            dfI cleana sd as stuff. sasdfPara graph about ho w I clean stuff.
            Paragraph abosdf gut howsdfg I clean stuff. Paragraphsdfg about how
            asdf asdfI clean stuff. Paragraph abasdf asdfout how I clean stuff.
          </p>
          <div className="flex gap-2">
            <Link className="btn btn-blue">Call to Action</Link>
            <Link className="btn btn-green">Call to Action</Link>
          </div>
        </div>
        <img src="src/assets/vacuum-color.png"></img>
      </section>

      <section className="h-50 bg-navy w-full"></section>
    </>
  );
}

export default HomePage;
