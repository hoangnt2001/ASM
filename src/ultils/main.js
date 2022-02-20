import Navigo from "navigo";
import homePage from "../page/homePage";
import signIn from "../page/signin";
import signUp from "../page/signup";
import admin from "../page/admin/dashboard";
import adminproduct from "../page/admin/product/adminproduct";
import addproduct from "../page/admin/product/addProduct";
import editproduct from "../page/admin/product/editProduct";
import detailProduct from "../page/detailProduct";
import introduct from "../page/introduct";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.print(id);
    if (component.afterprint) await component.afterprint(id);
};
router.on("/admin/*/", () => {}, {
    // before(done) {
    //     if (localStorage.getItem("user")) {
    //         const userId = JSON.parse(localStorage.getItem("user")).user.id;
    //         if (userId === 1) {
    //         // render dựa trên router
    //             done();
    //         } else {
    //             document.location.href = "/";
    //         }
    //     } else {
    //         document.location.href = "/";
    //     }
    // },
});
router.on({
    "/": () => render(homePage),
    "/signin": () => render(signIn),
    "/signup": () => render(signUp),
    "/introduct": () => render(introduct),
    "/admin": () => render(admin),
    "/admin/product": () => render(adminproduct),
    "/products/:id": ({ data }) => render(detailProduct, data.id),
    "/admin/product/add": () => render(addproduct),
    "/admin/product/:id/edit": ({ data }) => render(editproduct, data.id),

});
router.resolve();