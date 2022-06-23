const resel=document.querySelector(".center");
const numlenel=document.querySelector(".num");
const upel=document.getElementById("upper");
const lowel=document.getElementById("lower");
const numel=document.getElementById("num");
const symbel=document.getElementById("sym");
const btnel=document.querySelector(".submit");
const svgel=document.querySelector(".svg");


svgel.addEventListener('click',()=>{
    const textarea=document.createElement('textarea')
    const password=resel.innerText;

    if(!password)
    {
        return ;
    }
    textarea.value=password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')

})
btnel.addEventListener('click',()=>{
    const len=+numlenel.value;
   const haslower=lowel.checked;
   const hasupper=upel.checked;
   const hasnum=numel.checked;
   const hassym=symbel.checked;

  resel.innerText=generatePassword(haslower,hasnum,hasupper,hassym,len);
})

const randomFun={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
function generatePassword(lower,number,upper,symbol,length)
{
    let generatedPassword=""
    const typescount=lower+upper+number+symbol;
    const types=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])

    if(typescount===0)
    {
        return ""
    }
    for(let i=0;i<length;i+=typescount){
        types.forEach(type =>{
            const funcname=Object.keys(type)[0]
            generatedPassword+=randomFun[funcname]()
        })
    }
    const finalPass=generatedPassword.slice(0,length);
    return finalPass;
}  

function getRandomLower()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper()
{
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomSymbol()
{
    const symbols='!@#$&^%({}[)]?,~./|';
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function getRandomNumber()
{
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}