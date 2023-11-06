const login=document.getElementById('login')
const loginArea=document.getElementById('login-area')
const tranArea=document.getElementById('transaction-area')

login.addEventListener('click',function(){
    loginArea.style.display='none'
    tranArea.style.display='block'
})

const addDeposit=document.getElementById('addDeposit')
const depositAmount=document.getElementById('depositAmount')
const currentDeposit=document.getElementById('currentDeposit')
const currentBalance=document.getElementById('currentBalance')
console.log(addDeposit);

addDeposit.addEventListener('click',function(){
   
    const totalCurrentDeposit=Number(depositAmount.value)+Number(currentDeposit.innerText)
    const totalCurrentBalance=Number(depositAmount.value)+Number(currentBalance.innerText)
    currentDeposit.innerText=totalCurrentDeposit;
    currentBalance.innerText=totalCurrentBalance
    
})

const addWithdraw=document.getElementById('addWithdraw')
const withdrawAmount=document.getElementById('withdrawAmount')
const currentWithdraw=document.getElementById('currentWithdraw')
console.log(currentWithdraw);



addWithdraw.addEventListener('click',function(){
   
    const totalCurrentWithdraw=Number(withdrawAmount.value)+Number(currentWithdraw.innerText)
    const totalCurrentBalance=Number(currentBalance.innerText)-Number(withdrawAmount.value)
    currentWithdraw.innerText=totalCurrentWithdraw
    currentBalance.innerText=totalCurrentBalance
    
})

