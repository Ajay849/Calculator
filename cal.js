var a1=document.getElementById("a1")
var a2=document.getElementById("a2")
var a3=document.getElementById("a3")
var a4=document.getElementById("a4")
var a5=document.getElementById("a5")
var a6=document.getElementById("a6")
var a7=document.getElementById("a7")
var a8=document.getElementById("a8")
var a9=document.getElementById("a9")
var a10=document.getElementById("a10")
var a11=document.getElementById("a11")
var a12=document.getElementById("a12")
var add=document.getElementById("add")
var sub=document.getElementById("sub")
var mul=document.getElementById("mul")
var div=document.getElementById("div")
var mod=document.getElementById("mod")
var sum=document.getElementById("sum")
var del=document.getElementById("del")
var clear=document.getElementById("clear")

        a1.addEventListener("click",()=>
        {
            input.value += a1.value
        })
        a2.addEventListener("click",()=>
        {
            input.value += a2.value
        })
        a3.addEventListener("click",()=>
        {
            input.value += a3.value
        })
        a4.addEventListener("click",()=>
        {
            input.value += a4.value
        })
        a5.addEventListener("click",()=>
        {
            input.value += a5.value
        })
        a6.addEventListener("click",()=>
        {
            input.value += a6.value
        })
        a7.addEventListener("click",()=>
        {
            input.value += a7.value
        })
        a8.addEventListener("click",()=>
        {
            input.value += a8.value
        })
        a9.addEventListener("click",()=>
        {
            input.value += a9.value
        })
        a10.addEventListener("click",()=>
        {
            input.value += a10.value
        })
        a11.addEventListener("click",()=>
        {
            input.value += a11.value
        })
        a12.addEventListener("click",()=>
        {
            input.value += a12.value
        })
        add.addEventListener("click",()=>
        {
            input.value += add.value
        })
        sub.addEventListener("click",()=>
        {
            input.value += sub.value
        })
        mul.addEventListener("click",()=>
        {
            input.value += mul.value
        })
        div.addEventListener("click",()=>
        {
            input.value += div.value
        })
        mod.addEventListener("click",()=>
        {
            input.value += mod.value
        })
        sum.addEventListener("click",()=>
        {
            input.value =eval(input.value)
        })
        del.addEventListener("click",()=>
        {
            var s=input.value .slice(0,-1)
            input.value=s
            console.log(s);     
        })
        clear.addEventListener("click",()=>
        {
            input.value=" ";
        })