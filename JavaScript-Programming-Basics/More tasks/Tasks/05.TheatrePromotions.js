function theatre(day, age) {
    
    if (age >= 0 && age <= 18) {
        if (day === 'Weekday') {
            return '12$';
        } else if (day === 'Weekend') {
            return '15$';
        } else if (day === 'Holiday') {
            return '5$';
        }
    } else if (age > 18 && age <= 64) {
        if (day === 'Weekday') {
            return '18$';
        } else if (day === 'Weekend') {
            return '20$';
        } else if (day === 'Holiday') {
            return '12$';
        }
    } else if (age > 64 && age <= 122) {
        if (day === 'Weekday') {
            return '12$';
        } else if (day === 'Weekend') {
            return '15$';
        } else if (day === 'Holiday') {
            return '10$';
        }
    } else {
        return 'Error!';
    }
}
theatre ("Weekday", "46");