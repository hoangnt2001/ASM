import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get } from "../API/product";
import header from "../components/header";
import footer from "../components/footer";
import { addToCart } from "../ultils/cart";

const detailProduct = {
    async print(id) {
        const { data } = await get(id);

        return /* html */ `
              <header>
              ${header.print()}
              </header>
              <main class="pt-7 w-7/12 m-auto">
                <div class="grid grid-cols-2 gap-8 m-4">
                    <div >
                        <img src = "${data.img}" class="img">
                    </div>
                    <div class="col-6">
                        <h3 class="font-bold ">Tên sản phẩm:</h3>
                        <div class="">
                        ${data.productname} VND
                        </div>
                        
                        <div class="flex">
                        <p class="font-bold " >Giá sản phẩm: </p>
                            ${data.price} VND
                        </div>
                        <div class="font-bold ">Số lượng:</div>
                        <input  type="number" placeholder="nhập số lượng sản phẩm" class="form-control my-3 w-f" id="quanlity">
                        <p class="font-bold ">Mô tả:</p>
                        <div class="pb-4">
                        ${data.desc}
                        </div>
                        <button id="add_cart" class="btn p-3 px-4  bg-blue-500">Thêm giỏ hàng</button>
                    </div>
                </div>
              </main>
              <footer class="flex justify-around my-6 bg-slate-300">
                ${footer.print()}
              </footer>
          `;
    },
    afterprint(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputQuantity = document.querySelector("#inputQuantity");

        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({ ...data, quantity: +inputQuantity.value }, () => {
                toastr.success("Thêm thành công");
            });
        });
    },
};
export default detailProduct;