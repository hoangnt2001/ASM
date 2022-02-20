import header from "../components/header";
import footer from "../components/footer";
import showProduct from "../components/showProduct";

const homePage = {
    async print() {
        return /* html */`
        <div class="w-full mx-auto " >
        <header id="header">
          ${header.print()}
        </header>
    <main>
          ${await showProduct.print()}
    </main>
    <footer class="flex justify-around my-6 bg-slate-300">
      ${footer.print()}
    </footer>
  </div>
      `;
    },
    afterprint() {
        header.afterprint();
    },
};
export default homePage;