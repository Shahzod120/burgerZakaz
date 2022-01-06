const product = {
  
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcall: 400,
    amount: 0,
    get calsSum() {
      return this.price * this.amount
    },
    get calskacll() {
      return this.kcall * this.amount
    }
   
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcall: 500,
    amount: 0,
    get calsSum() {
      return this.price * this.amount
    },
    get calskacll() {
      return this.kcall * this.amount
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 600,
    amount: 0,
    get calsSum() {
      return this.price * this.amount
    },
    get calskacll() {
      return this.kcall * this.amount
    }
  },
}

let btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
  
  btn[i].addEventListener('click', function () {
    
    // console.log(this.closest('.main__product').getAttribute('id'));
    
    prepare(this)
    
  })
  
}


function prepare(el) {
  
  // console.log(el); /* el - bu btn[i] */
  // parentId plainBurger freshBurger freshCombo
  
  let parent = el.closest('.main__product')
  let parentId = parent.getAttribute("id")
  let num = parent.querySelector('.main__product-num')
  let amount = product[parentId].amount
  let sym = el.getAttribute('data-symbol')
  let price = parent.querySelector('.main__product-price span')
  let kcall = parent.querySelector('.main__product-kcall span')

  // console.log(kcall);
  
  if (sym == '+' && amount < 10) {
    amount++
  } else if (sym == '-' && amount > 0) {
    amount--
  }
  
  num.innerHTML = amount
  product[parentId].amount = amount
  price.innerHTML = product[parentId].calsSum
  kcall.innerHTML = product[parentId].calskacll

}

let lel = document.querySelector('.header__timer-extra')
let x = 0 

function lvl() {
  x++
  lel.innerHTML = `${x}`
  let y = setTimeout(() => {
    lvl()
  }, 50);
  if (x == 100) {
    clearTimeout(y)
  }
}
lvl()

let addCart = document.querySelector('.addCart')
let receipt = document.querySelector('.receipt')
let receiptWindow = document.querySelector('.receipt__window')
let board = receipt.querySelector('.receipt__window-out')
let pay = receipt.querySelector('.receipt__window-btn')


addCart.addEventListener('click' ,()=> {
  receipt.style.display = 'flex'
  setTimeout(() => {
    receipt.style.opacity = '1'
    receiptWindow.style.top = '25%'    
  }, 200);

  let menu = 'Your cart : \n\n'
  let totalPrice = 0
  let totalKcall = 0
  for (const key in product) {
    menu += `${product[key].name} ${product[key].amount} ${product[key].calsSum} ${product[key].calskacll}`
    totalPrice += product[key].calsSum
    totalKcall += product[key].calskacll
  }

  board.innerHTML = `${menu}\nTotal price: ${totalPrice} sum\nTotal Calories: ${totalKcall} calories`


})

pay.addEventListener('click', function() {
  location.reload()
})



let info = document.querySelectorAll('.main__product-info')
let img = document.querySelectorAll('.main__product-img')
let view  = document.querySelector('.view ')
let viewImg  = document.querySelector('.view img')
let icon = document.querySelector('.view__close span')


console.log(img);
for (let i = 0; i < info.length; i++) {
  info[i].addEventListener('click', ()=> {
    view.classList.add('active')
  })
}


icon.addEventListener('click', ()=> {
  view.classList.remove('active')
})


