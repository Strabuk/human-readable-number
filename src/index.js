module.exports = function toReadable (number) {

    var n = number, b = n%10, a = (n-b)/10,  // n = 10*a+b

        A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],

        A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',

               'sixteen', 'seventeen', 'eighteen', 'nineteen'],

        A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty',

              'sixty', 'seventy', 'eighty', 'ninety'];

        A4 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eigth hundred', 'nine hundred',] 
    
    if (n === 0) return ('zero');

    if (n === 10) return A3[n-10];

    if (n > 0 && n < 10) return A1[n-1];

    if (n > 10 && n < 20) return A2[n-11];

    if (n > 20 && n < 100) return A3[b-2]+A1[n-21];

    if (n > 100 && n <1000) return A4[n-100]

     
}
