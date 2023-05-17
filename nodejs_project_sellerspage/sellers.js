
let form=document.getElementById("formid");
let price=document.getElementById("price");
let product=document.getElementById("product");
let category=document.getElementById("category");
let button=document.getElementById("btn");
let options=form.category.options
let userlist1=document.getElementById("ul1");
let userlist2=document.getElementById("ul2");
let userlist3=document.getElementById("ul3");


window.addEventListener("DOMContentLoaded",async()=>{
    try{
        let response=await axios.get('http:localhost:4500/show-details')
        console.log(response.data.allusers);
        console.log(response.data.allusers.length)
        // for(let i=0;i<response.data.allusers.length;i++){
            showbrowser(response.data.allusers)
        // }
        
    }catch(e){
        console.log({Error:e})
        console.log("error dom get method")
    }
})


function showbrowser(show){
let parentNode = userlist2;
    
    for (let i = 0; i < show.length; i++){
        if(show[i].category=="Electronics"){
            parentNode=userlist1
       }else if(show[i].category==="Food Items"){
            parentNode=userlist2
       }else{ 
            parentNode=userlist3
       }
        var childNode=`<li id=${show[i].id} >${show[i].price}-${show[i].product} - ${show[i].category}
        <button onclick="deleteProduct('${show[i].id}','${show[i].category}')">Delete</button>
        </li>`
        parentNode.innerHTML=parentNode.innerHTML+childNode;
    }

}     

//deleting 
function deleteProduct(key,show){
        console.log(show)
        axios.delete(`http://localhost:4500/delete-details/${key}`).then((res)=>{
        console.log("entered delete dom")
        removeScreen(key)
        
        }).catch((e)=>{
            console.log(e)
            console.log("error in delete dom")
        })

    function removeScreen(key){
        let parent=userlist1;
        
        if(show==="Electronics"){
            parent=userlist1
            }else if(show==="Food Items"){
                parent=userlist2
            }else{ 
                parent=userlist3
            }
        child=document.getElementById(key)
        if(child){
            parent.removeChild(child)
            }
        }
        
}

//submitting the data


button.addEventListener("click",async(e)=>{
    try{
        e.preventDefault();

    let obj={
        price: price.value,
        product: product.value,
        category:this.category.value
        };

   let response=await axios.post(`http://localhost:4500/add-details`,obj)
    console.log("post-->",response.data.productname)
    console.log(response)
    // showbrowser(response.data.newuser)
    showuseronScreen(response.data.productname)
    
    function showuseronScreen(show){
        let parentNode =userlist2
            if(show.category==="Electronics"){
                parentNode=userlist1
        }else if(show.category==="Food Items"){
                parentNode=userlist2
        }else{ 
                parentNode=userlist3
        }
        var childNode=`<li id=${show.id} >${show.price}-${show.product} - ${show.category}
            <button onclick="deleteProduct('${show.id}','${show.category}')">Delete</button>
            </li>`
            parentNode.innerHTML=parentNode.innerHTML+childNode;
    }

    price.value="";
    product.value="";
    }catch(e){
            console.error(e);

    }

})






