import axios from "axios";
import { edit, get } from "../../../API/product";
import headerAdmin from "../../../components/admin/headerAdmin";

const editproduct = {
    async print(id) {
        const { data } = await get(id);
        return /* html */`
        ${headerAdmin.print()}
        <main>
            <div class="w-9/12 m-auto">
                <h3 class="font-bold text-2xl text-center pb-7">Cập nhật</h3>
                <form action="" class="m-auto p-9 boder w-9/12 " id = "editproduct">
                    <div class="block ">
                        <label for="Image" class="block font-bold my-4">Image</label>
                        <input type="file" class="" id="img-product" value="${data.img}" />
                    </div>
                    <div class="block ">
                        <label for="productName" class=" block font-bold my-4">ProductName</label>
                        <input type="text" class="boder"name="" id="productName" value="${data.productname}">
                    </div>
                    <div class="block ">
                        <label for="desc" class="block font-bold my-4">Price </label>
                        <input type="number" class="boder" name="" id="price" value="${data.price}">
                    </div>
                    <div class="block ">
                        <label for="desc" class=" block font-bold my-4">Description </label>
                        <textarea name="" id="desc" class="boder" cols="35" rows="7" >${data.desc}</textarea>
                    </div>
                    <div>
                        <button class="bg-blue-500 text-white mt-5 text-center w-f px-7 py-2 w-f btn"  id="">Cập nhật</button>
                    </div>
                </form>
        </main>
        `;
    },
    afterprint(id) {
        const formedit = document.querySelector("#editproduct");
        const imgPost = document.querySelector("#img-product");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpt-sofwave/image/upload";
        const CLOUDINARY_PRESET = "ol1f94yn";
        formedit.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            edit({
                id,
                productname: document.querySelector("#productName").value,
                img: data.url,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
            });
            document.location.href = "/admin/product";
        });
    },
};
export default editproduct;