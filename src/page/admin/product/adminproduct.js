import toastr from "toastr";
import { getAll, remove } from "../../../API/product";
import headerAdmin from "../../../components/admin/headerAdmin";
import { reprint } from "../../../ultils";

const adminproduct = {
    async print() {
        const { data } = await getAll();
        return /* HTML */ `
        <div class="min-h-full">
            ${headerAdmin.print()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                    >
                    Quản lý tin tức
                    </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/product/add" class="sm:ml-3">
                        <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Thêm mới
                        </button>
                    </a>
                </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" id="showproduct">
                <!-- Replace with your content -->
                <div class="px-4 py-6 sm:px-0">
                    <table class="w-f">
                        <thead class="w-f">
                            <tr >
                              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                              <th class="px-6 py-3 max-w-xs text-left text-xs font-medium text-gray-500 uppercase tracking-wider">desc</th>

                              
                              <th colspan="2">ACCTION</th>
                            </tr>
                        </thead>
                        <tbody class="w-f">
                        ${data.map((product, index) => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${index + 1}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            ${product.productname}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-500">
                                            <img src="${product.img}" width="50" class="py-4 mx-auto" alt="">
                                        </div>
                                    </td>
                                    
                                    <td class="text-sm text-gray-500" style="">
                                        ${product.price}
                                    </td>
                                    <td class="text-sm text-gray-500" style="">
                                        ${product.desc}
                                    </td>

                                    <td>
                                        <a href="/admin/product/${product.id}/edit">Edit</a>
                                        <button data-id="${product.id}" class="btn btn-remove">Xóa</button>
                                    </td>
                                </tr>
                            `).join("")}
                        
                            <tr>
                        </tbody>
                    </table>
                </div>
                <!-- /End replace -->
            </div>
            </main>
        </div>
        `;
    },
    afterprint() {
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll(".btn");
        // tạo vòng lặp cho nodelist button
        buttons.forEach((btn) => {
            // lấy ID từ thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Ban co muon xoa bai viet nay khong?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        toastr.success("Da xoa thanh cong");
                        reprint(adminproduct, "#app");
                    });
                }
            });
        });
    },
};
export default adminproduct;