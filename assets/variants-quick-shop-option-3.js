class VariantQuickShopSelects extends HTMLElement{constructor(){super(),(this.variantSelect=this).item=$(this.variantSelect).closest(".quickshop"),this.variantSelect.classList.contains("has-default")&&(this.updateOptions(),this.updateMasterId(),this.updateMedia(500),this.renderProductAjaxInfo(),this.renderProductInfo()),this.addEventListener("change",this.onVariantChange.bind(this))}onVariantChange(t){this.updateOptions(),this.updateMasterId(),this.currentVariant?(this.updateMedia(200),this.updateVariantInput(),this.renderProductAjaxInfo(),this.renderProductInfo(),this.updateAttribute(!1,!this.currentVariant.available),this.checkQuantityWhenVariantChange()):this.updateAttribute(!0)}updateOptions(){this.options=Array.from(this.querySelectorAll("select"),t=>t.value)}updateMasterId(){this.currentVariant=this.getVariantData().find(t=>!t.options.map((t,e)=>this.options[e]===t).includes(!1))}updateMedia(t){if(this.currentVariant&&this.currentVariant?.featured_media){const e=document.querySelector(`[data-media-id="${this.dataset.product}-${this.currentVariant.featured_media.id}"]`);e&&window.setTimeout(()=>{$(e).trigger("click")},t)}}updateVariantInput(){document.querySelectorAll(`#product-quick-view-form-${this.dataset.product}, #product-quick-view-form-installment-`+this.dataset.product).forEach(t=>{t=t.querySelector('input[name="id"]');t.value=this.currentVariant.id,t.dispatchEvent(new Event("change",{bubbles:!0}))})}renderProductAjaxInfo(){fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&view=quick_view`).then(t=>t.text()).then(t=>{var e="product-quick-view-price-"+this.dataset.product,a="product-price-"+this.dataset.product,t=(new DOMParser).parseFromString(t,"text/html"),e=document.getElementById(e),t=t.getElementById(a);t&&e&&(e.innerHTML=t.innerHTML),document.getElementById("product-quick-view-price-"+this.dataset.product)?.classList.remove("visibility-hidden")})}renderProductInfo(){var t,e,a,u=this.getVariantData().filter(t=>t.available),c=this.currentVariant?.option1,p=this.currentVariant?.option2,h=this.currentVariant?.option3,v=this.getElementsByClassName("product-form__input");$.each(v,(t,e)=>{var a=$(e).data("option-index"),i=$(e).data("product-attribute");switch(a){case 0:$(e).find("[data-header-option]").text(c),"set-select"==i&&$(e).find(".select__select option").each((t,e)=>{e.value==c?$(e).attr("selected","selected"):$(e).removeAttr("selected")});var n=u.filter(t=>t.option1===c);p&&(d=(o=$(v[1])).find(".product-form__radio"),s=o.find(".select__select option"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==n.find(t=>t.option2==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):s.each((t,e)=>{var a=$(e),i=$(e).val();null==n.find(t=>t.option2==i)?a.attr("disabled",!0):a.removeAttr("disabled")})),h&&(d=(o=$(v[2])).find(".product-form__radio"),s=o.find(".select__select option"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==n.find(t=>t.option3==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):electOption.each((t,e)=>{var a=$(e),i=$(e).val();null==n.find(t=>t.option3==i)?a.attr("disabled",!0):a.removeAttr("disabled")}));break;case 1:$(e).find("[data-header-option]").text(p),"set-select"==i&&$(e).find(".select__select option").each((t,e)=>{e.value==p?$(e).attr("selected","selected"):$(e).removeAttr("selected")});var r=u.filter(t=>t.option2===p);c&&(d=(o=$(v[0])).find(".product-form__radio"),s=o.find(".select__select option"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==r.find(t=>t.option1==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):s.each((t,e)=>{var a=$(e),i=$(e).val();null==r.find(t=>t.option1==i)?a.attr("disabled",!0):a.removeAttr("disabled")})),h&&(d=(o=$(v[2])).find(".product-form__radio"),s=o.find(".select__select option"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==r.find(t=>t.option3==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):electOption.each((t,e)=>{var a=$(e),i=$(e).val();null==r.find(t=>t.option3==i)?a.attr("disabled",!0):a.removeAttr("disabled")}));break;case 2:$(e).find("[data-header-option]").text(h),"set-select"==i&&$(e).find(".select__select option").each((t,e)=>{e.value==h?$(e).attr("selected","selected"):$(e).removeAttr("selected")});var s,o,d,l=u.filter(t=>t.option3===h);c&&(d=(o=$(v[0])).find(".product-form__radio"),s=o.find(".select__select option"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==l.find(t=>t.option1==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):s.each((t,e)=>{var a=$(e),i=$(e).val();null==l.find(t=>t.option1==i)?a.attr("disabled",!0):a.removeAttr("disabled")})),p&&(d=(o=$(v[1])).find(".product-form__radio"),"set-rectangle"==i?d.each((t,e)=>{var a=$(e).next(),i=$(e).val();null==l.find(t=>t.option2==i)?a.removeClass("available").addClass("soldout"):a.removeClass("soldout").addClass("available")}):s.each((t,e)=>{var a=$(e),i=$(e).val();null==l.find(t=>t.option2==i)?a.attr("disabled",!0):a.removeAttr("disabled")}))}}),0<this.item.find("[data-sku]").length&&this.item.find("[data-sku] .productView-info-value").text(this.currentVariant.sku),null!=this.currentVariant?.inventory_management&&(t="quick_view_inven_array_"+this.dataset.product,null!=(t=window[t]))&&(t=t[this.currentVariant.id],t=parseInt(t),this.item.find('input[name="quantity"]').attr("data-inventory-quantity",t),0<this.item.find("[data-inventory]").length&&(0<t?this.item.find("[data-inventory] .productView-info-value").text(window.inventory_text.inStock):this.item.find("[data-inventory] .productView-info-value").text(window.inventory_text.outOfStock)),0<this.item.find(".productView-hotStock").length)&&(a=(e=this.item.find(".productView-hotStock")).data("hot-stock"),0<t&&t<=a?(a=window.inventory_text.hotStock.replace("[inventory]",t),e.text(a).show()):e.hide())}updateAttribute(t=!0,e=!0){var a,i=document.getElementById("product-quick-view-form-"+this.dataset.product)?.querySelector('[name="add"]'),n=this.item.find('input[name="quantity"]'),r=this.item.find(".productView-notifyMe"),s=this.item.find(".productView-hotStock"),o=parseInt(n.attr("data-inventory-quantity"));t?(a=window.variantStrings.unavailable,n.attr("disabled",!0),r.slideUp("slow"),i.setAttribute("disabled",!0),i.textContent=a,n.closest("quantity-quick-shop-input").addClass("disabled"),0<s.length&&s.hide()):e?(a=window.variantStrings.soldOut,n.attr("data-price",this.currentVariant?.price),n.attr("disabled",!0),i.setAttribute("disabled",!0),i.textContent=a,n.closest("quantity-quick-shop-input").addClass("disabled"),0<r.length&&(r.find('input[name="halo-notify-product-variant"]').val(this.currentVariant.title),r.find(".notifyMe-text").empty(),r.slideDown("slow"))):(a=window.quick_view_subtotal.show&&!document.body.classList.contains("quickshop-popup-show")?(t=this.currentVariant?.price,s=0,s=n.val()*t,s=Shopify.formatMoney(s,window.money_format),s=extractContent(s),window.quick_view_subtotal.text.replace("[value]",s)):this.currentVariant.available&&this.currentVariant.inventory_management&&0===o?window.variantStrings.preOrder:window.variantStrings.addToCart,n.attr("data-price",this.currentVariant?.price),n.attr("disabled",!1),i.removeAttribute("disabled"),i.textContent=a,n.closest("quantity-quick-shop-input").removeClass("disabled"),0<r.length&&r.slideUp("slow"))}getVariantData(){return this.variantData=this.variantData||JSON.parse(this.querySelector('[type="application/json"]').textContent),this.variantData}checkQuantityWhenVariantChange(){var t=this.closest(".productView-details").querySelector("input.quantity__input"),e=parseInt(t.dataset.inventoryQuantity),a=parseInt(t.value);let i=a;((i=e<a&&0<e?e:a)<1||isNaN(i))&&(i=1),t.value=i;let n;n=null!=this.currentVariant.inventory_management?this.currentVariant.available&&0===e:"no-track-quantity",document.getElementById("product-quick-shop-add-to-cart").dataset.available=n}}customElements.define("variant-quick-shop-selects",VariantQuickShopSelects);class VariantQuickShopRadios extends VariantQuickShopSelects{constructor(){super()}updateOptions(){var t=Array.from(this.querySelectorAll("fieldset"));this.options=t.map(t=>Array.from(t.querySelectorAll("input")).find(t=>t.checked).value)}}customElements.define("variant-quick-shop-radios",VariantQuickShopRadios);class QuantityQuickShopInput extends HTMLElement{constructor(){super(),this.input=this.querySelector("input"),this.input.addEventListener("change",this.onInputChange.bind(this))}onInputChange(t){t.preventDefault();var e,t=this.input.value,a=document.getElementById("product-quick-view-form-"+this.input.dataset.product)?.querySelector('[name="add"]');t<1&&(this.input.value=t=1),window.quick_view_subtotal.show&&(e=0,e=t*this.input.dataset.price,e=Shopify.formatMoney(e,window.money_format),e=extractContent(e),t=window.quick_view_subtotal.text.replace("[value]",e),document.body.classList.contains("quickshop-popup-show")||(a.textContent=t))}}customElements.define("quantity-quick-shop-input",QuantityQuickShopInput);