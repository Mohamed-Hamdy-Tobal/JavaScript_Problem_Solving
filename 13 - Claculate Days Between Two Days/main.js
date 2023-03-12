let date_1 = new Date('12/29/2018');
let date_2 = new Date('1/1/2019');

//calculate time difference  
var time_difference = date_2.getTime() - date_1.getTime();  
console.log(time_difference)

//calculate days difference by dividing total milliseconds in a day  
var days_difference = time_difference / (1000 * 60 * 60 * 24);  
    
document.write(`Number of days between dates <br> ${date_1} and <br> ${date_2} are: <br> ${days_difference} days`);
