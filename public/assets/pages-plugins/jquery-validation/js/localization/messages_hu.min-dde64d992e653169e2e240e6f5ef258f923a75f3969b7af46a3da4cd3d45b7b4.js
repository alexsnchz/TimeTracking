/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */

!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"Kötelező megadni.",maxlength:a.validator.format("Legfeljebb {0} karakter hosszú legyen."),minlength:a.validator.format("Legalább {0} karakter hosszú legyen."),rangelength:a.validator.format("Legalább {0} és legfeljebb {1} karakter hosszú legyen."),email:"Érvényes e-mail címnek kell lennie.",url:"Érvényes URL-nek kell lennie.",date:"Dátumnak kell lennie.",number:"Számnak kell lennie.",digits:"Csak számjegyek lehetnek.",equalTo:"Meg kell egyeznie a két értéknek.",range:a.validator.format("{0} és {1} közé kell esnie."),max:a.validator.format("Nem lehet nagyobb, mint {0}."),min:a.validator.format("Nem lehet kisebb, mint {0}."),creditcard:"Érvényes hitelkártyaszámnak kell lennie.",remote:"Kérem javítsa ki ezt a mezőt.",dateISO:"Kérem írjon be egy érvényes dátumot (ISO)."})});
