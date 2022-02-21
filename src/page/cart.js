import header from "../components/header";
import footer from "../components/footer";
import { getLocalStorage, reprint } from "../ultils";
import toastr from "toastr";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../ultils/cart";

const CartPage = {
    async print() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = getLocalStorage("cart");
        }
        return /* html */ `
            <header class="mb-7">
                ${await header.print()}
            </header>
                <div class="w-7/12 m-auto">
                    <div class="h-full flex flex-col bg-white shadow-xl ">
                        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                            <div class="flex items-start justify-between">
                                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                <div class="ml-3 h-7 flex items-center">
                                </div>
                            </div>

                            <div class="mt-8">
                                <div class="flow-root">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                    
                                    
                                ${cart.map((item) => /* html */`
                                
                            <li class="py-6 flex">
                                        <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                            <img src="${item.img}" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="w-full h-full object-center object-cover">
                                        </div>
                                        <div class="ml-4 flex-1 flex flex-col">
                                            <div class="mx-5">
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                    <a href="#">${item.productname}</a>
                                                    </h3>
                                                </div>
                                                <div class="flex mt-2">
                                                    <button class="btn bg-red-500 w-5 btn-decrease " data-id=${item.id}>-</button>
                                                    <p class="mt-1 text-sm text-gray-500 w-5 text-center" >${item.quantity}</p>
                                                    <button class="btn bg-blue-500 w-5 btn-increase " data-id=${item.id}>+</button>
                                                </div>                                  
                                            </div>
                                            <div class="flex-1 flex items-end justify-between text-xl">
                                                <p class="items-end flex-2 mx-5">${item.price} VND</p>

                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500 text-sm btn-remove">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


            `).join("")}   
                                </ul>
                                </div>
                            </div>
                        </div>

                        <div class= "w-7/12 m-auto border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div class="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$262.00</p>
                            </div>
                            <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div class="mt-6">
                                <a href="#" class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
                            </div>
                            <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                                <p>     
                                or <button type="button" class="text-indigo-600 font-medium hover:text-indigo-500"><a href="/"> Continue Shopping</a><span aria-hidden="true"> &rarr;</span></button>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <footer class="flex justify-around my-6 bg-slate-300">
                ${footer.print()}
            </footer>

        `;
    },
    afterprint() {
        const btns = document.querySelectorAll(".btn");
        const btnRemove = document.querySelector(".btn-remove");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            console.log("id:",id);
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reprint(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reprint(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reprint(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
        btnRemove.forEach((btnRemove)=>{
            const { id } = btnRemove.dataset;
            btnRemove.addEventListener("click", () =>{
                removeItemInCart(id, () => {
                    reprint(CartPage, "#app");
                    toastr.success("Xóa sản phẩm thành công");
                });
            })
        })
    },
};
export default CartPage;