const currencyCoverter = {
	usd: {
	   inr: 95.10,
	   eur: 0.90,
           yen: 157.76,
	   gbp: 0.75,
	   won: 1326.71
	},
	inr: {
	   usd: 0.011,
	   eur: 0.0094,
           yen: 1.66,
	   gbp: 0.0079,
	   won: 13.95
	},
	eur: {
	   usd: 1.11,
	   inr: 106.01,
           yen: 175.78,
	   gbp: 0.84,
	   won: 1478.09
	},
	yen: {
	   usd: 0.0063,
	   inr: 0.60,
           eur: 0.0057,
	   gbp: 0.0048,
	   won: 8.41
	},
	won: {
	   usd: 0.00075,
	   inr: 0.072,
           eur: 0.00068,
	   gbp: 0.00057,
	   yen: 0.12
	}
	
};
let inputElement = document.getElementById('input');
let amount = inputElement.value === '' ? 0 : +inputElement.value;
let currency = document.getElementById('currencyId');
let convertCurrency = document.getElementById('convertId');
let btn = document.getElementById('convertBtn');

// Save the converted value
let result = 0;
let currencyValue = currency.value;
let convertCurrencyValue = currency.value;

// Currency change Event
currency.addEventListener('change', (event) => {
  currencyValue = currency.value;
  });

// Change the currency which is going convert event
convertCurrency.addEventListener('change', (event) => {
  convertCurrencyValue = convertCurrency.value;
  });

//  input change event
inputElement.addEventListener('change', (event) => {
  amount = inputElement.value === '' ? 0 : +inputElement.value;
  });

// convert button click
btn.addEventListener('click', () => {
  if(amount === 0){
	document.getElementById('msgId').style.display = 'block';
document.getElementById('valueId').value = 0;
	
  }else if(currencyValue == convertCurrencyValue) {
	document.getElementById('msgId').style.display = 'none';
	result = amount;
	document.getElementById('valueId').value = result;

	}
	else{
	document.getElementById('msgId').style.display = 'none';
	result = amount*currencyCoverter[currencyValue][convertCurrencyValue];
  	document.getElementById('valueId').value = result;
	}
}); 