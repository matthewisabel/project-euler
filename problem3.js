// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function largestPrime(num) {
	var largest = 2;
	while(num > largest) {
		if(num % largest == 0) {
			num = num / largest;
		}
		largest++;
	}
	return largest;
}

largestPrime(600851475143);