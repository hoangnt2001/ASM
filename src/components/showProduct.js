import { getAll } from "../API/product";

const showProduct = {
    async print() {
        const { data } = await getAll();

        return /* html */ `
        <div class="banner">
          <div>
          <img src="https://mcdn.nhanh.vn/store/662/bn/99Cover_facebook.png" />
          </div>
        </div>
        <div class="content-1">
          <h3 class="line max-w-7xl mx-auto  py-7">
            <span class="line-text text-2xl font-bold">Sản phẩm mới</span>
          </h3>
          <div class="flex justify-between gap-5 m-auto grid grid-cols-4">
          ${data.map((product) => /* html */ `
            <div class="border p-3 w-75">
              <img class="w-max m-auto" src="${product.img}"  alt="" />
              <h3><a href="/products/${product.id}" class="block text-center font-bold text-orange-500 py-2 ">${product.productname}</a></h3>
              <p class="py-2 font-sans text-center">${product.price} VND</p>
            </div>
          `).join("")}
        </div>
        `;
    },
};
export default showProduct;