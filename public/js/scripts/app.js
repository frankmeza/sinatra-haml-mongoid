
$(document).ready(function() {
  // functions.someAjax();
  // functions.hideH1OnClick();
  // functions.postAjax();
  $('#button').on('click', function() {
    functions.inputAjax();
  })
});

const ROOT = 'https://jsonplaceholder.typicode.com';
let firstName = $('#first_name');

functions = {
  inputAjax: function() {
    let typed= $('#input1').val();

    options = {
      url: 'http://localhost:9292/name',
      method: 'POST',
      data: {'name': typed},
      dataType: 'application/json',
    }

    debugger;
    let theCall = $.ajax(options)
      .done(function(options, textStatus) {
        console.log(options);
        console.log('next thing', textStatus);
      })
      .fail(function(failty) {
        console.log('fail', failty);
      })
      .then(function(data) {
        console.log('then', data)
      });

    // $('#button').on('click', function() {

    //   theCall;
    // })
  // console.log('stuff')
  }
}

  // someAjax: function() {
  //   let ipsum = '';
  //   let theCall = $.ajax({
  //     url: ROOT + '/posts/1',
  //     method: 'GET'
  //   }).then(function(data) {
  //     ipsum = data['title'];
  //   });

  //   firstName.on('mouseover', function() {
  //     firstName.html(ipsum);
  //   });
  // },

  // postAjax: function() {
  //   let successCallback = function() {
  //       console.log('post ajax success');
  //     // $('h1').text('hella lit');
  //   }

  //   let ajaxOptions = {
  //     url: 'http://localhost:9292/name',
  //     method: 'POST',
  //     data: { "name": "ayylmao is so lit" },
  //     dataType: 'application/json',
  //     success: successCallback
  //   }

  //   let theCall = $.ajax(ajaxOptions)
  //     .done(function(ajaxOptions, textStatus) {
  //       console.log(ajaxOptions);
  //       console.log('next thing', textStatus);
  //     })
  //     .fail(function(failty) {
  //       console.log(failty);
  //     })
  //     .then(function(d) {
  //     });

  //   $('#full_name').on('click', function() {

  //     theCall;
  //   })
  // },

  // hideH1OnClick: function() {
  //   let h1 = $('h1')
  //   let header = h1.text();
  //   let funny = 'over here, big boy!'
  //   h1.on('click', function() {
  //     h1.hide();
  //     $('#last_name').text(header);
  //     $('#first_name').text(funny);
  //   })
  // }
