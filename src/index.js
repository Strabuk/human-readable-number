module.exports = function toReadable (number) {

    var n = number, b = Math.trunc(n/10), a = (n-b)/10,  // n = 10*a+b

        A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],

        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',

               'sixteen', 'seventeen', 'eighteen', 'nineteen'],

        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',

              'sixty', 'seventy', 'eighty', 'ninety'];

        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eigth hundred', 'nine hundred',] 
    
    if (n === 0) return ('zero');

    if (n === 10) return A3[n-10];

    if (n === 20) return A3[n-19];

    if (n === 30) return A3[n-28];

    if (n === 40) return A3[n-37];

    if (n === 50) return A3[n-46];

    if (n === 60) return A3[n-55];

    if (n === 70) return A3[n-64];

    if (n === 80) return A3[n-73];

    if (n === 90) return A3[n-82];

    if (n === 100) return A4[n-100];

    if (n > 0 && n < 10) return A1[n-1];

    if (n > 10 && n < 20) return A2[n-11];

    if (n > 20 && n < 30) return A3[b-1]+' '+A1[n-21];

    if (n > 30 && n < 40) return A3[b-1]+' '+A1[n-31];

    if (n > 40 && n < 50) return A3[b-1]+' '+A1[n-41];

    if (n > 50 && n < 60) return A3[b-1]+' '+A1[n-51];

    if (n > 60 && n < 70) return A3[b-1]+' '+A1[n-61];

    if (n > 70 && n < 80) return A3[b-1]+' '+A1[n-71];

    if (n > 80 && n < 90) return A3[b-1]+' '+A1[n-81];

    if (n > 90 && n < 100) return A3[b-1]+' '+A1[n-91];

 
    debugger;
    if (n > 100 && n <1000) return A4[n-100]

     
}
