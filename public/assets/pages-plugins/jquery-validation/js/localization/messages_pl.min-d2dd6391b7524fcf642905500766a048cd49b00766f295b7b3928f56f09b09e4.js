/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"To pole jest wymagane.",remote:"Proszę o wypełnienie tego pola.",email:"Proszę o podanie prawidłowego adresu email.",url:"Proszę o podanie prawidłowego URL.",date:"Proszę o podanie prawidłowej daty.",dateISO:"Proszę o podanie prawidłowej daty (ISO).",number:"Proszę o podanie prawidłowej liczby.",digits:"Proszę o podanie samych cyfr.",creditcard:"Proszę o podanie prawidłowej karty kredytowej.",equalTo:"Proszę o podanie tej samej wartości ponownie.",extension:"Proszę o podanie wartości z prawidłowym rozszerzeniem.",maxlength:a.validator.format("Proszę o podanie nie więcej niż {0} znaków."),minlength:a.validator.format("Proszę o podanie przynajmniej {0} znaków."),rangelength:a.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),range:a.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),max:a.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),min:a.validator.format("Proszę o podanie wartości większej bądź równej {0}.")})});
