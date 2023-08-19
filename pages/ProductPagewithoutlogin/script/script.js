// creating variables for targeting classes and id's-------------------------------



var priceFilter=document.getElementsByClassName('priceFilter')[0];
var colorFilter=document.getElementsByClassName('colorFilter')[0];
var sleeveFilter=document.getElementsByClassName('sleeveFilter')[0];
var fabricFilter=document.getElementsByClassName('fabricFilter')[0];
var neckFilter=document.getElementsByClassName('neckFilter')[0];
var patternFilter=document.getElementsByClassName('patternFilter')[0];
var fitFilter=document.getElementsByClassName('fitFilter')[0];
var sizeFilter=document.getElementsByClassName('sizeFilter')[0];
var discountFilter=document.getElementsByClassName('discountFilter')[0];
var mobileVersionContainer=document.getElementsByClassName('mobileVersionContainer')[0];
var filterHeading = document.getElementsByClassName('filterHeadingMobile')[0];
const back=document.getElementById('back');
const clearAll= document.getElementsByClassName('clearAllMobile')[0];
const containerHeading=document.getElementsByClassName('containerHeading')[0];
const similarProductBox= document.getElementsByClassName('similarProductBox');
 
 

// Adding Event Listeners in Jquery for view More and View Less buttons in the page-----------------



$(document).ready(function() {
    var index=0 ;
    const viewMore = document.getElementsByClassName('viewMore');
    const viewLess = document.getElementsByClassName('viewLess');
$(".viewMore").click(function() {
index = $(".viewMore").index(this);
viewMore[index].style.display='none';
document.getElementsByClassName('filterBox')[index].style.height='auto';
  
   viewLess[index].style.display='block';
});
$(".viewLess").click(function() {
index = $(".viewLess").index(this);
viewLess[index].style.display='none';
document.getElementsByClassName('filterBox')[index].style.height='158px';
viewMore[index].style.display='block';
   
console.log(index);
});


});


// Adding Event Listener on Filter button for filter---------------

filterHeading.addEventListener('click',() =>{
    mobileVersionContainer.style.display='flex';
    back.style.display='block';
    clearAll.style.display='block';
    document.getElementById('html').style.overflow='hidden';
    containerHeading.style.width='94%';
})


// Adding Event Listener on back button to exit filter---------------



back.addEventListener('click',() =>{
    mobileVersionContainer.style.display='none';
    back.style.display='none';
    clearAll.style.display='none';
    document.getElementById('html').style.overflow='auto';
    containerHeading.style.width='92%';
})
 

// Adding event Listener on the required filter to show on screen--------------------


// Adding event Listener on price Filter--------------



priceFilter.addEventListener('click',() =>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='white';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
 
   
});


// Adding event Listener on color Filter--------------



colorFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';

    // adding background color to the filter button----


    priceFilter.style.background='initial';
    colorFilter.style.background='white';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
   
})

// Adding event Listener on sleeve Filter--------------


sleeveFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='white';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
   
})


// Adding event Listener on fabric Filter--------------


fabricFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='white';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
   
})

// Adding event Listener on neck Filter--------------


neckFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='white';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
   
})


// Adding event Listener on pattern Filter--------------



patternFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='white';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
   
})


// Adding event Listener on  fit Filter--------------



fitFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='white';
    sizeFilter.style.background='initial';
    discountFilter.style.background='initial';
})

// Adding event Listener on size Filter--------------

sizeFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='block';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='none';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='white';
    discountFilter.style.background='initial';
   
})

// Adding event Listener on discount Filter--------------


discountFilter.addEventListener('click',()=>{
    document.getElementsByClassName('priceFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('colorFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sleeveFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fabricFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('neckFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('patternFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('fitFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('sizeFilterCheckboxes')[0].style.display='none';
    document.getElementsByClassName('discountFilterCheckboxes')[0].style.display='block';
    priceFilter.style.background='initial';
    colorFilter.style.background='initial';
    sleeveFilter.style.background='initial';
    fabricFilter.style.background='initial';
    neckFilter.style.background='initial';
    patternFilter.style.background='initial';
    fitFilter.style.background='initial';
    sizeFilter.style.background='initial';
    discountFilter.style.background='white';
   
})


Array.from(document.getElementsByClassName('similarProductBox')).forEach((element)=>{

     element.addEventListener('click',()=>{
                    location.href="../productDesc/productDescription.html";
     })
})
