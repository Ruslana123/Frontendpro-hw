function pow (num, degree) {
    if(num === 0) {
        return 0;
    }
    if(num === 1 || degree === 0) {
        return 1;

    }
    if(degree > 1) {
        return num * pow(num, degree - 1);
    }
    else return num

}


console.log(pow(8, 3));