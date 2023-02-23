window.onload = function () {
  createEvent();
  new EmPgae();
};
function btnAddOnClick() {
  document.getElementById("form").style.visibility = "visible";
  document.getElementById('hd-form').innerHTML="Thêm tài sản"
}
function btnDuplicate() {
  document.getElementById("form").style.visibility = "visible";
  document.getElementById('hd-form').innerHTML="Nhân bản"
  
}
function onCloseForm() {
  document.getElementById("form").style.visibility = "hidden";
  window.location.reload();
}

function btnEdit(){
  document.getElementById("form").style.visibility = "visible";
}
function activeTr(){
  this.style.backgroundColor='#1aa4c8';
}
function onClickSave() {

 
  if(isValidateRequired>0){
    console.log('1');
    document.getElementById("popup-required").style.visibility = "visible";
    document.getElementById("content-popup").innerHTML =
      "Cần nhập hết những trường bắt buộc";
   
  }

 
 amorYearNumber();
  onValidatePrice();
  
}
function createEvent() {
  document
    .getElementById("txtAssetCode")
    .addEventListener("input", onValidateData);
  document.querySelectorAll(".check-input").forEach(function (el) {
    el.addEventListener("blur", onValidateData);
  });
}
var isValidateRequired=0;
function onValidateData() {
  //tạo mảng
  try {
    let input = this;
    const value = input.value;
   
    const listError = [];

    if (!value) {
      this.classList.add("input-error");
      console.log('ok');
      let msg =
        this.previousElementSibling.previousElementSibling.firstElementChild
          .innerHTML;
      this.nextElementSibling.style.visibility = "visible";
      this.nextElementSibling.innerHTML=msg+" không được trống"
      isValidateRequired+=1;
    } else {
      this.classList.remove("input-error");
      popupMsg.style.visibility = "hidden";
      isValidateRequired-=1;
    }
  } catch (error) {}
}
function onValidatePrice() {
  try {
    let popupMsg = document.getElementById("popup-required");
    let price = document.getElementById("price");
    let amorYear = document.getElementById("amorYear");
    if (
      price.value &&
      amorYear.value &&
      parseInt(price.value) < parseInt(amorYear.value)
    ) {
      console.log("ok");
      price.classList.add("input-error");
      amorYear.classList.add("input-error");
      document.getElementById('popup-price').style.visibility='visible';
      document.getElementById("content-popup-p").innerHTML =
        "Giá trị hao mòn năm phải nhỏ hơn nguyên giá";
     
    } else {
      price.classList.remove("input-error");
      amorYear.classList.remove("input-error");
      popupMsg.style.visibility = "hidden";
    }
  } catch (error) {}
}
function amorYearNumber() {
  try {
    let popupMsg = document.getElementById("popup-year");
    let yearNumber = document.getElementById("yearNumber");
    let wearRate = document.getElementById("wearRate");
    if (
      wearRate.value &&
      yearNumber.value &&
      parseFloat(wearRate.value) != 1 / parseInt(yearNumber.value)
    ) {
      
      wearRate.classList.add("input-error");
      document.getElementById("content-popup-y").innerHTML =
        "Tỉ lệ hao mòn phải bằng 1/số năm sử dụng";
      popupMsg.style.visibility = "visible";
    } else {
      wearRate.classList.remove("input-error");
      popupMsg.style.visibility = "hidden";
    }
  } catch (error) {}
}
// window.onclick=function(e){
//   var name=e.target.className
//   var combobox=document.getElementsByClassName('combobox-category')
//   if(name!='hiddenCbb' ||name!='filter' ){
//     combobox[0].style.visibility='hidden'
//   }
   
  
//   }
function comboboxShow(){
  var menu=document.getElementById('combobox-category')
 if(menu.style.visibility==='hidden'){
  menu.style.visibility="visible"
 }else{
  menu.style.visibility="hidden"
 }
 menu.addEventListener('mouseleave',function(){
  menu.style.visibility="hidden"
 })
  
}
function onClickItemCbb(e){
  console.log(e.innerText);
 
  //  let text= this.firstElementChild.innerHTML
  //  alert(text)
   document.getElementById('filter').value=e.innerText;
}


class EmPgae{
  constructor(){
    this.loadData()

  }
  loadData(){
    fetch('https://cukcuk.manhnv.net/api/v1/Employees')
            .then(res => res.json())
            .then(data => {
                for (const item of data) {
                  let value= item.geta
                }

                
            });
  }
}