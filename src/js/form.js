
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

        $.ajax({
            type: 'POST',
            cache: false,
            url: $(this).attr('action'),
            data: bodyFormData, 
            success: function(res, status, xhr) {
              console.log(xhr, status, res);
              $('.systemMessage').addClass('systemMessage__isVisible');
              $('.systemMessage__text').text('Сообщение было успешно отправленно!');
              $('.contactUs__input').val('');
            },
            error: function (xhr, status, err) {
              console.log(xhr, status, err);
              $('.systemMessage').addClass('systemMessage__isVisible');
              $('.systemMessage__text').text('Произошла ошибка!');
            }
          });
          
        }
      }); 
      
      $('.systemMessage__cross').click(function(){
        $('.systemMessage').removeClass('systemMessage__isVisible');
        $('.systemMessage__text').text('');
      });
      
    });
    
