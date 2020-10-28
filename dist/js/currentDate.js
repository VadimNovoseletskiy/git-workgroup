
function mydate() {
	temp_date = new Date();
	day = temp_date.getDate();
	month = temp_date.getMonth() + 1;
	year = temp_date.getFullYear();
	if (day < 10) {
	day = "0" + day;
	}
	if (month <10) {
	month = "0" + month;
	}
	document.getElementById('dateFolder').innerHTML ="Актуальные вакансии на" +" " +day + "." + month + "." + year;
}

function myDateMounth() {
	var d = new Date();
	var month=new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");

	day=d.getDate();
	myMonth=month[d.getMonth()];

	document.getElementById('dateMounth').innerHTML =" " +day + " " + myMonth + " ";

}