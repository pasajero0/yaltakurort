
// validation regExp

const string = value => value && /^(([A-za-zА-яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+[- ]{1}[A-za-zА-яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+)|([A-Za-zА-Яа-яàâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]+))$/gim.test(value);

// const string = value => value && /^(([A-za-z]+[- ]{1}[A-za-z]+)|([A-Za-z]+))$/gim.test(value);

const phone = value => value && /^(?!\+.*\(.*\).*\-\-.*$)(?!\+.*\(.*\).*\-$)(([0-9]{0,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?(\+[0-9]{1,11})?( [0-9]{3})?( [0-9]{3})?( [0-9]{2})?( [0-9]{2})?(\([0-9]{3})?(\)[0-9]{3})?([-]{0,1})?([0-9]{0,2})?([-]{0,1})?([0-9]{0,2})?( [0-9]{2})?( [0-9]{2})?)$/gim.test(value);

const email = value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

const maxLength = max => value => value.length <= max;

const minLength = min => value => value && value.length >= min;

// submit form

$(document).ready(function() {
  $('form[name=contactUsForm]').submit(function(e){
      e.preventDefault();

      const errors = {};
      $(this).serializeArray().forEach(item => {

        if (item.name === 'name') {
          if (!string(item.value)) {
            errors[item.name] = 'Неверные данные!';
          }
        } else if (item.name === 'phone') {
          if (!phone(item.value)) {
            errors[item.name] = 'Неверный номер!';
          } else if (!minLength(10)(item.value)) {
            errors[item.name] = 'Слишком короткий номер!';
          } else if (!maxLength(13)(item.value)) {
            errors[item.name] = 'Неверный номер!';
          }
        } else if (item.name === 'email') {
          if (!email(item.value)) {
            errors[item.name] = 'Неверный e-mail!';
          }
        } 

      });

      if (Object.keys(errors).length) {
        console.log('errors', errors)
        $('.contactUs__fieldError').text('');
        Object.keys(errors).forEach(key => {
          $(`#${key}Err`).text(errors[key]);
        })
      } else {
        $('.contactUs__fieldError').text('');

        const bodyFormData = $(this).serialize()

        console.log(bodyFormData);
        $.ajax({
            type: 'POST',
            cache: false,
            url: $(this).attr('action'),
            data: $(this).serialize(), 
            success: function(res, status, xhr) {
              console.log('======> ', res, 'Сообщение успешно отправленно!');
              console.log(xhr, status, res);
              $('.contactUs__input').val('');
            },
            error: function (xhr, status, err) {
              console.log('======> ', err, 'Ошибка отправки!');
              console.log(xhr, status, err);
            }
          });
          
        }
      });     
    });
    
    
    
    // axios({
    //   method: 'post',
    //   url: 'dist/php/mail.php',
    //   data: bodyFormData,
    //   config: { headers: {'Content-Type': 'multipart/form-data' }}
    // })
    //   .then(function (res) {
    //       //handle success
    //       console.log('response ===>', res);
    //   })
    //   .catch(function (res) {
    //       //handle error
    //       console.log('response ===>', res);
    //   });
  
          // $.ajax({
          //   type: 'POST',
          //   cache: false,
          //   global: true,
          //   traditional: true,
          //   url: $(this).attr('action'),
          //   data: $(this).serialize(), 
          //   success: function(msg) {
          //     // $("#boxContentId").html(msg);
          //     console.log(msg);
          //     $('.contactUs__input').val('');
          //   }
          // });
  
          // $.post('mail.php', $(this).serialize(), function(res, status){
          //   // Do something with the response `res`
          //   console.log(res, status);
          //   // Don't forget to hide the loading indicator!
          // });




// $('form[name=contactUsForm]').submit(function(){

//   // Maybe show a loading indicator...

//   $.post($(this).attr('action'), $(this).serialize(), function(res){
//       // Do something with the response `res`
//       console.log(res);
//       // Don't forget to hide the loading indicator!
//   });

//   return false; // prevent default action

// });