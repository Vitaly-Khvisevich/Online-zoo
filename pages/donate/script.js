const another_amount = document.getElementsByClassName('another-amount');
const five_thousand = document.getElementsByClassName('one-pic');
const two_thousand = document.getElementsByClassName('two-pic');
const one_thousand = document.getElementsByClassName('three-pic');
const five_hundred = document.getElementsByClassName('four-pic');
const two_hundred_fifty = document.getElementsByClassName('five-pic');
const one_hundred = document.getElementsByClassName('six-pic');
const fifty = document.getElementsByClassName('seven-pic');
const twenty_five = document.getElementsByClassName('eaght-pic');
const pic_all = document.querySelectorAll('.ellipse-pic');

another_amount[0].value = '100';
one_hundred[0].style.opacity = '1';

function clean_active(){
  pic_all.forEach(element => {
    element.style.opacity = '0';
  });
}

function find_elem(myclass){
  if(myclass === 'one-pic') another_amount[0].value = '5000';
  else if(myclass === 'two-pic') another_amount[0].value = '2000';
  else if(myclass === 'three-pic') another_amount[0].value = '1000';
  else if(myclass === 'four-pic') another_amount[0].value = '500';
  else if(myclass === 'five-pic') another_amount[0].value = '250';
  else if(myclass === 'six-pic') another_amount[0].value = '100';
  else if(myclass === 'seven-pic') another_amount[0].value = '50';
  else if(myclass === 'eaght-pic') another_amount[0].value = '25';
}

  pic_all.forEach(element => {
    element.addEventListener('mousedown', () => {
      clean_active();
      element.style.opacity = '1';
      find_elem(element.classList[1]);
    });
  });


another_amount[0].addEventListener('input', e => {
  if (!isNaN(another_amount[0].value)){
    if ((another_amount[0].value)<=0) another_amount[0].value = '';
    else {
      if((another_amount[0].value.length)>=5) another_amount[0].value = another_amount[0].value.substr(0, 4);
      clean_active();
      if (another_amount[0].value === '5000') five_thousand[0].style.opacity = '1';
      else if (another_amount[0].value === '2000') two_thousand[0].style.opacity = '1';
      else if (another_amount[0].value === '1000') one_thousand[0].style.opacity = '1';
      else if (another_amount[0].value === '500') five_hundred[0].style.opacity = '1';
      else if (another_amount[0].value === '250') two_hundred_fifty[0].style.opacity = '1';
      else if (another_amount[0].value === '100') one_hundred[0].style.opacity = '1';
      else if (another_amount[0].value === '50') fifty[0].style.opacity = '1';
      else if (another_amount[0].value === '25') twenty_five[0].style.opacity = '1';
    }
  }

});
