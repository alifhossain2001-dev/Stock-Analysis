function q04(){	
	const results = document.querySelectorAll('.p2.cheap');		
	return {
		question: 4,
		results, 
        size: results.length
       
	}	
}
function q05(){	
	const results =document.querySelectorAll('.p2.expensive') ;		
	return {
		question: 5,
		results, size: results.length
	}	
}
function q06(){	
	const results = document.querySelectorAll('span.p2.cheap');		
	return {
		question: 6,
		results, 
        size: results.length
       
	}	
}
function q07(){
    const changeName= document.getElementById("developer");
    changeName.innerHTML="Hossain,Mohammad";
    return{
        question: 7,
        updated:changeName.innerHTML
    }
}
function q08(){
    const items= document.querySelectorAll('span.p2');
    const results=[];
    items.forEach(item =>{
        const price=Number(item.getAttribute('data-price'));
        if(price>175){results.push(item);}
    } );
    return{
        question:8,results,
        size:results.length
    }
}
function q09(){
    document.title="Stock Market";
}
function q10(){	
const results =document.querySelectorAll('span.p2.expensive') ;		
	return {
		question: 10,
		results, size: results.length
	}}
function q11(){
    const items= document.querySelectorAll('span.p2');
    const results=[];
    items.forEach(item =>{
    const price=Number(item.getAttribute('data-price'));
    if(price>50){results.push(item);}
    } );
    return{
        question:11,results,
        size:results.length
    }
}
function q12(){
    const items = document.querySelectorAll('span.p2.expensive');
    let total = 0;

    items.forEach(item => {
        total += Number(item.getAttribute('data-price'));
    });

    const average = items.length > 0 ? total / items.length : 0;

    return {
        question: 12,
        average: average
    };
}
