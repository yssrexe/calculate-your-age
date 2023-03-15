function age() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let date = new Date();
    let get_day = date.getDate();
    let get_month = 1 + date.getMonth();
    let get_year = date.getFullYear();
    
    let all_month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(day > get_day){
        get_day = get_day+all_month[get_month - 1];
        get_day = get_day - 1 ;
    }

    if(month > get_month) {
        get_month = get_month+12;
        get_year = get_year-1;
    }

    let d = get_day-day;
    let m = get_month-month;
    let y = get_year-year;

    document.getElementById('show').innerHTML = ' Your Age is  '+y+ '  Years  ' +m+ '  Months  ' +d+ '  Days  ';
}
