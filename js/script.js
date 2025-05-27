// 햄버거 버튼 클릭 이벤트 
  var burger = $('.menu-trigger');

  burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active-' + (index + 1));
    })
  });

  var h = 0;

  $(burger).on("click", function () {
    if (h == 0) {
		  $('.ham-con').animate({
			  left: '0',
			  opacity: 1
		  }, 500);
		  $(this).addClass('active-1');
		  h++;
	  } else if (h == 1) {
		  $('.ham-con').animate({
			  left: '-20%',
			  opacity: 0
		  }, 500);
		  $(this).removeClass('active-1');
		  h--;
	  }
	  $(window).scroll(function() {
		  sct = $(window).scrollTop();
      if(sct>30){
        $('.ham-con').css({
          opacity: 0,
          leftt :'-20%'
        }, 500);
        $(burger).removeClass('active-1');
        h=0;
      }
    });
  })
const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.btnBack');
modalOpen.addEventListener('click', function(){modal.classList.add('on');})
modalClose.addEventListener('click', function(){modal.classList.remove('on');})
const txtBox = document.querySelector('#password');
const btnOk = document.querySelector('#btnOk');
btnOk.addEventListener('click', function() {
  const txt = txtBox.value;
  if (txt === "1234") {
    window.location.href = "AI/chatGPT/portfolio_Ai.html";
  }
  else {
    alert("비밀번호가 틀렸습니다.");
  }
})