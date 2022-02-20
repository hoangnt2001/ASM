import { reprint } from "../ultils";

const header = {
    print() {
        return /* html */`
        <header>
      <div class="bg-slate-200 flex justify-between">
        <div class="mx-8">0355735505</div>
        <div class="flex mx-8">
        ${localStorage.getItem("user") ? `
            <div>
             Xin chao : <span id="accountInfo">Username</span>
              <button id="logout">Logout</button>
            </div>
            ` : `
            <div class="px-3 flex">
            <div class="signIn"><a href="/signin">SIGNIN</a> </div>/
            <div class="signUp"><a href="/signup">SIGNUP</a></div>
          </div>
          `}
          
          <div class="px-3">Giỏ Hàng(0)</div>
        </div>
      </div>
      <div class="bg-white flex justify-between my-auto relative">
        <div class="logo my-4">
          <a href="/"><img
              src="https://mcdn.nhanh.vn/store/662/store_1530769451_686.png"
              class="ml-6" style="max-width: 150px;" alt=""></a>
        </div>
        <ul class="menu flex justify-between my-3">
          <li><a href="/" class="block hover:underline font-bold px-3">QUẦN ÁO</a></li>
          <li><a href="/news" class="block hover:underline font-bold px-3">TIN TỨC</a></li>
          <li><a href="" class="block hover:underline font-bold px-3">GIỚI THIỆU</a></li>
          <li><a href="/introduct" class="block hover:underline font-bold px-3">LIÊN HỆ</a></li>
        </ul>
        <div class="flex flex-end my-7 rounded-full boder-color mr-4 ">
          <div class="block">
            <input type="text" class="input-search mx-4 px-3 " placeholder="Search..." name="" id="">
          </div>
          <div class="block">
            <button class="btn-search pr-3 pt-2"><img
                src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" /></button>
          </div>
        </div>
        
      </div>
      
    </header>
        `;
    },
    afterprint() {
        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        if (localStorage.getItem("user")) {
            const { name } = JSON.parse(localStorage.getItem("user"));
            document.querySelector("#accountInfo").innerHTML = name;
        }
        // Logout
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reprint(header, "#header");
            });
        }
    },
};
export default header;