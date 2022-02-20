const detailsProduct = {
    print() {
        return /* html */`
        <div class="product-img m-5">
                <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/10067/ps/20220106/6ebee5cade8913d74a98.jpg" alt="">
            </div>
            <div class="view-product m-5 content-left">
              <div class="product-name py-4">
                <h3 class="font-bold text-xl ">Áo dạ dáng dài cổ K đai tay 3 khuy TCA232</h3>
              </div>
              <hr>
              <div class="product-price py-4">
                <span class="font-bold">850,000₫</span>
              </div>
              <div class="buttons_added">
                <button class="minus is-form" value="-">-</button>
                <input aria-label="quantity" class="input-qty" min="1" name="" type="number" value="1">
                  <button class="plus is-form" value="+">+</button>
              </div>
              <!-- số lượng -->
              <script>//<![CDATA[
                $('input.input-qty').each(function() {
                  var $this = $(this),
                    qty = $this.parent().find('.is-form'),
                    min = Number($this.attr('min')),
                    max = Number($this.attr('max'))
                  if (min == 0) {
                    var d = 0
                  } else d = min
                  $(qty).on('click', function() {
                    if ($(this).hasClass('minus')) {
                      if (d > min) d += -1
                    } else if ($(this).hasClass('plus')) {
                      var x = Number($this.val()) + 1
                      if (x <= max) d += 1
                    }
                    $this.attr('value', d).val(d)
                  })
                })
                //]]></script>
            </div>
        `;
    },
};
export default detailsProduct;